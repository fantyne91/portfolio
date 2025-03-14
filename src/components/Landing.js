//creacion páginas

import '../styles/forms.css'
import { hideLoadingScreen } from '../utils/hideLoadingScreen.js'

export default {
  name: 'Landing',

  template: /*html*/ `
<div class="intro-container">
    <div v-if="!imageLoaded" id="loading-screen">
        <div class="gif-container flex">
            <img class="gif" src="/images/gif-carga.webp" alt="Animación en movimiento carga" width="140" height="140">
            <p>Cargando...</p>
        </div>
    </div>
    <div v-if="!imageLoaded" class="image-placeholder"> </div>
    <!--Img cargada-->
    <img v-show="imageLoaded" :src="cachedImage" class="portfolio-img" alt="imagen nubes presentación Maria" @load="onImageLoad" width="1920"
        height="700" >
    <img  class="portfolio-img2" src="/images/portfolio-img2.webp" alt="imagen nubes presentación Maria"  width="1920"
        height="700" >
    <!--<p class= "texto-entrada">Diseño y programación<br> para empresas y videojuegos</p>-->
</div>

<section lang="es" class="list-container" itemscope itemtype="https://schema.org/ItemList"
    aria-labelledby="encabezado-servicios">
    <h1 id="encabezado-servicios" itemprop="name">Diseño UX/UI, desarrollo web y Unreal Engine</h1>
    <ul class="group-list full-width" itemprop="mainEntity">
        <!-- Diseño Web UX/UI -->
        <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" aria-labelledby="titulo-ux">
            <h2 id="titulo-ux" itemprop="name">Diseño Web UX/UI</h2>
            <p class="p-align" id="descripcion-ux" itemprop="description">El diseño UX/UI optimiza la experiencia del usuario aumentando conversiones y ventas:</p>
            <ul class="features-list flex p-column-xs" aria-label="Características de diseño web">
                <li itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                    <h3 itemprop="name">Diseño aplicaciones web o CMS</h3>
                    <p itemprop="description">como WordPress, Shopify, Ionos... con un enfoque en el éxito de tu empresa y <span itemprop="keywords">posicionamiento SEO.</span> Obtendrás un diseño interactivo para mostrar a desarrolladores o inversores.</p>
                </li>
                <li>
                    <h3 itemprop="name">Auditorías y análisis heurístico</h3>
                    <p itemprop="description">para mejorar la experiencia del usuario de tu web y aumentar tus resultados.</p>
                </li>
            </ul>
        </li>

        <!-- Desarrollo Web -->
        <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" aria-labelledby="titulo-web">
            <h2 id="titulo-web" itemprop="name">Desarrollo Web</h2>
            <p id="descripcion-web" itemprop="description">Creación de soluciones personalizadas con JavaScript, Vue, PHP y CSS:</p>
            <ul class="features-list flex p-column-xs" aria-label="Detalles de desarrollo">
                <li>
                    <h3 itemprop="name">Trabajo en el Front-end</h3>
                    <p itemprop="description">el diseño visual interactivo y atractivo que los usuarios ven e interactúan, como botones y menús.</p>
                </li>
                <li itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                    <h3 itemprop="name">Back-end</h3>
                    <p itemprop="description">gestión y programación interna de la aplicación web, <span itemprop="keywords">bases de datos y servidores</span> para optimizar la funcionalidad de tiendas online.</p>
                </li>
            </ul>
        </li>

        <!-- Diseño de Videojuegos -->
        <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" aria-labelledby="titulo-videojuegos">
            <h2 id="titulo-videojuegos" itemprop="name">Diseño de Videojuegos</h2>
            <p id="descripcion-videojuegos" itemprop="description">Mejoro la experiencia de los jugadores evaluando la jugabilidad, navegación y diseño visual:</p>
            <ul class="features-list flex p-column-xs" aria-label="Elementos de videojuegos">
                <li>
                    <h3 itemprop="name">Auditorías UX y pruebas de jugabilidad</h3>
                    <p itemprop="description">para optimizar la interacción intuitiva, eliminando frustraciones del jugador.</p>
                </li>
                <li itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                    <h3 itemprop="name">Diseño de interfaces y HUD</h3>
                    <p itemprop="description">que prioricen la jugabilidad y inmersión del jugador. Colaboración en la creación de documentación como <span itemprop="keywords">Pitchs y GDD.</span></p>
                </li>
            </ul>
        </li>

        <!-- Unreal Engine -->
        <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" aria-labelledby="titulo-unreal">
            <h2 id="titulo-unreal" itemprop="name">Unreal Engine</h2>
            <p id="descripcion-unreal" itemprop="description">Uso de Unreal Engine para crear experiencias visuales y narrativas inmersivas:</p>
            <ul class="features-list flex p-column-xs" aria-label="Características Unreal Engine">
                <li itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                    <h3 itemprop="name">Desarrollo de videojuegos</h3>
                    <p itemprop="description">desde creación de escenarios, Metahumans, y programación de Blueprints, a diseño, creación y programación de HUDs o interfaces.</p>
                </li>
                <li>
                    <h3>Desarrollo de presentaciones visuales dinámicas o cinemáticas</h3>
                    <p itemprop="description">para clientes corporativos.</p>
                </li>
            </ul>
        </li>
    </ul>

    <div class="contacta container-column-sm flex" role="region" aria-label="Sección de contacto" itemscope itemtype="https://schema.org/ContactPoint">
        <p role="alert">¡Cada proyecto es único!</p>
        <router-link 
            to="/contacta" 
            class="big-btn" 
            aria-label="Contactar para servicios de desarrollo web y diseño" 
            itemprop="url"
        >
            Contactar Ahora
        </router-link>
        <span hidden itemprop="email">contacto@tudominio.com</span>
        <meta itemprop="contactType" content="technical support">
    </div>
</section>


        <section class= "exito-container">
             
                <!-- <div class= "container-proyecto-unico">
                    <div class="container-list-footer">
                                    <p > CADA </p>
                                    <p >PROYECTO  </p>
                                    <p > ES ÚNICO!</p>
                    </div>
                    <div class="btn-footer">
                                    <div>
                                        
                                        <h3> Ajustándome a tu presupuesto trabajaremos juntos para hacer realidad tu visión.</h3>
                                    </div>
                                    <div>
                                           <router-link to="/contacta" class="btn0" rel="noopener noreferrer">CONTACTAR</router-link>
                                    </div>
                    </div>
                </div>-->
            
                <div class="flex-row">
                    <div class=" p-column-sm flex">
                        <p class="texto-exito"> El éxito de cualquier empresa nace de la satisfacción de sus usuarios </p>
                        <div>
                            <p> Ya sea un servicio, un sitio web o videojuego, el éxito dependerá de una comprensión de las necesidades
                                del usuario.</p>
                            <p> Tener una plataforma visualmente atractiva es solo parte del desafío, lo vital es asegurar que los
                                usuarios puedan interactuar con facilidad, sin obstáculos que generen frustración o abandono.</p>
                            <p> Identificar y corregir esos puntos de fricción es clave para aumentar la satisfacción del usuario y el
                                éxito del negocio a largo plazo. </p>
                        </div>
                        <div>
                            <router-link to="/uxui"> Casos de estudio UX/UI </router-link>
                            <router-link to="/games"> Casos de estudio Videojuegos </router-link>
                        </div>
                    </div>
                    <img class="img-pc" src="/images/psico-ux.png" loading="lazy" alt="imagen usabilidad,empativa y psicologia en ux/ui"
                        width="300px" />
                </div>
           </section>

           <div class="wave-container">
              <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path fill="#ffffff" d="M0,40 C180,60 360,70 540,50 C720,30 900,10 1080,20 C1260,30 1440,60 1440,60 L1440,100 L0,100 Z"></path>
              </svg>
           </div>

           <section  itemscope itemtype="https://schema.org/ItemList"> 
                             
                <h2 class="texto-portfolio" itemprop="name">PORTFOLIO</h2>
                <div class="imgs" itemprop="itemListElement" itemscope itemtype="https://schema.org/ImageGallery">
                    
                    <!-- Video Cupcake -->
                   <video class="video" preload="none" loading="lazy"autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/cupcakes.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI tienda joyeria" />
                        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
                    </video>
                   
                    <!-- Imagen Tienda -->
                    <div class="img-portfolio">
                        <img src="/images/bag.webp" loading="lazy" alt="Diseño UX/UI" itemprop="image" />
                    </div>

                    <!-- Imagen Casas -->
                    <div >
                        <img class="casa" src="/images/casa.webp" loading="lazy" alt="Diseño UX/UI casas" itemprop="image" />
                    </div>

                     <!-- Imagen Juegos -->
                    <div class="img-portfolio">
                        <img src="/images/games.webp" loading="lazy" alt="Diseño UX/UI tienda gamer" itemprop="image" />
                    </div>

                    <!-- Imagen Plantas -->
                    <div class="img-portfolio">
                        <img src="/images/plant.webp" loading="lazy" alt="Diseño UX/UI tienda plantas" itemprop="image" />
                    </div>
                   
                    <!-- Video Photofolio -->                    
                    <div class="img-portfolio">
                        <img src="/images/photofolio.webp" loading="lazy" alt="Diseño UX/UI app bancaria" itemprop="image" />
                    </div>
                    <!-- Imagen Bancaria -->
                    <div class="img-portfolio">
                        <img src="/images/bank.webp" loading="lazy" alt="Diseño UX/UI app bancaria" itemprop="image" />
                    </div>

                    <!-- Imagen Zen -->
                    <div class="img-portfolio">
                        <img src="/images/zen.webp" loading="lazy" alt="Diseño UX/UI app Zen" itemprop="image" />
                    </div>

                    <!-- Imagen Lolli -->
                    <div class="img-portfolio">
                        <img src="/images/lolli.webp" loading="lazy" alt="Diseño UX/UI landing Lolli" itemprop="image" />
                    </div>

                    <!-- Imagen Mind -->
                    <div class="img-portfolio">
                        <img src="/images/mind.webp" loading="lazy" alt="Diseño UX/UI app Mind" itemprop="image" />
                    </div>

                    <!-- Video Omega -->
                    <video class="video" preload="none" loading="lazy"autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/intro-omega.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI tienda joyeria" />
                        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
                    </video>
                 
                    <!-- Imagen Hotel -->
                    <div class="img-portfolio">
                        <img src="/images/hotel.webp" loading="lazy" alt="Diseño UX/UI hotel" itemprop="image" />
                    </div>

                    
                    
                </div>
           

            <!--
            <div class="contact-form-2" >
                <h2> Obtén tu diseño personalizado desde 300€! </h2>
                <h4>Solicitar información:</h4>
                        <form class="container-input" action="https://formsubmit.co/mjortiz93@gmail.com" method="POST" >
                                                
                            <div class="form-input" >
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder=" " 
                                        required 
                                        aria-labelledby="email-label"
                                        autocomplete="on">
                                    <label class="accesible" for="email" id="email-label">Correo electrónico</label>                                   
                            </div>
                            <button  type="submit">Enviar</button>
                                               
                        </form>  
                                                                              
                </div>-->
                                       
            
        </section>
    `,
  data() {
    return {
      // Define la propiedad imageLoaded para controlar el estado de la imagen
      imageLoaded: false,
      // Define la URL de la imagen; incluye ?v=1 para cache busting (cámbialo cuando actualices la imagen)
      cachedImage: '/images/portfolio-img.webp?v=1',
    }
  },
  methods: {
    // animateMessages() {
    //   const messages = document.querySelectorAll('.container-list-footer p')

    //   messages.forEach((msg, index) => {
    //     setTimeout(() => {

    //       messages.forEach((m) => m.classList.remove('fade-in', 'fade-in-big'))
    //       setTimeout(() => {
    //         if (index === 2) {

    //           msg.classList.add('fade-in-big')
    //         } else {

    //           msg.classList.add('fade-in')
    //         }
    //       }, 500)
    //     }, index * 2400)
    //   })
    // },
    onImageLoad() {
      console.log('Imagen cargada')
      this.imageLoaded = true
      hideLoadingScreen()
      //    } 1000)
    },
  },
  mounted() {
    // setTimeout(() => {
    //   const container = document.querySelector('.container-list-footer')

    //   if (container) {
    //     const observer = new IntersectionObserver((entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           this.animateMessages()
    //         }
    //       })
    //     })

    //     observer.observe(container)
    //   }
    // }, 100)

    const img = new Image()
    img.src = this.cachedImage
    img.onload = () => {
      this.imageLoaded = true
    }
      /*setTime intro animation*/
      document.addEventListener('DOMContentLoaded', () => {
          const imgElement = document.querySelector('.portfolio-img2')
          const imgElement1 = document.querySelector('.portfolio-img')
          const introContainer = document.querySelector('.intro-container')

          window.addEventListener('scroll', () => {
            const containerRect = imgElement.getBoundingClientRect() // Obtiene la posición del contenedor en relación con la ventana
            const windowHeight = window.innerHeight
            const distance = Math.max(0, windowHeight - containerRect.top)
            const progress = Math.min(
              1,
              Math.abs(distance / (windowHeight / 8))
            ) // Se asegura de no pasar de 1
            const opacity = 1.15 - progress // Calcula la opacidad en base al progreso del scroll
              
            imgElement1.classList.add('inactive')
              imgElement1.style.opacity = opacity.toFixed()
              introContainer.style.setProperty('--after-opacity', 0.3)
            setTimeout(() => {
              imgElement.classList.add('active'), 2000
              
            })
          })
          
        // const observer = new IntersectionObserver(
        //   (entries) => {
        //     entries.forEach((entry) => {
        //       if (entry.isIntersecting) {
        //           setTimeout(() => {
                      
        //                const progress = Math.min(
        //                  1,
        //                  Math.abs(distance / (vh / 3))
        //                )
        //               const opacity = 1.15 - progress
        //             imgElement.classList.add('active')
        //             imgElement1.classList.add('inactive')
        //         }, 2000) 
        //         observer.unobserve(imgElement) 
        //       }
        //     })
        //   },         
        // )

        // observer.observe(imgElement)
      })

    // window.addEventListener('load', () => {
    //   setTimeout(() => {
    //     document.querySelector('.portfolio-img2').classList.add('active')
    //   }, 3000) 
    // })

    /*lazy video*/
    document.addEventListener('DOMContentLoaded', () => {
      const videos = document.querySelectorAll('.lazy-video')

      const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target
            video.load() // Carga el video
            video.play() // Reproduce automáticamente
            observer.unobserve(video) // Deja de observar el video una vez cargado
          }
        })
      })
      videos.forEach((video) => {
        videoObserver.observe(video)
      })
    })
  },
}
