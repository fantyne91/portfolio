//creacion páginas
import '../styles/landing.css';
import '../styles/forms.css';


export default {
  name: 'Landing',

  template: ` 
 
  
        <section>
            <div class= "intro-container">
                    <img class= "maria" src="../img/portfolio-img.webp" alt="imagen presentación">
                    <p class= "texto-entrada"> SOLUCIONES CREATIVAS Y TECNOLÓGICAS PARA EMPRESAS Y VIDEOJUEGOS</p>
            </div>
        </section>

        <section lang="es">
                <div class="list-container" itemscope itemtype="https://schema.org/ItemList" aria-labelledby="encabezado-servicios">
                 <p><strong>Servicios</strong></p>
                    <h1 id="encabezado-servicios" itemprop="name" tabindex="0">
                        Experiencias de usuario, desarrollo web y Unreal Engine
                    </h1>
                   

                    <div class="group-list" role="list">
                        <!-- Diseño Web UX/UI -->
                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-ux">
                            <div class="list-ux-title">
                                <h2 id="titulo-ux" itemprop="name" tabindex="0">Diseño Web UX/UI</h2>
                                <h3 itemprop="serviceType" tabindex="0">Auditorías y Diseños</h3>
                            </div>
                            <div class="list-text" aria-describedby="descripcion-ux">
                                <h4 id="descripcion-ux" tabindex="0">Optimizar la experiencia de tus usuarios aumenta las conversiones y ventas. Puedo ayudarte con:</h4>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h5 itemprop="description">
                                            <span>Diseño de página web o CMS </span>(WordPress, Shopify, Ionos) con un enfoque en el éxito de tu empresa y <span> posicionamiento SEO</span>. Obtendrás un diseño interactivo para mostrar a desarrolladores o inversores.
                                        </h5>
                                    </li>
                                    <li role="listitem">
                                        <h5>
                                            <span itemprop="description">Auditorías y análisis heurístico</span> para mejorar la experiencia del usuario y aumentar tus resultados.
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Desarrollo Web -->
                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-web">
                            <div class="list-programming-title">
                                <h2 id="titulo-web" itemprop="name" tabindex="0">Desarrollo Web</h2>
                                <h3 itemprop="serviceType" tabindex="0">Interfaz y bases de datos</h3>
                            </div>
                            <div class="list-text" aria-describedby="descripcion-web">
                                <h4 id="descripcion-web" tabindex="0">Creación de soluciones personalizadas con JavaScript, Vue, PHP y CSS:</h4>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h5>
                                            <span itemprop="description">Front-end:</span> Diseño visual interactivo y atractivo que los usuarios ven e interactúan, como botones y menús.
                                        </h5>
                                    </li>
                                    <li role="listitem">
                                        <h5>
                                            <span itemprop="description">Back-end:</span> Gestión de bases de datos y servidores para optimizar la funcionalidad de tiendas online.
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Diseño de Videojuegos -->
                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-videojuegos">
                            <div class="list-games-title">
                                <h2 id="titulo-videojuegos" itemprop="name" tabindex="0">Diseño de Videojuegos</h2>
                                <h3 itemprop="serviceType" tabindex="0">Auditorías, GDD, pitch’s</h3>
                            </div>
                            <div class="list-text" aria-describedby="descripcion-videojuegos">
                                <h4 id="descripcion-videojuegos" tabindex="0">Mejoro la experiencia de los jugadores evaluando la jugabilidad, navegación y diseño visual:</h4>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h5>
                                            <span>Auditorías UX y pruebas de jugabilidad</span> para optimizar la interacción intuitiva, eliminando frustraciones del jugador.
                                        </h5>
                                    </li>
                                    <li role="listitem">
                                        <h5>
                                            <span>Diseño de interfaces y HUD</span> que prioricen la inmersión del jugador, colaboración en creación de Documentación como Pitchs y GDD.
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Unreal Engine -->
                        <div class="list" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" role="listitem" aria-labelledby="titulo-unreal">
                            <div class="list-unreal-title">
                                <h2 id="titulo-unreal" itemprop="name" tabindex="0">Unreal Engine</h2>
                                <h3 itemprop="serviceType" tabindex="0">Cinemáticas y videojuegos</h3>
                            </div>
                            <div class="list-text" aria-describedby="descripcion-unreal">
                                <h4 id="descripcion-unreal" tabindex="0">Uso de Unreal Engine para crear experiencias visuales y narrativas inmersivas:</h4>
                                <ul type="circle" role="list">
                                    <li role="listitem">
                                        <h5>
                                            Creación de escenarios, Metahumans, Blueprints y programación, diseño, creación y progrmación de HUDs o interfaces.
                                        </h5>
                                    </li>
                                    <li role="listitem">
                                        <h5>
                                            Desarrollo de presentaciones visuales dinámicas para clientes corporativos.
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>



            <section>
                <div class= "container-proyecto-unico">
                    <div class="container-list-footer">                               
                                    <p > CADA </p>
                                    <p >PROYECTO  </p>
                                    <p > ES ÚNICO!</p>                          
                    </div>
                    <div class="btn-footer">
                                    <div>
                                        <h3>Cuéntame tus necesidades o agenda una llamada!</h3>
                                        <h3> Ajustándome a tu presupuesto trabajaremos juntos para hacer realidad tu visión.</h3>
                                    </div>
                                    <div>
                                            <router-link to="/contacta" class="btn0" rel="noopener noreferrer">CONTACTAR</router-link>
                                    </div>
                    </div>
                    
                                
                </div>
            
            <!--
            <div class="exito-container">
                <div class="container-row">
                
                    <div class="exito-div">                        
                        <p class= "texto-exito"> El éxito de cualquier empresa nace de la satisfacción de sus usuarios </p>
                        <div class="p-column">
                            <p>Ya sea un servicio, un sitio web o videojuego, el éxito dependerá de una comprensión de las necesidades del usuario.</p> 
                            <p>   Tener una plataforma visualmente atractiva es solo parte del desafío, lo vital es asegurar que los usuarios puedan interactuar con facilidad, sin obstáculos que generen frustración o abandono.</p>
                            <p>   Identificar y corregir esos puntos de fricción es clave para aumentar la satisfacción del usuario y el éxito del negocio a largo plazo. </p>
                        </div>
                        <div >
                            <h6> <router-link to="/uxui"> Casos de estudio UX/UI </router-link>  </h6>
                            <h6><router-link to="/games"> Casos de estudio Videojuegos </router-link></h6>
                        </div>
                    </div>
                    
                        <img src="../img/psico-ux.png" loading="lazy" alt="imagen usabilidad,empativa y psicologia en ux/ui" width="300px"/>
                    
                </div>
            </div>
            -->
            
           </section>
           <section> 
                             
            <div class="portfolio" itemscope itemtype="https://schema.org/ItemList">
                <h2 class="texto-portfolio" itemprop="name">DISEÑOS UX/UI</h2>
                <div class="imgs" itemprop="itemListElement" itemscope itemtype="https://schema.org/ImageGallery">
                    
                    <!-- Video Cupcake -->
                    <video class="video" preload="none" loading="lazy" autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="../img/cupcake.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI de Cupcake" />
                        <meta itemprop="description" content="Video de diseño UX/UI para una tienda de cupcakes." />
                    </video>
                    
                    <!-- Imagen Casas -->
                    <div class="img-portfolio">
                        <img src="../img/casa.svg" loading="lazy" alt="Diseño UX/UI casas" itemprop="image" />
                    </div>

                    <!-- Imagen Plantas -->
                    <div class="img-portfolio">
                        <img src="../img/plant.svg" loading="lazy" alt="Diseño UX/UI tienda plantas" itemprop="image" />
                    </div>

                    <!-- Imagen Juegos -->
                    <div class="img-portfolio">
                        <img src="../img/games.svg" loading="lazy" alt="Diseño UX/UI tienda gamer" itemprop="image" />
                    </div>

                    <!-- Video Photofolio 
                    <video class="video" preload="none" loading="lazy"autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="../img/photofolio.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI Photofolio" />
                        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
                    </video>-->

                    <!-- Imagen Zen -->
                    <div class="img-portfolio">
                        <img src="../img/zen.png" loading="lazy" alt="Diseño UX/UI app Zen" itemprop="image" />
                    </div>

                    <!-- Imagen Lolli -->
                    <div class="img-portfolio">
                        <img src="../img/lolli.svg" loading="lazy" alt="Diseño UX/UI landing Lolli" itemprop="image" />
                    </div>

                    <!-- Imagen Mind -->
                    <div class="img-portfolio">
                        <img src="../img/mind.svg" loading="lazy" alt="Diseño UX/UI app Mind" itemprop="image" />
                    </div>

                    <!-- Video Omega -->
                    <video class="video-omega" preload="none" loading="lazy" autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="../img/2024122022181.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI Omega Jewelry" />
                        <meta itemprop="description" content="Video mostrando el diseño UX/UI de Omega Jewelry." />
                    </video>

                    <!-- Video DogFinder -->
                    <video class="video" preload="none" loading="lazy" autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="../img/dogfinder.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI DogFinder" />
                        <meta itemprop="description" content="Video de diseño UX/UI para una app de adopción de perros." />
                    </video>

                    <!-- Imagen Hotel -->
                    <div class="img-portfolio">
                        <img src="../img/hotel.svg" loading="lazy" alt="Diseño UX/UI hotel" itemprop="image" />
                    </div>

                    <!-- Imagen Bancaria -->
                    <div class="img-portfolio">
                        <img src="../img/bank.svg" loading="lazy" alt="Diseño UX/UI app bancaria" itemprop="image" />
                    </div>

                    <!-- Imagen Tienda -->
                    <div class="img-portfolio">
                        <img src="../img/bag.png" loading="lazy" alt="Diseño UX/UI" itemprop="image" />
                    </div>
                </div>
            </div>

            
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
                                                                              
                </div>
                                       
            
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


