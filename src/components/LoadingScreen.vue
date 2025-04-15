

<template>
    
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPage = ref('Landing')
const isLoading = ref(true)
const imageLoaded = ref(false)
const cachedImage = '/images/portfolio-img.webp?v=1'

// Función para ocultar el loading
const hideLoadingScreen = () => {
    const loadingScreen = document.getElementById('loading-screen')
    if (loadingScreen) {
        loadingScreen.style.opacity = '0'
        setTimeout(() => {
            loadingScreen.style.display = 'none'
            
        }, 500) 
    } else {
        // Por si no encuentra el elemento, igual lo marcamos como listo
        
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

onMounted(() => {
   
   
    
})

// Observamos cambios de ruta
watch(() => router.currentRoute.value, (to) => {
    const on = document.getElementById('loading-screen')
    on.style.opacity = '1'
    on.style.display = 'flex'

    currentPage.value = to.name
    isLoading.value = true // Mostrar loading al cambiar de ruta
    window.prerenderReady = false
    loadImage() 

})
</script>



<style scoped>

                
</style>