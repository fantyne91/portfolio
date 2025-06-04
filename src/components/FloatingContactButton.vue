

<style scoped>

.floating-btn {
    position: fixed;
    border-radius: 100%;
    bottom: 120px;
    right: clamp(0px, 2vw ,54px); 
    padding: 0;
    max-height: 50px;
    width: 48px;
    height: 48px;
    background-color: var(--color-secondary);
    z-index: 100;
    box-shadow: 0 0 4px  var(--color-grey-3); 
    opacity:0;       
}

.floating-btn:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
}
.contactIcon {
   height: 100%;
   width: 100%;
    font-family: 'Material Symbols Outlined';
    font-variation-settings:
        'FILL' 0,
        'wght' 300,
        'GRAD' 0,
        'opsz' 40;
    color: #62626F;      
        font-size: 26px;
        align-content: center;
        padding-top:3px ;
}
@media (max-width: 540px) {
       
        .contactIcon {
            color: var(--color-grey-4);
        }
}

</style>
<template>
    <button  role="link" class="floating-btn p-align flex contact-btn" >
        <span class="contactIcon">
            chat
        </span>
    </button>
</template>

<script setup>
import { computed, onMounted, watch, nextTick } from 'vue';
 import { useRouter, useRoute } from 'vue-router';

 const router = useRouter();
 const route = useRoute();

//  const showButton = computed(() =>
//      [ 'Uxui', 'Programacion', 'Videojuegos' ].includes(route.name)
     
//  );
//  const goToContact = () => {
//      localStorage.setItem('fromPage', route.name); 
//      router.push('/contacta');                    
//  };
// watch(showButton, async (isVisible) => {
//     if (!isVisible) return

//     await nextTick()

//     // Asegura que el botón flotante ya esté en el DOM
//     const floating = document.querySelector('.floating-btn')
//     if (floating) {
//         floating.style.opacity = '1'
//     }

//     // Añade evento a todos los .contact-btn visibles en esta ruta
//     document.querySelectorAll('.contact-btn').forEach(button => {
//         button.addEventListener('click', goToContact)
//     })
// }, { immediate: true })
//  onMounted(() => {
//      document.querySelectorAll('.contact-btn').forEach(button => {
//          button.addEventListener('click', goToContact);
//      });
//      const floating = document.querySelector('.floating-btn')
//      if (floating) {
//          floating.style.opacity = "1";
//      }
//  });
</script>
