import '../styles/sobremi.css'

export default {
  name: 'SobreMi',
  template: /*html*/ `
  <section class="about-me">
      <h1>Un poco de mi</h1>
      <img src="/images/maria.webp" alt="Imagen 2" class="scroll-item">
      <div class="text scroll-item">
        <p>Hola!</p>
        <p>Soy María.</p>
      </div>
      <img src="/images/chian.webp" alt="Imagen 2" class="scroll-item">
      
      <div class="text scroll-item">
        <p>Me encanta fotografíar el cielo y la luna, dibujar a lápiz, pintar en acrílico y los animales.</p>
      </div>
      <img src="/images/clouds.webp" alt="Imagen 3" loading="lazy" class="scroll-item">
      <div class="text scroll-item">
        <p>Disfruto estudiando el porqué de las cosas, y programando pierdo la noción del tiempo.</p>      
      </div>
      
    <img src="/images/chian-temple.webp" alt="Imagen 3" loading="lazy" class="scroll-item">
    
    <div class="text scroll-item">
      <p>Desde pequeña he amado los videojuegos, la estrategia y los retos lógicos.</p>      
    </div>
    <img src="/images/medano.webp" alt="Imagen 1"  loading="lazy" class="scroll-item">
    <div class="text scroll-item">
      <p>Con los años, he desarrollado una gran apreciación por las interfaces bien diseñadas y la usabilidad efectiva.</p>
    </div>
     <div class="text scroll-item">
      <p>Esta pasión también me ha convertido en una crítica atenta a los detalles.</p>
    </div>
    
    <img src="/images/srilanka.webp" alt="Imagen 3" loading="lazy" class="scroll-item">
     <div class="text scroll-item">
      <p>Final Fantasy, World of Warcraft, Skyrim, Half-Life y Frostpunk1  han inspirado mi enfoque, mostrándome la importancia de las comunidades y la conexión significativa entre usuarios y experiencias.</p>
    </div>
     <img src="/images/tene.webp" alt="Imagen 3" loading="lazy" class="scroll-item">
     <div class="text scroll-item">
      <p>Hoy, diseño y desarrollo aplicaciones web y videojuegos, combinando arte y tecnología.</p>
    </div>
    
     <div></div>
       
  </section>
  `,

  mounted() {
    const items = document.querySelectorAll('.scroll-item')

    const applyScrollEffect = () => {
      const vh = window.innerHeight // Altura de la pantalla
      const centerScreen = vh / 2 // Centro de la pantalla

      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const itemCenter = rect.top + rect.height / 2
        const distance = itemCenter - centerScreen

        // Normalizar el progreso (0 en el centro, 1 en los laterales)
        const progress = Math.min(1, Math.abs(distance / (vh / 3)))

        // Escala: comienza en 0.5 y crece hasta 1.3
        const scale = 0.9 + progress * 0.8

        // Movimiento lateral: hacia la izquierda o derecha
        const translateX = progress * 300 * (distance > 0 ? 1 : -1)

        // Opacidad: 1 en el centro, 0 cuando está en los márgenes
        const opacity = 1.15 - progress

        // Aplicar transformaciones
        item.style.transform = `scale(${scale}) translateX(${translateX}px)`
        item.style.opacity = opacity
      })
    }

    // Aplicar efecto al cargar la página
    applyScrollEffect()

    // Agregar el evento de scroll
    window.addEventListener('scroll', applyScrollEffect)
  },
}
