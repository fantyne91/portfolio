import '../styles/sobremi.css'

export default {
  name: 'SobreMi',
  template: /*html*/ `
  <section class="about-me">
      <img src="/images/maria.webp" alt="Imagen 2" class="scroll-item">
      <div class="text scroll-item">Amo fotografíar el cielo y la luna. Dibujar con lápiz y pintar en acrílico.
      </div>
    <img src="/images/avion.webp" alt="Imagen 3" class="scroll-item">
     <div class="text scroll-item">
      La sencillez, la lógica, y los videojuegos.
    </div>
      <img src="/images/clouds.webp" alt="Imagen 3" class="scroll-item">
    
      
        
   <div class="text scroll-item">
      Desde pequeña he sido curiosa y he amado los videojuegos de estrategia y los retos lógicos.
      
    </div>
    <img src="/images/chian-temple.webp" alt="Imagen 3" class="scroll-item">
    
    <div class="text scroll-item">
      Con los años he desarrollado una gran apreciación por las interfaces bien diseñadas y la usabilidad efectiva.<br> Esta pasión también me ha convertido en una crítica atenta a los detalles.
    </div>
    <img src="/images/medano.webp" alt="Imagen 1" class="scroll-item">
     
     <div class="text scroll-item">
      Disfruto estudiando el porqué de las cosas. Me encanta la programación donde vuelan las horas superando retos.
      
    </div>
    <img src="/images/srilanka.webp" alt="Imagen 3" class="scroll-item">
     <div class="text scroll-item">
      Final Fantasy, World of Warcraft, Skyrim, Half-Life y Frostpunk1  han inspirado mi enfoque, mostrándome la importancia de las comunidades y la conexión significativa entre usuarios y experiencias.

    </div>
     <img src="/images/tene.webp" alt="Imagen 3" class="scroll-item">
     <div class="text scroll-item">
      Diseño y desarrollo aplicaciones webs y videojuegos.
    </div>
   
    
    
     
     <img src="/images/chian.webp" alt="Imagen 2" class="scroll-item">
     
    
     <img src="/images/munich.jpg" alt="Imagen 3" class="scroll-item">
       
  
   
            
    
  </section>
  `,

  mounted() {
    const items = document.querySelectorAll('.scroll-item')

    window.addEventListener('scroll', () => {
      const vh = window.innerHeight // Altura de la pantalla
      const centerScreen = vh / 2 // Centro de la pantalla

      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const itemCenter = rect.top + rect.height / 2
        const distance = itemCenter - centerScreen

        // Normalizar el progreso (0 al centro, 1 en los laterales)
        const progress = Math.min(1, Math.abs(distance / (vh / 2)))

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
    })
  },
}
