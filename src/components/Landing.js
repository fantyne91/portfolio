//creacion páginas
import '../styles/landing.css';
import '../styles/forms.css';


export default {
  name: 'Landing',

  template: ` 
 
  
        <section class= "intro-container">            
                    <img src="/images/portfolio-img.webp" alt="imagen presentación">
                   <!--<p class= "texto-entrada"> Soluciones creativas y tecnológicas para empresas y videojuegos</p>  -->               
                    <p class= "texto-entrada">Diseño y programación para empresas y videojuegos</p>
        </section>

        <section lang="es" class="list-container" itemscope itemtype="https://schema.org/ItemList" aria-labelledby="encabezado-servicios">
                
                    <p>Servicios</p>
                    <h1 id="encabezado-servicios" itemprop="name" tabindex="0">
                        Experiencias de usuario, desarrollo web y Unreal Engine
                    </h1>                   

                    <div class="group-list" role="list">
                        <!-- Diseño Web UX/UI -->

                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-ux">
                            
                                <h2 id="titulo-ux" itemprop="name" tabindex="0">Diseño Web UX/UI</h2> 
                                <h3 id="descripcion-ux" tabindex="0">Optimizar la experiencia de tus usuarios aumenta las conversiones y ventas:</h3>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h4 > Diseño aplicaciones web o CMS </h4>
                                        <p> como WordPress, Shopify, Ionos... con un enfoque en el éxito de tu empresa y <span> posicionamiento SEO</span>. Obtendrás un diseño interactivo para mostrar a desarrolladores o inversores.</p>
                                    </li>
                                    <li role="listitem">
                                        <h4> Auditorías y análisis heurístico  </h4>
                                        <p> para mejorar la experiencia del usuario de tu web y aumentar tus resultados.</p>
                                    </li>
                                </ul>
                           
                        </div>

                        <!-- Desarrollo Web -->
                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-web">
                            
                                <h2 id="titulo-web" itemprop="name" tabindex="0">Desarrollo Web</h2>
                                <h3 id="descripcion-web" tabindex="0">Creación de soluciones personalizadas con JavaScript, Vue, PHP y CSS:</h3>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h4> Trabajo en el  Front-end, </h4>
                                        <p> el diseño visual interactivo y atractivo que los usuarios ven e interactúan, como botones y menús.</p>
                                    </li>
                                    <li role="listitem">
                                        <h4>Back-end,</h4>
                                        <p> gestión y programación interna de la aplicación web, <span>bases de datos y servidores</span> para optimizar la funcionalidad de tiendas online.</p>
                                    </li>
                                </ul>                            
                        </div>

                        <!-- Diseño de Videojuegos -->
                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-videojuegos">
                          
                                <h2 id="titulo-videojuegos" itemprop="name" tabindex="0">Diseño de Videojuegos</h2>
                                <h3 id="descripcion-videojuegos" tabindex="0">Mejoro la experiencia de los jugadores evaluando la jugabilidad, navegación y diseño visual:</h3>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h4>Auditorías UX y pruebas de jugabilidad</h4>
                                        <p> para optimizar la interacción intuitiva, eliminando frustraciones del jugador.</p>
                                    </li>
                                    <li role="listitem">
                                        <h4> Diseño de interfaces y HUD</h4>
                                        <p> que prioricen la jugabilidad y inmersión del jugador. Colaboración en creación de Documentación como <span>Pitchs y GDD</span>.</p>
                                    </li>
                                </ul>                            
                        </div>

                        <!-- Unreal Engine -->
                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-unreal">
                            
                                <h2 id="titulo-unreal" itemprop="name" tabindex="0">Unreal Engine</h2>
                                <h3 id="descripcion-unreal" tabindex="0">Uso de Unreal Engine para crear experiencias visuales y narrativas inmersivas:</h3>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h4>
                                            Desarrollo de videojuegos, 
                                        </h4>
                                        <p> desde creación de escenarios, Metahumans, y programación de Blueprints, a diseño, creación y programación de HUDs o interfaces.</p>
                                    </li>
                                    <li role="listitem">
                                        <h4> Desarrollo de presentaciones visuales dinámicas </h4>
                                        <p> para clientes corporativos.</p>
                                    </li>
                                </ul>
                        </div>                        
                    </div>
                    <div class="contacta">
                            <p><span>Cada proyecto es único!</span> Cuéntame tus necesidades o agenda una llamada:</p>
                            <router-link to="/contacta" class="big-btn" aria-label="Solicitar servicios UX">
                                Contactar Ahora
                            </router-link>
                    </div>
                       
        </section>
   
<!--<div class="wave-container">
<svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path fill="#5b5141" d="M0,40 C180,60 360,70 540,50 C720,30 900,10 1080,20 C1260,30 1440,60 1440,60 L1440,100 L0,100 Z"></path>
</svg>-->

</div>

        <section class="exito-container">
             
                <!--<div class= "container-proyecto-unico">
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
            
     
                    <div class="exito-div">                        
                        <p class= "texto-exito"> El éxito de cualquier empresa nace de la satisfacción de sus usuarios </p>
                        <div class="p-column">
                            <p>Ya sea un servicio, un sitio web o videojuego, el éxito dependerá de una comprensión de las necesidades del usuario.</p> 
                            <p>   Tener una plataforma visualmente atractiva es solo parte del desafío, lo vital es asegurar que los usuarios puedan interactuar con facilidad, sin obstáculos que generen frustración o abandono.</p>
                            <p>   Identificar y corregir esos puntos de fricción es clave para aumentar la satisfacción del usuario y el éxito del negocio a largo plazo. </p>
                        </div>
                        <div >
                            <router-link to="/uxui"> Casos de estudio UX/UI </router-link>  
                            <router-link to="/games"> Casos de estudio Videojuegos </router-link>
                        </div>
                    </div>
                    
                    <img src="/images/psico-ux.png" loading="lazy" alt="imagen usabilidad,empativa y psicologia en ux/ui" width="300px"/>
           
           </section>
            <div class="wave-container">
              <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path fill="#ffffff" d="M0,40 C180,60 360,70 540,50 C720,30 900,10 1080,20 C1260,30 1440,60 1440,60 L1440,100 L0,100 Z"></path>
              </svg>
           </div>
           <section class="portfolio" itemscope itemtype="https://schema.org/ItemList"> 
                             
                <h2 class="texto-portfolio" itemprop="name">DISEÑOS UX/UI</h2>
                <div class="imgs" itemprop="itemListElement" itemscope itemtype="https://schema.org/ImageGallery">
                    
                    <!-- Video Cupcake -->
                    <video class="video" preload="none" loading="lazy" autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/cupcake.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI de Cupcake" />
                        <meta itemprop="description" content="Video de diseño UX/UI para una tienda de cupcakes." />
                    </video>

                    <!-- Imagen Tienda -->
                    <div class="img-portfolio">
                        <img src="/images/bag.webp" loading="lazy" alt="Diseño UX/UI" itemprop="image" />
                    </div>

                    <!-- Imagen Casas -->
                    <div >
                        <img class="casa" src="/images/casa.svg" loading="lazy" alt="Diseño UX/UI casas" itemprop="image" />
                    </div>

                     <!-- Imagen Juegos -->
                    <div class="img-portfolio">
                        <img src="/images/games.webp" loading="lazy" alt="Diseño UX/UI tienda gamer" itemprop="image" />
                    </div>

                    <!-- Imagen Plantas -->
                    <div class="img-portfolio">
                        <img src="/images/plant.webp" loading="lazy" alt="Diseño UX/UI tienda plantas" itemprop="image" />
                    </div>
                   
                    <!-- Video Photofolio 
                    <video class="video" preload="none" loading="lazy"autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/photofolio.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI Photofolio" />
                        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
                    </video>-->

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
                    <video class="video-omega" preload="none" loading="lazy" autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/2024122022181.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI Omega Jewelry" />
                        <meta itemprop="description" content="Video mostrando el diseño UX/UI de Omega Jewelry." />
                    </video>

                    <!-- Video DogFinder -->
                    <!--<video class="video" preload="none" loading="lazy" autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/dogfinder.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI DogFinder" />
                        <meta itemprop="description" content="Video de diseño UX/UI para una app de adopción de perros." />
                    </video>-->

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
  methods: {
    animateMessages() {
      // Seleccionamos los párrafos por su contenedor
      const messages = document.querySelectorAll('.container-list-footer p')

      messages.forEach((msg, index) => {
        setTimeout(() => {
          // Quitar la clase fade-in de todos los mensajes
          messages.forEach((m) => m.classList.remove('fade-in', 'fade-in-big'))
          // Esperar un poco para dar la sensación de "espacio limpio"
          setTimeout(() => {
            if (index === 2) {
              // Si es el tercer mensaje (índice 2)
              msg.classList.add('fade-in-big')
            } else {
              // Para los demás mensajes
              msg.classList.add('fade-in')
            }
          }, 500) // Tiempo para que desaparezca la palabra anterior
        }, index * 2400) // Cada mensaje aparece con un retraso
      })
    },
  },
  mounted() {
    setTimeout(() => {
      const container = document.querySelector('.container-list-footer')

      if (container) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateMessages() // Llama a la animación al entrar en pantalla
            }
          })
        })

        observer.observe(container)
      }
    }, 100) // Ajusta el retraso si es necesario
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


