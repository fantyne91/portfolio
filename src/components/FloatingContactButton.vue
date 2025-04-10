<template>
    <button v-if="showButton" role="link" class="floating-btn p-align flex" @click="goToContact">
        <span class="contactIcon">
            chat
        </span>
    </button>
</template> 

<style scoped>

.floating-btn {
    position: fixed;
    border-radius: 100%;
    bottom: 60px;
    right: clamp(0px, 2vw ,54px);
 
    padding: 0;
    max-height: 50px;
    width: 48px;
    height: 48px;
    background-color: var(--color-secondary);
    z-index: 100;
    box-shadow: 0 0 4px  var(--color-grey-3);
        
}

.floating-btn:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
}
.contactIcon {
   
    font-family: 'Material Symbols Outlined';
    font-variation-settings:
        'FILL' 0,
        'wght' 300,
        'GRAD' 0,
        'opsz' 40;
    color: #62626F;      
        font-size: 26px;
       margin-top:7px;
    
}
@media (max-width: 540px) {
        .floating-btn {
            bottom: 40px;
        }
        .contactIcon {
            color: var(--color-grey-4);
        }
}

</style>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const showButton = computed(() =>
    [ 'Uxui', 'Programacion', 'Videojuegos' ].includes(route.name)
);
const goToContact = () => {
    localStorage.setItem('fromPage', route.name); 
    router.push('/contacta');                    
};

onMounted(() => {
    document.querySelectorAll('.contact-btn').forEach(button => {
        button.addEventListener('click', goToContact);
    });
});
</script>