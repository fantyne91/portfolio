<script setup>
// Importa el componente Header
import Header from '@/components/Header.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import Footer from '@/components/Footer.vue';
import Cookie from '@/components/Cookie.vue';

import { onMounted, computed, watch } from 'vue';     // Herramientas para reactividad
import { useRoute, useRouter } from 'vue-router'; // Herramienta para manejar rutas

const route = useRoute()
const router = useRouter()

const currentPage = computed(() => route.name || 'Landing')
const currentPageClassComputed = computed(() => {
    return `page-${currentPage.value.toLowerCase()}`
})
const goToContact = () => {
    localStorage.setItem('fromPage', route.name);
    router.push('/contacta');
};
// Delegación de eventos para todos los botones con clase .contact-btn
const handleClick = (e) => {
    const target = e.target.closest('.contact-btn');
    if (target) {
        goToContact();
    }
};
onMounted(() => {
    document.addEventListener('click', handleClick);
});
const showButton = computed(() =>
    [ 'Uxui', 'Programacion', 'Videojuegos' ].includes(route.name)
);
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
    <button v-if="showButton" role="link" class="floating-btn p-align flex" @click="goToContact">
        <span class="contactIcon">
            chat
        </span>
    </button>
    <Cookie></Cookie>
</template>



<style scoped>
.floating-btn {
    position: fixed;
    border-radius: 100%;
    bottom: 120px;
    right: clamp(0px, 2vw, 54px);

    padding: 0;
    max-height: 50px;
    width: 48px;
    height: 48px;
    background-color: var(--color-secondary);
    z-index: 100;
    box-shadow: 0 0 4px var(--color-grey-3);

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
    padding-top: 3px;
}

@media (max-width: 540px) {

    .contactIcon {
        color: var(--color-grey-4);
    }
}
</style>