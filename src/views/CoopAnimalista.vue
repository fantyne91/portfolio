<template>
    <div class="landing-animal">
        <h1>Bienvenido a YuPets o hiwuff</h1>
        <div class="landing-text">
            <p> Y si te dijera que puedes salvar vidas aportando tus skills? </p>
            <p> En YuPets o hiwuff estamos buscando personas como tú, animalistas que quieren actuar pero no saben como
                aportar. </p>
            <p>Esto no es una simple app de adopciones... Vamos a cambiar las reglas.</p>
        </div>
        <img src="/images/dog-web.png" alt="Dog" width="1200" height="900">
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    const moveScroll = () => {
        const landingImg = document.querySelector('.landing-animal img')
        const landingText = document.querySelector('.landing-text ')
        const landingh1 = document.querySelector('.landing-animal h1')
        const moveDown = 20

        
        // setTimeout(() => {
        //     landingText.style.fontSize = '3rem'
        //     landingText.style.transition = 'all 2s ease-in-out'
        // }, 1000)

         const scrollY = window.scrollY

        if (scrollY < moveDown) {
            landingImg.style.opacity = '1'
         } else {
            landingImg.style.opacity = Math.max(1 - scrollY / moveDown + 0.2, 0.1)
            landingImg.style.transition = 'opacity 1.5s ease-in-out'

             landingh1.style.opacity = 0
             landingh1.style.transition = 'all 1.5s ease-in-out'
            const move = scrollY * 10            
            landingText.style.transform = `translateX(-${move}px )`               
            landingText.style.opacity = 1
            landingText.style.transition = 'all 1.5s ease-in-out'
         }
    }

    onMounted(() => {
         addEventListener('scroll', moveScroll)
    })
    
</script>

<style scoped>
.landing-animal {
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh ;
    font-family: 'Arial', sans-serif;
    text-align: center;
 
}

.landing-animal h1 {
    position: fixed;
    left: 0;
    top:100px;
    font-size: 5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
    color: #333;
}

.landing-text{
    position: fixed;
   right: -800px;
top:20%;
    z-index: 3;
    color: var(--color-primary);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    width: 800px;
    line-height: 1.6;
    /* transform-origin: center center; */
}
.landing-text * {
    opacity: 1;
    margin: 20px;
    font-size: 35px;
}
.landing-animal img{
    width:100%;
    height: 100vh;;
    object-fit: cover;
    object-position: center;
    position: fixed;
    z-index: -1;
}
</style>