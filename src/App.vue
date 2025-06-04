<script setup>

import Header from '@/components/Header.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import Footer from '@/components/Footer.vue';
import Cookie from '@/components/Cookie.vue';
import FloatingContactButton from '@/components/FloatingContactButton.vue';

import { computed, watch, nextTick } from 'vue';     // Herramientas para reactividad
import { useRoute, useRouter } from 'vue-router'; // Herramienta para manejar rutas

const route = useRoute()
const router = useRouter()

const currentPage = computed(() => route.name || 'Landing')
const currentPageClassComputed = computed(() => {
    return `page-${currentPage.value.toLowerCase()}`
})
const showButton = computed(() =>
    [ 'Uxui', 'Programacion', 'Videojuegos' ].includes(route.name)

);
const goToContact = () => {
    localStorage.setItem('fromPage', route.name);
    router.push('/contacta');
};

watch(()=> route.name, async () => {


    await nextTick()

    // Asegura que el botón flotante ya esté en el DOM
    const floating = document.querySelector('.floating-btn')
    if (floating) {
        floating.style.opacity = '1'
    }
    // Añade evento a todos los .contact-btn visibles en esta ruta
    document.querySelectorAll('.contact-btn').forEach(button => {
        button.removeEventListener('click', goToContact) // Limpieza previa
        button.addEventListener('click', goToContact)
    })
}, { immediate: true })
</script>

<template>
    <LoadingScreen />
    <Header></Header>

    <main :class="currentPageClassComputed">
        <router-view v-slot="{ Component }">
            <keep-alive exclude="Contacta">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </main>

    <Footer></Footer>
    <FloatingContactButton v-if="showButton"/>        
    <Cookie></Cookie>
</template>

