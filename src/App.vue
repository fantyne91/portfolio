<script setup>
// Importa el componente Header
import Header from '@/components/Header.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import Footer from '@/components/Footer.vue';
import Cookie from '@/components/Cookie.vue';

import { onMounted, computed, watch } from 'vue';     // Herramientas para reactividad
import { useRoute } from 'vue-router'; // Herramienta para manejar rutas

const route = useRoute()


const currentPage = computed(() => route.name || 'Landing')
const currentPageClassComputed = computed(() => {
    return `page-${currentPage.value.toLowerCase()}`
})

/*load google icons */



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

    <Cookie></Cookie>
</template>



<style scoped>
/* Estilos globales o generales */
</style>