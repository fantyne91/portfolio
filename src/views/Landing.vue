//creacion páginas


<script setup>
import '../styles/forms.css'
import { onMounted, onUnmounted } from 'vue'

import { useMetaData } from '@/composables/useMetaData'

useMetaData({
    title: 'Diseño UX/UI, Desarrollo Web, y Videojuegos con Unreal Engine',
    description: 'Diseño UX/UI, desarrollo web y videojuegos con Unreal Engine.',
    path: '/',
    
    jsonLd: {
           
            "mainEntity": {
                "@type": "ItemList",
                "name": "Servicios ofrecidos",
                "itemListElement": [
                    {
                        "@type": "Service",
                        "name": "Diseño Web UX/UI",
                        "description": "Optimización de la experiencia del usuario, aumentando conversiones y ventas a través de un diseño atractivo y funcional.",
                        "serviceType": "Diseño de aplicaciones Web o CMS, auditorías UX."
                },
                    {
                        "@type": "Service",
                        "name": "Desarrollo Web",
                        "description": "Soluciones personalizadas con tecnologías como JavaScript, Vue, PHP y CSS para crear aplicaciones web interactivas.",
                        "serviceType": "Desarrollo Front-end y Back-end, gestión de bases de datos."
                },
                    {
                        "@type": "Service",
                        "name": "Diseño de Videojuegos",
                        "description": "Mejora de la experiencia del jugador mediante auditorías UX y diseño de interfaces, creando documentación como Pitchs y GDD.",
                        "serviceType": "Auditorías UX, diseño de HUD y pruebas de jugabilidad."
                },
                    {
                        "@type": "Service",
                        "name": "Unreal Engine",
                        "description": "Creación de experiencias inmersivas con Unreal Engine, desarrollo de videojuegos y presentaciones visuales dinámicas.",
                        "serviceType": "Desarrollo de escenarios, Metahumans, Blueprints, cinemáticas."
                }
                ]
            },
            
        }
  

})


// Funciones para efecto hover de imágenes
const moverImagen = (event) => {
  const imgHover = document.querySelector('.img-hover')
  if (imgHover) {
    imgHover.style.left = `${event.pageX + 10}px`
    imgHover.style.top = `${event.pageY + 10}px`
  }
}

const mostrarImagen = (event) => {
  const imgHover = document.querySelector('.img-hover')
  if (imgHover) {
    const nuevaImagen = event.target.getAttribute('data-img')
    imgHover.src = nuevaImagen
    imgHover.style.display = 'block'
    setTimeout(() => {
      imgHover.style.opacity = '1'
    }, 10)
  }
}

const ocultarImagen = () => {
  const imgHover = document.querySelector('.img-hover')
  if (imgHover) {
    imgHover.style.opacity = '0'
    setTimeout(() => {
      imgHover.style.display = 'none'
    }, 300)
  }
}

// Lógica de opacidad con scroll
const handleScroll = () => {
  const fadeStart = 80
  const fadeEnd = 500
  const fadeRange = fadeEnd - fadeStart
  const portfolioImg = document.querySelector('.portfolio-img')
  const h1 = document.querySelector('h1')
    const secondSection = document.querySelector('.list-container')
  
  if (!portfolioImg || !h1) return

  const scrollY = window.scrollY

  if (scrollY < fadeStart) {
    portfolioImg.style.opacity = '1'
  } else if (scrollY > fadeStart && scrollY < fadeEnd) {
    let opacity = 1 - (scrollY - fadeStart) / fadeRange
    portfolioImg.style.opacity = opacity.toFixed(2)
    let opacityReverse = (scrollY - fadeStart) / fadeRange
    h1.style.opacity = opacityReverse.toFixed(2)
  } else if (
      scrollY >= fadeEnd &&
      scrollY < fadeEnd + secondSection.offsetHeight - 350
  ) {
      portfolioImg.style.opacity = '0.09'
  } else {
    portfolioImg.style.opacity = '0'
  }
}

// Eventos al montar el componente
onMounted(() => {
    window.prerenderReady = false
    
    window.addEventListener('scroll', handleScroll)
})

// Limpiar eventos al desmontar
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="intro-container">
        <!--<div v-if="!imageLoaded" id="loading-screen">
            <div class="gif-container flex">
                <img class="gif" src="/images/gif-carga.webp" alt="Animación en movimiento carga" width="140" height="140">
                <p>Cargando...</p>
            </div>
        </div>
        <div v-if="!imageLoaded" class="image-placeholder"> </div>
        
        <img v-show="imageLoaded" :src="cachedImage" class="portfolio-img" alt="imagen principal nubes Canarias Maria"
            @load="onImageLoad" width="1920" height="700">-->
        <img src="https://www.mariadevdesign.com/images/portfolio-img.webp" class="portfolio-img"
            alt="imagen principal nubes Canarias Maria" width="1920" height="700">
    </div>

    <section lang="es" class="list-container" aria-labelledby="encabezado-servicios">
        <h1 id="encabezado-servicios">Diseño UX/UI, desarrollo web y videojuegos con Unreal Engine</h1>
        <img ref="imgHover" loading="lazy" id="imgHover" src="" alt="Imagen flotante hover">

        <ul class="group-list">
            <!-- Diseño Web UX/UI -->
            <li class="list flex" aria-labelledby="titulo-ux">
                <h2 id="titulo-ux">Diseño Web UX/UI</h2>
                <p class="p-align" id="descripcion-ux">
                    El diseño UX/UI optimiza la experiencia del usuario aumentando conversiones y ventas.
                </p>
                <ul class="features-list flex p-column-xs" aria-label="Características de diseño web">
                    <li data-img="images/img-hover-ux.webp" @mousemove="moverImagen" @mouseenter="mostrarImagen"
                        @mouseleave="ocultarImagen">
                        <h3>Diseño aplicaciones Web o CMS</h3>
                        <p>
                            como WordPress, Shopify, Ionos... con un enfoque en el éxito de tu empresa
                            y <span>posicionamiento SEO</span>. Obtendrás un diseño interactivo
                            para mostrar a desarrolladores o inversores, así como soluciones adaptadas para
                            la venta de <span>productos digitales</span> y servicios en línea.
                        </p>
                    </li>
                    <li>
                        <h3>Auditorías y análisis heurístico</h3>
                        <p>para mejorar la experiencia del usuario de tu web y aumentar tus resultados.</p>
                    </li>
                </ul>
            </li>

            <!-- Desarrollo Web -->
            <li class="list flex" aria-labelledby="titulo-web">
                <h2 id="titulo-web">Desarrollo Web</h2>
                <p id="descripcion-web">Creación de soluciones personalizadas con JavaScript, Vue, PHP y CSS:</p>
                <ul class="features-list flex p-column-xs" aria-label="Detalles de desarrollo">
                    <li>
                        <h3>Trabajo en el Front-end</h3>
                        <p>el diseño visual interactivo y atractivo que los usuarios ven e interactúan, como botones y
                            menús.</p>
                    </li>
                    <li data-img="images/cod2.webp" @mousemove="moverImagen" @mouseenter="mostrarImagen"
                        @mouseleave="ocultarImagen">
                        <h3>Back-end</h3>
                        <p>gestión y programación interna de la aplicación web, <span>bases de datos y servidores</span>
                            para optimizar la funcionalidad de tiendas online.</p>
                    </li>
                </ul>
            </li>

            <!-- Diseño de Videojuegos -->
            <li class="list flex" aria-labelledby="titulo-videojuegos">
                <h2 id="titulo-videojuegos">Diseño de Videojuegos</h2>
                <p id="descripcion-videojuegos">Mejoro la experiencia de los jugadores evaluando la jugabilidad,
                    navegación y diseño visual:</p>
                <ul class="features-list flex p-column-xs" aria-label="Elementos de videojuegos">
                    <li>
                        <h3>Auditorías UX y pruebas de jugabilidad</h3>
                        <p>para optimizar la interacción intuitiva, eliminando frustraciones del jugador.</p>
                    </li>
                    <li>
                        <h3>Diseño de interfaces y HUD</h3>
                        <p>que prioricen la jugabilidad y inmersión del jugador. Colaboración en la creación de
                            documentación como <span>Pitchs y GDD.</span></p>
                    </li>
                </ul>
            </li>

            <!-- Unreal Engine -->
            <li class="list flex" aria-labelledby="titulo-unreal">
                <h2 id="titulo-unreal">Unreal Engine</h2>
                <p id="descripcion-unreal">Uso de Unreal Engine para crear experiencias visuales y narrativas
                    inmersivas:</p>
                <ul class="features-list flex p-column-xs" aria-label="Características Unreal Engine">
                    <li>
                        <h3>Desarrollo de videojuegos</h3>
                        <p>desde creación de escenarios, Metahumans, y programación de Blueprints, a diseño, creación y
                            programación de HUDs o interfaces.</p>
                    </li>
                    <li>
                        <h3>Desarrollo de presentaciones visuales dinámicas o cinemáticas</h3>
                        <p>para clientes corporativos.</p>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="contacta container-column-sm flex align-center" role="region" aria-label="Sección de contacto">
            <p role="alert">¡Cada proyecto es único!</p>
            <button class="big-btn contact-btn" role="link"
                aria-label="Contactar para servicios de desarrollo web y diseño">
                Contactar Ahora
            </button>
        </div>
    </section>



    <section class="exito-container">

        <div class="flex-row">
            <div class=" p-column-sm flex">
                <p class="texto-exito"> El éxito de cualquier empresa nace de la satisfacción de sus usuarios </p>
                <div>
                    <p> Ya sea un servicio, un sitio web o videojuego, el éxito dependerá de una comprensión de las
                        necesidades
                        del usuario.</p>
                    <p> Tener una plataforma visualmente atractiva es solo parte del desafío, lo vital es asegurar que
                        los
                        usuarios puedan interactuar con facilidad, sin obstáculos que generen frustración o abandono.
                    </p>
                    <p> Identificar y corregir esos puntos de fricción es clave para aumentar la satisfacción del
                        usuario
                        y el
                        éxito del negocio a largo plazo. </p>
                </div>
                <div>
                    <a href="https://www.mariadevdesign.com/uxui#casos-uxui">Casos de estudio UX/UI </a>
                    <a href="https://www.mariadevdesign.com/uxui#casos-games">Casos de estudio Videojuegos </a>
                </div>
            </div>
            <img class="img-pc" src="/images/psico-ux.webp" loading="lazy"
                alt="imagen usabilidad,empativa y psicologia en ux/ui" width="300px" height="250" />
        </div>
    </section>

    <div class="wave-container">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#ffffff"
                d="M0,40 C180,60 360,70 540,50 C720,30 900,10 1080,20 C1260,30 1440,60 1440,60 L1440,100 L0,100 Z">
            </path>
        </svg>
    </div>

    <section class="portfolio" itemscope itemtype="https://schema.org/ItemList">

        <h2 itemprop="name">PORTFOLIO</h2>
        <div class="imgs padding-Y-xs" itemprop="itemListElement" itemscope itemtype="https://schema.org/ImageGallery">

            <!-- Video Cupcake -->
            <video class="video" preload="none" loading="lazy" autoplay loop muted playsinline>
                <source src="/images/cupcakes.mp4" type="video/mp4">
            </video>

            <!-- Imagen Tienda -->
            <div class="img-portfolio">
                <img src="/images/bag.webp" loading="lazy" alt="Diseño web UX/UI tienda online" itemprop="image" />
            </div>

            <!-- Imagen Casas -->
            <div>
                <img class="casa" src="/images/casa.webp" loading="lazy" alt="Diseño web UX/UI casas prefabricadas"
                    itemprop="image" />
            </div>

            <!-- Imagen Juegos -->
            <div class="img-portfolio">
                <img src="/images/games.webp" loading="lazy" alt="Diseño web UX/UI tienda gamer" itemprop="image" />
            </div>

            <!-- Imagen Plantas -->
            <div class="img-portfolio">
                <img src="/images/plant.webp" loading="lazy" alt="Diseño web UX/UI tienda plantas" itemprop="image" />
            </div>

            <!-- Video Photofolio -->
            <div class="img-portfolio">
                <img src="/images/photofolio.webp" loading="lazy" alt="Diseño web UX/UI photofolio" itemprop="image" />
            </div>
            <!-- Imagen Bancaria -->
            <div class="img-portfolio">
                <img src="/images/bank.webp" loading="lazy" alt="Diseño web UX/UI app bancaria" itemprop="image" />
            </div>

            <!-- Imagen Zen -->
            <div class="img-portfolio">
                <img src="/images/zen.webp" loading="lazy" alt="Diseño web UX/UI app Zen" itemprop="image" />
            </div>

            <!-- Imagen Lolli -->
            <div class="img-portfolio">
                <img src="/images/lolli.webp" loading="lazy" alt="Diseño web UX/UI landing Lolli" itemprop="image" />
            </div>

            <!-- Imagen Mind -->
            <div class="img-portfolio">
                <img src="/images/mind.webp" loading="lazy" alt="Diseño web UX/UI app Mind" itemprop="image" />
            </div>

            <!-- Video Omega -->
            <video class="video" preload="none" loading="lazy" autoplay loop muted playsinline>
                <source src="/images/intro-omega.mp4" type="video/mp4">
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
</template>

<style scoped>
/* Agrega estilos si es necesario */
</style>




  