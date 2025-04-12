

<template>
    <div id="loading-screen" class="flex">
        <div class="gif-container flex">
            <img class="gif" src="/images/gif-carga.webp" alt="Animación en movimiento carga " width="140" height="140">
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPage = ref('Landing')
const isLoading = ref(true)
const imageLoaded = ref(false)
const cachedImage = '/images/portfolio-img.webp?v=1'

onMounted(() => {
    window.prerenderReady = false
})

// Función para ocultar el loading
const hideLoadingScreen = () => {
    const loadingScreen = document.getElementById('loading-screen')
    if (loadingScreen) {
        loadingScreen.style.opacity = '0'
        setTimeout(() => {
            loadingScreen.style.display = 'none'
            window.prerenderReady = true
        }, 500) 
    } else {
        // Por si no encuentra el elemento, igual lo marcamos como listo
        window.prerenderReady = true
    }
}

// Función para cargar la imagen
const loadImage = () => {
    const img = new Image()
    img.src = cachedImage

    img.onload = () => {
        imageLoaded.value = true
        hideLoadingScreen() // Ocultar loading cuando la imagen esté lista
    }

    img.onerror = () => {
        // Si hay error, igual ocultamos el loading después de un tiempo
        setTimeout(hideLoadingScreen, 1000)
    }
}

// Observamos cambios de ruta
watch(() => router.currentRoute.value, (to) => {
    currentPage.value = to.name
    isLoading.value = true // Mostrar loading al cambiar de ruta
    window.prerenderReady = false

    if (to.name === 'Landing') {
        loadImage() // En Landing, cargar la imagen principal
    } else {
        setTimeout(hideLoadingScreen, 500) // Otras rutas: ocultar después de 500ms
    }
})
</script>



<style scoped>

                 #loading-screen {
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100vh;
                     justify-content: center;
                     align-items: center;
                     background: var(--color-secondary);
                     z-index: 99990;
                     color: var(--color-primary);
                     opacity: 1;
                     transition: opacity 1.5s ease-in-out;        
                 }
        
                 #loading-screen * {
                     opacity: 0;
                     animation: fadeIn 5s ease forwards;
                 }
        
                 @keyframes fadeIn {
                     from {
                         opacity: 0;
                     }
        
                     to {
                         opacity: 1;
                     }
                 }
        
        
                 .gif {
                     border-radius: 60%;
                 }
        
                 .gif-container {
                     align-items: center;
                 }
        
                 .gif-container::before {
                     content: "";
                     box-shadow: inset 0 0 10px 5px var(--color-secondary);
                     width: 140px;
                     height: 140px;
                     border-radius: 60%;
                     position: absolute;
                     z-index: 99999;
                 }
</style>