<script setup>
import '../styles/programming.css'
import { onMounted, nextTick } from 'vue'
import FloatingContactButton from '../components/FloatingContactButton.vue';
import { useMetaData } from '@/composables/useMetaData'

useMetaData({
  title: 'Desarrollo Web, CMS y SEO Personalizado | María Dev Design',
  description: 'Diseño y desarrollo de sitios web, aplicaciones y sistemas a medida con  Vue.js, Js o PHP con foco en SEO y crecimiento de tu empresa',
  path: '/programacion',

  // additionalLinks: [
  //   {
  //     rel: 'stylesheet',
  //     href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward_ios'
  //   },
  //   {
  //     rel: 'stylesheet',
  //     href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chat'
  //   }
  // ],
  jsonLd: {    
    "@type": "ProfessionalService", 
    'description': 'Desarrollo web y personalización de CMS como WordPress y Shopify con tecnologías como PHP, JavaScript y Vue.js, con enfoque en SEO, rendimiento y diseño UX. Uso de Vue 3, Composition API, Prettier, Prerender.io, Cloudflare Workers, Figma, Lighthouse, Squoosh, ezgif, Google Fonts y más.',
    "serviceType": [
      "Desarrollo web personalizado",
      "Personalización de CMS",
      "Optimización de rendimiento web",
      "Mantenimiento y soporte web"
    ],    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de desarrollo",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo web personalizado",
            "description": "Sitios web desde cero con PHP, JavaScript y Vue.js, adaptados a las necesidades del cliente."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personalización de CMS",
            "description": "Modificaciones avanzadas en WordPress, Shopify u otros CMS para adaptarse totalmente al negocio."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Optimización de rendimiento",
            "description": "Mejoras en velocidad de carga, SEO técnico y experiencia de usuario."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mantenimiento y soporte",
            "description": "Actualizaciones, correcciones y mejoras constantes para garantizar el correcto funcionamiento del sitio."
          }
        }
      ]
    }
  }
})

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      window.prerenderReady = true
      
    }, 200)
  })
})


</script>

<template>

  <section class="header-programming ">
    <h1> Desarrollo web y Personalización de Plataformas CMS.</h1>
    <div class="flex-row">
      <h2 class="p-med padding-sm"> Contar con una web optimizada no solo mejora la experiencia del usuario, sino que
        también impacta en el SEO, <span> posicionando tu marca.</span></h2>
      <img src="/images/seo1.webp" alt="imagen el SEO es vital" width="599" height="258">
    </div>
  </section>

  <section class="beneficios p-align">

    <h2>Beneficios de contratar un desarrollador para tu web o CMS</h2>
    <p>Si bien los CMS como WordPress o Shopify ofrecen soluciones rápidas, sus limitaciones pueden afectar la
      escalabilidad y personalización de tu proyecto.</p>

    <ul role="list" class=" full-width">
      <li>
        <h3>Personalización avanzada:</h3>
        <p>Puedes realizar modificaciones avanzadas y ajustar funcionalidades que no están disponibles de manera
          predeterminada en el CMS.</p>
      </li>
      <li>
        <h3> Mejor rendimiento:</h3>
        <p>Un desarrollador puede optimizar la velocidad y eficiencia de tu web, mejorando la experiencia del usuario y
          el SEO, vitales para cualquier negocio.</p>
      </li>
      <li>
        <h3> Integraciones personalizadas:</h3>
        <p> Conectar tu CMS a sistemas externos como CRMs, pasarelas de pago o servicios específicos de tu empresa.</p>
      </li>
      <li>
        <h3> Mayor seguridad:</h3>
        <p>Implementar medidas de seguridad específicas para proteger tu sitio y los datos de tus usuarios.</p>
      </li>
      <li>
        <h3> Escalabilidad: </h3>
        <p>Adaptar el sitio a medida que tu empresa crece o cambia sus necesidades. </p>
      </li>
    </ul>
  </section>
  <section class="services-programming" aria-labelledby="servicios-programacion">
    <h2 id="servicios-programacion">Servicios de desarrollo web y CMS</h2>

    <ul role="list">
      <li>
        <h3>Desarrollo web personalizado:</h3>
        <p>Construyo sitios web desde cero utilizando tecnologías como PHP, JavaScript y Vue.js, garantizando soluciones
          a medida que se ajustan completamente a tus necesidades. Ya sea una web empresarial, un e-commerce o una
          plataforma interactiva, desarrollo tanto el Front-end (interfaz y experiencia del usuario) como el Back-end
          (funcionalidad y base de datos).</p>
      </li>
      <li>
        <h3>Personalización de CMS:</h3>
        <p> Si usas WordPress, Shopify u otro CMS, puedo realizar modificaciones avanzadas para que tu sitio no se
          limite a las funciones estándar. Desde agregar integraciones personalizadas y modificar la apariencia hasta
          optimizar la gestión de contenido, adapto la plataforma para que cumpla exactamente con lo que necesitas.</p>
      </li>
      <!--<li><h4>Integración de sistemas externos:</h4> <p> Conexión de tu web o tienda online con CRMs, pasarelas de pago, y otros servicios.</p></li>-->
      <li>
        <h3>Optimización de rendimiento:</h3>
        <p>Un sitio web rápido y optimizado es clave para mejorar la experiencia del usuario y el posicionamiento en
          buscadores (SEO). Me encargo de:</p>

        <p>✔️ Reducir tiempos de carga mediante optimización de código, imágenes y recursos.</p>
        <p>✔️ Mejorar la usabilidad, asegurando que la navegación sea intuitiva y accesible.</p>
        <p>✔️ Optimización SEO, para que tu web aparezca mejor posicionada en Google.</p>
      </li>
      <li>
        <h3>Mantenimiento y soporte:</h3>
        <p> Actualizaciones, correcciones y mejoras continuas para garantizar que tu web funcione sin problemas.</p>
      </li>
    </ul>

    <button class="big-btn1 contact-btn" role="link" aria-label="Solicitar servicios y contactar">CONTACTAR</button>

  </section>

  <section class="section-proyect">
    <div class="flex-row">

      <div class="container-proyect container-column-sm flex align-center">
        <div class="p-column-xs flex">
          <h2>Mi primer proyecto personal</h2>
          <p>Mi primer proyecto web surgió de una experiencia personal:<span> las acogidas temporales de animales en
              situación de vulnerabilidad, con énfasis en el reencuentro entre animales perdidos y sus familias.</span>
            A lo largo de los años, he dado hogar a perros con historias
            complejas, lo que me enseñó la importancia de un sistema eficiente para gestionar acogidas y adopciones</p>
          <p>Este proyecto en desarrollo tiene como objetivo optimizar y agilizar el proceso de acogida y adopción de
            animales, y la comunicación de animales perdidos en tiempo real. La plataforma facilita la conexión entre
            rescatistas, familias de acogida y adoptantes, ayudando a
            evitar estafas en propias de redes sociales, mediante verificación de perfiles y una experiencia de usuario
            intuitiva y accesible.</p>
          <h3> Contexto y Necesidad </h3>
          <p>En el mundo del rescate animal, muchas organizaciones y particulares enfrentan dificultades para gestionar
            acogidas temporales, especialmente en casos de animales con necesidades especiales. He vivido de primera
            mano múltiples situaciones con final feliz como la de:</p>
          <ul>
            <li>
              <p>Peko, un perro con severos problemas de socialización.</p>
            </li>
            <li>
              <p>Boni, una podenca con miedos arraigados tras ser utilizada para cría.</p>
            </li>
            <li>
              <p>Toby, que sufrió malos tratos con una fuerte desconfianza hacia los humanos.</p>
            </li>
            <li>
              <p>Duke, que fue utilizado como "sparring".</p>
            </li>
            <li>
              <p>Gorda, una mastín que encontré vagando en Andalucía.</p>
            </li>
            <li>
              <p>Bali, mi perra, encontrada muy enferma durante un viaje a la isla de Bali.</p>
            </li>
          </ul>
        </div>

      </div>
      <div class="container-bubble align-center">
        <p> Algunos de mis pequeños acogidos </p>
        <img class="bubble" src="/images/duke.webp" loading="lazy" alt=" perro acogido duke">
        <img class="bubble" src="/images/luna.webp" loading="lazy" alt=" perra acogida luna">
        <img class="bubble" src="/images/baby.webp" loading="lazy" alt=" perra acogida baby">
        <img class="bubble" src="/images/boni.webp" loading="lazy" alt=" perra acogida boni">
        <img class="bubble" src="/images/bebes.webp" loading="lazy" alt="perros acogidos duke y boni">

        <img class="bubble" src="/images/bebeses.webp" loading="lazy" alt=" perros acogidos bebes">
        <img class="bubble" src="/images/toby.webp" loading="lazy" alt=" perro acogido toby">
        <img class="bubble" src="/images/bali.webp" loading="lazy" alt=" perra adoptada bali">
        <img class="bubble" src="/images/bruce.webp" loading="lazy" alt="perro acogido bruce">
        <img class="bubble" src="/images/gorda.webp" loading="lazy" alt=" perra acogida gorda">
      </div>
    </div>
    <div class="card-tecnologias flex-row">
      <div class="container-column-sm flex">
        <h3>Arquitectura y Tecnologías Utilizadas</h3>
        <ul class=" flex">
          <li>
            <h4>Funcionalidades Clave</h4>
            <p>El diseño de la web está pensado con un estilo visual amigable y cercano, accesible para todo tipo de
              usuarios, incluso personas con pocos conocimientos digitales. Su navegación es clara, intuitiva
              y enfocada en facilitar cada paso, desde la búsqueda hasta el contacto.</p>
            <p>La plataforma permite que asociaciones y gestores accedan a un panel personalizado, donde pueden publicar
              y actualizar fichas de animales en busca de acogida o adopción, gestionando también los formularios de
              contacto y seguimiento.</p>
            <p>Los usuarios pueden filtrar animales según criterios como ubicación, tamaño, edad o si requieren cuidados
              especiales, algo clave en casos como el de Boni, que fue usada para cría y tenía miedos específicos.</p>
          </li>

          <li>
            <h4>Lenguaje de Programación (PHP y JavaScript)</h4>
            <p>PHP se emplea para gestionar la lógica del servidor, como validar formularios de solicitud de adopción o
              acogida, enviar notificaciones a asociaciones, y mantener una base de datos segura con los perfiles
              verificados.</p>
            <p>Con JavaScript, se mejoró la experiencia del usuario permitiendo interacciones como validar en tiempo
              real los formularios o mostrar resultados de animales sin recargar la página, haciendo más fluida la
              navegación para quienes buscan adoptar o acoger.</p>
          </li>

          <li>
            <h4>Base de Datos (SQL - MySQL)</h4>
            <p>La base de datos estructura información de usuarios, animales, asociaciones y solicitudes. Esto permite
              registrar casos como el de Duke, un perro usado como sparring, asegurando que su perfil incluya notas
              específicas sobre su comportamiento y necesidades.</p>
            <p>Con relaciones bien definidas entre entidades, se pueden hacer búsquedas eficientes y rastrear el
              historial de adopciones o acogidas, facilitando la trazabilidad y confianza en el sistema.</p>
          </li>

          <li>
            <h4>Gestión de Perfiles</h4>
            <p>Existen perfiles diferenciados para asociaciones, rescatistas y familias de acogida, con accesos
              adaptados. Por ejemplo, una asociación puede publicar varios casos urgentes.</p>
            <p>También se facilita el contacto entre usuarios y entidades mediante formularios con verificación, lo que
              reduce el riesgo de estafas comunes en redes sociales.</p>
          </li>
        </ul>
      </div>
      <div>
          <div class="imgs-tecnologias ">
            <img src="/images/animal.webp" loading="lazy" alt="imagen app web perfil animal" width="300">
            <img src="/images/busqueda.webp" loading="lazy" alt="imagen app web animal" width="300">
            <img src="/images/landing-animal.webp" loading="lazy" alt="imagen app landing web animal" width="300">
          </div>
          <div id="donacion-plataforma" class="donacion-plataforma ">
            <p>Mi objetivo a largo plazo es un mundo más justo, donde los animales en zonas de pocos recursos puedan sobrevivir y ser adoptados, mientras personas que se lucran haciendo criar animales en paises desarrollados y estimulando el abandono sean limitados. Para ello, es necesaria una estructura firme y global, un desarrollo y mantenimiento continuo, y sobretodo personas... Por eso, te invito a colaborar como puedas! Si donas, o conoces a alguien que quiera aportar( desarrollo web, legal, marketing) podríamos cambiar el mundo juntos!</p>
            <iframe id='kofiframe' src='https://ko-fi.com/mariadevdesign/?hidefeed=true&widget=true&embed=true&preview=true' style='border:2px solid #0A526E;border-radius:20px ;width:100%;padding:4px;background:#f9f9f9;' height='570' title='mariadevdesign'></iframe>
          </div>
          
      </div>
    </div>
    
  </section>

  <section id="sobre-la-web">
    <h2>🛠️ Sobre esta Web: mariadevdesign.com</h2>

    <p>
      Esta web ha sido desarrollada con foco en velocidad, accesibilidad y posicionamiento en buscadores (SEO),
      cuidando tanto el código como la experiencia visual en cada sección.
    </p>

    <h3>🔧 Tecnologías y herramientas usadas</h3>
    <ul>
      <li><strong><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue 3 (Composition
            API)</a></strong>: Arquitectura modular y reactiva que facilita la creación de
        componentes reutilizables y mejora el rendimiento en la carga.</li>
      <li><strong><a href="https://vite.dev" target="_blank" rel="noopener noreferrer">Vite</a></strong>: Herramienta
        de empaquetado y compilación moderna.</li>
      <li><strong><a href="https://json-ld.org" target="_blank" rel="noopener noreferrer">JSON-LD</a></strong>: Formato
        para incrustar metadatos estructurados, utilizado para mejorar la indexación
        SEO de la página con datos más ricos, como descripciones, autores y palabras clave.</li>
      <li><strong>Metas dinámicas</strong>: Implementación de metaetiquetas que se actualizan automáticamente según el
        contenido de cada página, usando <code>useMetaHead</code>, para garantizar que cada sección sea optimizada para
        SEO y redes sociales.</li>
      <li><strong><a href="https://developers.cloudflare.com/workers/" target="_blank"
            rel="noopener noreferrer">Cloudflare Workers</a></strong>:  Permite la redirección, control de caché y la gestión personalizada de peticiones, incluyendo 
<code>fetch</code> para formularios, prerendering para bots y reglas según la URL o el <code>User-Agent</code>.</li>
      <li><strong><a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a></strong>:
        Herramienta de diseño utilizada para crear prototipos visuales interactivos,
        optimizados para una experiencia de usuario fluida y personalizada en cada sección.</li>
      <li><strong><a href="https://prerender.io" target="_blank" rel="noopener noreferrer">Prerender.io</a></strong>:
        Utilizada para renderizar el contenido de la página antes de que sea enviado a
        los motores de búsqueda, lo que mejora la indexación por parte de bots como Google, Ahrefs y otros.</li>
      <li><strong>Prettier</strong>: Herramienta que asegura un formato de código coherente, lo que mejora la
        legibilidad y mantenibilidad del código.</li>
      <li><strong>Google Fonts</strong>: Tipografías optimizadas que no solo mejoran la estética, sino también la
        velocidad de carga de la web.</li>
      <li><strong>Squoosh / EZGif</strong>: Herramientas de compresión de imágenes que ayudan a reducir el tamaño de los
        archivos y mejorar los tiempos de carga.</li>
      <li><strong><a href="https://developer.chrome.com/docs/lighthouse" target="_blank"
            rel="noopener noreferrer">Google Lighthouse</a></strong>: Herramienta de Google que evalúa la calidad de la
        web, con puntuaciones de
        rendimiento, accesibilidad y SEO al 100%.</li>
      <li><strong>Google Analytics</strong>: Herramienta para el seguimiento del comportamiento de los usuarios y el
        rendimiento de la web, permitiendo hacer ajustes basados en datos reales.</li>
      <li><strong><a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">Google
            Search Console</a></strong>: Plataforma esencial para monitorizar la visibilidad de la web en los
        resultados de búsqueda de Google, detectar errores de indexación y mejorar el posicionamiento SEO.</li>
      <li><strong><a href="https://ahrefs.com" target="_blank" rel="noopener noreferrer">Ahrefs</a></strong>:
        Herramienta avanzada de análisis SEO que permite auditar el sitio, investigar
        palabras clave, analizar backlinks y observar a la competencia para mejorar la estrategia de posicionamiento.
      </li>

    </ul>

    <h3>📈 Impacto SEO y rendimiento</h3>
    <ul>
      <li>🚀 <strong>Carga rápida</strong> gracias al control de caché, compresión de imágenes, y CDN con Cloudflare.
      </li>
      <li>👁️‍🗨️ <strong>Metaetiquetas OG y SEO</strong> configuradas por página con <code>useMetaHead</code>.</li>
      <li>🔍 <strong>Indexación</strong> en Google Search Console y Ahrefs.</li>
      <li>📂 <strong>Sitemap</strong> y archivo <code>robots.txt</code></li>
      <li>🤖 <strong>Renderizado para bots</strong> mediante Prerender.io + headers <code>no-store</code> para evitar
        caching en versiones de bots.</li>

    </ul>

    <!-- <h3>📊 Resultado Lighthouse</h3> -->
    <!-- <img src="/img/lighthouse-100.png" alt="Resultados Lighthouse: 100/100" style="max-width:100%;" loading="lazy" /> -->
  </section>
  <FloatingContactButton />
</template>
    