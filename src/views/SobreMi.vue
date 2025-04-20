<script setup>

import { onMounted,nextTick } from 'vue'
import { useMetaData } from '@/composables/useMetaData'

useMetaData({
  title: 'Sobre Mí | María Dev Design - Desarrolladora y Diseñadora',
  description: 'Soy María Ortiz, diseñadora UX/UI y desarrolladora de webs y videojuegos, centrados en el usuario. Sueño con crear una plataforma que cambie el mundo de los animales ',
  path: '/sobre-mi'
})

onMounted(() => {
  const items = document.querySelectorAll('.scroll-item');

  // Inicializamos: la primera imagen se queda sin efectos y los demás se inician en su estado "naciente"
  items.forEach((item, index) => {
    if (index === 0) {
      item.style.transform = 'scale(1)';
      item.style.opacity = '1';
    } else {
      // Inicia muy pequeño y casi invisible
      item.style.transform = 'scale(0.1)';
      item.style.opacity = '0';
    }
  });

  const applyScrollEffect = () => {
    const vh = window.innerHeight;
    const centerScreen = vh / 2;
    // Definimos un umbral para que el efecto se complete al alejarse del centro
    const threshold = vh / 1; // Ajusta este valor según el efecto deseado

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(itemCenter - centerScreen);

      // Progreso: 0 en el centro, 1 en o más allá del umbral
      let progress = distance / threshold;
      if (progress > 1) progress = 1;

      // Si es la primera imagen, la dejamos en tamaño completo
      if (index === 0) {
        item.style.transform = 'scale(1)';
        item.style.opacity = '1';
      } else {
       
        // la idea es que al estar en el centro (progress ~ 0) el elemento alcance su tamaño máximo (1).
        // Y a medida que avanza el progreso (al alejarse), disminuya (por ejemplo, a 0.3).
        const minScale = 0.3;  // Escala mínima cuando ya está lejos del centro
        const scale = (1 - progress) * (1 - minScale) + minScale;

        //cuando el elemento esté en el centro, translateX sea 0
        // Y a medida que se aleje, se desplace suavemente hacia los lados.
        // Usamos la dirección del elemento dependiendo si está por arriba o por debajo del centro.
        const direction = (itemCenter - centerScreen) >= 0 ? 1 : -1;
        // Máximo desplazamiento en píxeles
        const translateX = progress *  direction;

        // La opacidad: máxima (1) en el centro y se reduce conforme se aleja
        const opacity = 1 - progress;

        item.style.transform = `scale(${scale}) translateX(${translateX}px)`;
        item.style.opacity = opacity;
      }
    });
  };

  // Ejecutamos la función al cargar la página
  applyScrollEffect();

  // Y la actualizamos al hacer scroll
  window.addEventListener('scroll', applyScrollEffect);

  /*prerender*/
    nextTick(() => {
      setTimeout(() => {
        window.prerenderReady = true
      
      }, 200)
    })
  

});
</script>

<template>
  <section class="about-me">
    <h1>Un poco de mi</h1>
    <img src="/images/maria.webp" alt="Imagen 2" class="scroll-item">
    <div class="text scroll-item">
      <p>Hola!</p>
      <p>Soy María.</p>
    </div>
    <div class="text scroll-item flex-row ">
      <p>Me encanta fotografiar el cielo y la luna, dibujar a lápiz y pintar en acrílico.</p>
      <img src="/images/nubes-medano.webp" alt="Imagen presentación Maria" loading="lazy" class="scroll-item">
    </div>




    <div class="text scroll-item flex">
      <img src="/images/clouds.webp" alt="nubes en Canarias" loading="lazy" class="scroll-item">
      <p>Disfruto estudiando el porqué de las cosas.</p>
    </div>
    <div class="text scroll-item flex-row">
      <img src="/images/chian-temple.webp" alt="Templo Tailandia Chian rai" loading="lazy" class="scroll-item">
      <p>Desde pequeña he amado los videojuegos, la estrategia y los retos lógicos.</p>
    </div>

    <div class="text scroll-item">
      <p>Con los años, he desarrollado una gran apreciación por las interfaces bien diseñadas y la usabilidad efectiva.
      </p>
    </div>
    <div class="text scroll-item">
      <p>Esta pasión también me ha convertido en una crítica atenta a los detalles.</p>
    </div>


    <div class="text scroll-item flex-row">

      <p>Videojuegos como Final Fantasy y World of Warcraft, han inspirado mi enfoque, mostrándome la
        importancia de las comunidades y la conexión significativa entre usuarios y experiencias.</p>
      <img src="/images/srilanka.webp" alt="Mochileando por Srilanka" loading="lazy" class="scroll-item">
    </div>
    <div class="text scroll-item flex-row">
      <img src="/images/chian.webp" alt="Vistas arcoíris en Tailandia" loading="lazy" class="scroll-item">
      <p>Hoy, diseño y desarrollo aplicaciones web y videojuegos, combinando arte y tecnología.</p>
    </div>

  </section>
</template>

<style scoped>

/* Imágenes con tamaño moderado */

.about-me {
  gap: 5rem;
  overflow: hidden;
  background-color: var(--color-blue-black);
  color: var(--color-primary);
  text-align: center;
  padding-bottom: 0;
}
.page-sobremi .flex-row {
  max-width: max-content;
}
.section.reverse {
  flex-direction: row-reverse;
}
.scroll-item {
  opacity: 0;
  transition: transform 0.3s linear, opacity 0.1s linear;
}
.scroll-item img {
  max-width: 700px;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
}
.text {
  color: var(--color-primary);
  line-height: 1.8;
}
.text * {
  font-size: clamp(1.5rem, 4vw, 2.6rem) !important;
  font-weight: 500;
}

@media (max-width: 540px) {
  .about-me{
    padding-bottom: var(--space-xs);
  }
  .page-sobremi img {
    width: 100%;
    height: auto;
  }
}
</style>
