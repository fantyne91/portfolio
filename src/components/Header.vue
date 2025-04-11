<template>
  <header class="header" role="banner">
    <router-link to="/" class="logo" aria-label="Ir al inicio">
      <img src="https://www.mariadevdesign.com/images/logo.webp"
        alt="Logo de María Ortiz, diseñado UX/UI y desarrollo web" width="150" height="49">
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
/* Aquí van los estilos del header */
</style>


<!-- <header class="header" role="banner">
            
            <router-link to="/" class="logo" aria-label="Ir al inicio">
                    <img src="/images/logo.webp" alt="Logo de María Ortiz, diseñado UX/UI y desarrollo web" height="auto">
            </router-link>                  
            
            
           
            <div>
                <button v-show="isMobileOrTablet" class="menu-toggle" @click="toggleMenu" :aria-label="menuOpen ? 'Cerrar el menú' : 'Abrir el menú'">
                  
                    <span :class="{ open: menuOpen }" class="hamburger-icon" tabindex="0"  :aria-hidden="menuOpen ? 'false' : 'true'">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>           
            </div>
            
           
            <nav :class="menuOpen ? 'nav-menu open' : 'nav-menu'" @click="toggleMenu" aria-label="Menú principal" >
            <router-link  to="/" tabindex="0" aria-label="Ir a la página de inicio">Inicio</router-link>
            <router-link  to="/uxui" tabindex="0" aria-label="Ir a la sección UX/UI">Ux/ui</router-link>
            <router-link to="/programacion" tabindex="0" aria-label="Ir a la sección de Programación">Programación</router-link>
            <router-link  to="/videojuegos" tabindex="0" aria-label="Ir a la sección de Videojuegos">Videojuegos</router-link>
            <router-link  to="/sobre-mi" tabindex="0" aria-label="Ir a la sección Sobre mí">Sobre mí</router-link>
            <router-link to="/contacta" tabindex="0" aria-label="Ir a la sección Sobre mí">Contacto</router-link>
            </nav>            
        </header> -->