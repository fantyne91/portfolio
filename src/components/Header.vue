<template>
  <header class="header" role="banner">
    <router-link to="/" class="logo" aria-label="Ir al inicio">
      <img src="/images/logo.webp"
        alt="Logo de María Ortiz, diseñadora UX/UI y desarrollo web" width="150" height="49" loading="eager"
         >
    </router-link>


    <button v-show="isMobileOrTablet" class="menu-toggle" @click="toggleMenu"
      :aria-label="menuOpen ? 'Cerrar el menú' : 'Abrir el menú'">
      <span :class="{ open: menuOpen }" class="hamburger-icon" tabindex="0">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>


    <nav :class="menuOpen ? 'nav-menu open' : 'nav-menu'" @click="toggleMenu" aria-label="Menú principal">
      <router-link to="/" tabindex="0" aria-label="Ir a la página de inicio">Inicio</router-link>
      <router-link to="/uxui" tabindex="0" aria-label="Ir a la sección UX/UI">Ux/ui</router-link>
      <router-link to="/programacion" tabindex="0"
        aria-label="Ir a la sección de Programación">Programación</router-link>
      <router-link to="/videojuegos" tabindex="0" aria-label="Ir a la sección de Videojuegos">Videojuegos</router-link>
      <router-link to="/sobre-mi" tabindex="0" aria-label="Ir a la sección Sobre mí">Sobre mí</router-link>
      <router-link to="/contacta" tabindex="0" aria-label="Ir a la sección Contacto">Contacto</router-link>
    </nav>
  </header>
</template>


<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isMobileOrTablet = ref(false);
const main = ref(null);

//methods
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const updateScreenSize = () => {
  isMobileOrTablet.value = window.innerWidth <= 950
  if (!isMobileOrTablet.value) {
    menuOpen.value = false
  }
};

const closeClickOutside = (event) => {
  if (menuOpen.value && main.value.contains(event.target)) {
    menuOpen.value = false
  }
};

watch(menuOpen, () => {
  if (!main.value) return;

  if (menuOpen.value) {
    main.value.addEventListener('click', closeClickOutside);
  } else {
    main.value.removeEventListener('click', closeClickOutside);
  }
}); 

onMounted(() => { 
  updateScreenSize() // Comprobamos el tamaño al iniciar
  window.addEventListener('resize', updateScreenSize) // Detectamos cambios

  main.value = document.querySelector('main');
});
  

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize) // Limpiamos el evento
  if (main.value) {
    main.value.removeEventListener('click', closeClickOutside);
  }
})

</script>

<style scoped>
        /** HEADER index*/
    
        header {
          top: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-height: 74px;
          width: 100%;
          padding: 2px var(--space-md);
          position: sticky;
          transform: translateZ(0);
          /* Fuerza capa GPU */
          left: 0;
          z-index: 1000;
          background: var(--color-blue-black);
          box-shadow: 0px 1px 3px var(--color-grey-3);
          color: var(--color-primary);
        }
    
        .logo {
          all: unset;
          display: flex;
          justify-content: center;
          cursor: pointer
        }
    
        .logo img {
          width: 150px;
          height: auto;
          flex-shrink: 0;
        }
    
        /*nav list*/
        .nav-menu {
          display: flex;
          gap: clamp(var(--space-xs), 2vw, var(--space-md));
          align-items: center;
          width: 100%;
          justify-content: end;
        }
    
        .nav-menu a {
          padding: var(--space-xxs) var(--space-xs);
          white-space: nowrap;
          transition: color 0.5s ease;
        }
    
        .nav-menu a:hover {
          color: #f8d06a;
          transform: scale(1.1);
          width: auto;
          transition: all 0.1s linear;
    
        }
    
        /*focus nav*/
        .nav-menu a:focus {
          color: #f8d06a;
        }
    
        .hamburger-icon:focus span {
          background-color: #f8d06a;
        }
    
        /*toggle*/
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          padding: 0px;
          cursor: pointer;
          width: 26px;
          height: 18px;
          position: relative;
        }
    
        .hamburger-icon {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }
    
        .hamburger-icon span {
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
          transition: 0.3s ease;
        }
    
        /* Estado abierto del menú hamburguesa */
        .hamburger-icon.open span:first-child {
          transform: translateY(8px) rotate(45deg);
        }
    
        .hamburger-icon.open span:nth-child(2) {
          opacity: 0;
        }
    
        .hamburger-icon.open span:last-child {
          transform: translateY(-8px) rotate(-45deg);
        }
                @media (max-width: 950px) {
        
                  .nav-menu {
                    /* display: none; */
                    visibility: hidden;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--color-blue-black);
                    flex-direction: column;
                    gap: 0;
                    box-shadow: 0 2px 3px var(--color-shadow-middle-gray);
                    opacity: 0;
                    z-index: 9999;
                  }
        
                  .nav-menu.open {
                    /* width: 100%; */
                    visibility: visible;
                    display: flex;
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
                    padding-bottom: var(--space-xxs);
                  }
        
                  .nav-menu a {
        
                    padding: var(--space-xxs) 0;
                    text-align: center;
                  }
                .menu-toggle {
                  display: block;
                }
                }
        
                @media (max-width: 400px) {
                  .header {
                    position: fixed;
                    top: env(safe-area-inset-top);
                    padding-top: env(safe-area-inset-top);
                  }
                }
</style>
