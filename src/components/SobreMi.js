import '../styles/sobremi.css'

export default {
  name: 'SobreMi',
  template: /*html*/ `
  <section class="about-me">
       <img src="/images/arcoiris.webp" alt="Imagen 2" class="scroll-item">
       
      <img src="/images/medano.webp" alt="Imagen 1" class="scroll-item">
    <div class="text scroll-item">Texto sobre mí, parte 1...</div>
    <img src="/images/munich.jpg" alt="Imagen 3" class="scroll-item">  
    
      
    
    
    
     
       
      <div class="text scroll-item">Texto sobre mí, parte 1...</div>
   
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

        // Progreso de la animación basado en la distancia al centro (valor de -1 a 1)
        const progress = 1 - Math.abs(distance / (vh / 2))

        // Asegurar que progress está entre 0 y 1
        const clampedProgress = Math.max(0, Math.min(1, progress))

        // Escala basada en el progreso
        // const scale = 0.3 + clampedProgress * 1 // Escala entre 0.5 y 1.5
        const scale = 0.2 + Math.max(progress, 0) * 1; // Crece más en lugar de reducirse

        // Movimiento lateral basado en el progreso: se mueve más cuando está casi fuera
        const translateX = (1 - clampedProgress) * 300 * (distance > 0 ? 1 : -1)

        // Opacidad también basada en el progreso (1 en el centro, 0 al salir)
        const opacity = clampedProgress

        // Aplicar transformaciones
        item.style.transform = `scale(${scale}) translateX(${translateX}px)`
        item.style.opacity = opacity
      })
    })
  },
}
