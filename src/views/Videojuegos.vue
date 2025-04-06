
<script setup>
import '../styles/games.css'
import { useHead } from '@vueuse/head'
import FloatingContactButton from '../components/FloatingContactButton.vue';

useHead({
  title: 'Desarrollo de Videojuegos | Unreal Engine',
  meta: [
    {
      name: 'description',
      content:
        'Creación de videojuegos 2d y 3d con Unreal Engine. Diseño de mecánicas, niveles y narrativas inmersivas.',
    },
    {
      property: 'og:url',
      content: 'https://www.mariadevdesign.com/videojuegos',
    },
    { property: 'og:description', content: 'Explora mis proyectos de UX/UI y desarrollo web.' },
    {
      name: 'keywords',
      content:
        'Desarrollo videojuegos, unreal engine, diseño de niveles, diseño ux/ui videojuegos, documentación videojuegos',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.mariadevdesign.com/videojuegos',
    },
  ],
});


</script>

<template>
  <FloatingContactButton />
  <section class="header-games" itemscope itemtype="https://schema.org/CreativeWork">
    <h1 itemprop="headline"> Unreal engine y diseño UX/UI <br>para videojuegos</h1>
    <div class="container-header container-column-md flex align-center" itemprop="text">

      <h2 itemprop="alternativeHeadline"> El UX/UI en videojuegos es el vestíbulo del jugador.</h2>
      <div class="p-column-sm flex  padding-sm">
        <p class="p-games p-align" itemprop="description">
          Los videojuegos no solo divierten, también estimulan la memoria, la creatividad y la toma de decisiones.
        </p>
        <div class="p-column-xxs flex">
          <h3 class="beneficios-games">Beneficios cognitivos</h3>
          <p itemprop="articleBody">
            La neurociencia confirma su impacto positivo en todas las edades: desde mejorar el aprendizaje en niños
            hasta
            retrasar el deterioro cognitivo en mayores. Además, son clave en accesibilidad, con experiencias adaptadas
            para personas con necesidades especiales. Más que ocio,
            los videojuegos son una herramienta para el desarrollo y la inclusión.
          </p>
        </div>
      </div>

      <div class=" iframe full-width" itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
        <meta itemprop="name" content="Beneficios diseño UX/UI para videojuegos y Unreal Engine">
        <meta itemprop="description"
          content="Ejemplos y beneficios de interfaces de usuario en videojuegos desarrollados con Unreal Engine">
        <meta itemprop="thumbnailUrl" content="https://img.youtube.com/vi/ZCwlZc-WG48/maxresdefault.jpg">
        <meta itemprop="uploadDate" content="2023-01-01">
        <iframe class="full-width" height="415" src="https://www.youtube.com/embed/ZCwlZc-WG48"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class=" flex p-column-xs p-align">
        <p class=" p-games">
          La neurociencia es fundamental en este contexto, ya que proporciona
          una comprensión más profunda de cómo los jugadores procesan la
          información, toman decisiones y experimentan emociones durante el
          juego.
        </p>
        <p>
          Mostrar la información correcta en el momento adecuado en
          videojuegos es vital, impacta directamente en la experiencia
          del jugador y su capacidad para tomar decisiones de manera efectiva.
        </p>
      </div>



    </div>
  </section>
  <section class="unreal-games">
    <div class="p-column-sm flex padding-sm">
      <h2>Que puedes hacer con Unreal Engine?</h2>
      <ul role="list">
        <li>
          <h3>Creación de Escenarios y Mapas:</h3>
          <p>
            Diseño y construcción de entornos inmersivos y detallados para
            videojuegos o aplicaciones interactivas.
          </p>
        </li>
        <li>
          <h3>Producción de Cinemáticas y Secuencias Animadas:</h3>
          <p>
            Creación de escenas cinemáticas y narrativas visuales para
            contar historias de forma impactante dentro del juego o la
            aplicación.
          </p>
        </li>
      </ul>
    </div>

    <!--<video class="cinematica" loading="lazy" controls muted playsinline
        title="Cinemática creada con Unreal Engine"
        aria-label="Cinemática creada con Unreal Engine"
        itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
        <source src="/images/short-cinematik.mp4" type="video/mp4">
        <meta itemprop="name" content="Diseño UX/UI tienda joyería" />
        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
    </video>-->
  </section>
  <section class="services-games">
    <h2>Servicios para videojuegos</h2>
    <ul>
      <li>
        <h3>Soporte en creación de pitch's y GDD</h3>
        <p>
          Estos documentos son esenciales para comunicar de manera clara y
          persuasiva las ideas detrás de un videojuego, ya sea a inversores,
          desarrolladores o equipos de trabajo.
        </p>
      </li>
      <li>
        <h3>Asesoría y Análisis de HUD, Diseño Visual y UI</h3>
        <p>
          Asesoría especializada en HUD, diseño
          visual y UI, adaptados tanto para videojuegos en desarrollo como
          para la optimización de proyectos existentes.
        </p>
      </li>
      <li>
        <h3>UR y prototipado</h3>
        <p>
          Desarrollo wireframes y prototipos interactivos que permiten
          visualizar y probar la interfaz antes de la implementación,
          asegurando que cada elemento tenga un propósito claro. Los
          prototipos son herramientas fundamentales para la validación de la
          experiencia de usuario, y son ideales para convencer a
          desarrolladores o inversores al mostrar una visión del producto.
        </p>
      </li>
      <li>
        <h3>Diseño Visual</h3>
        <p>
          Diseños centrados en la armonía entre la estética general del
          videojuego y la Interfaz, HUD, menús y interacciones para ofrecer
          una experiencia fluida y envolvente que conecta al jugador con la
          narrativa y el ambiente del juego.
        </p>
      </li>
      <li>
        <h3>Pruebas de Usabilidad</h3>
        <p>
          Pruebas de usabilidad con jugadores para identificar áreas de mejora
          y optimizar la experiencia, asegurando que cada elemento de la
          interfaz contribuya al disfrute del juego.
        </p>
      </li>
      <li>
        <h3>Desarrollo en Unreal Engine</h3>
        <p>
          Utilizando la potencia de Unreal Engine diseño y construyo
          escenarios inmersivos implementando assets para lograr una alta
          calidad visual, aplicando tecnologías avanzadas como Lumen para
          iluminación realista.
        </p>
        <p>
          También trabajo con Metahumans para desarrollar personajes
          detallados y realistas. Estas opciones se pueden adaptar tanto a
          empresas que buscan incorporar elementos de gamificación como a
          desarrolladores de videojuegos, ofreciendo soluciones flexibles
          según las necesidades del proyecto.
        </p>
      </li>
    </ul>
    <button class="big-btn1 contact-btn" aria-label="Solicitar servicios y contactar">CONTACTAR</button>
  </section>

  <section class="black-background">
    <h2>Análisis y diseño de videojuegos</h2>
    <div class="container-casos-games flex">
      <h3>
        El esperado lanzamiento de Frostpunk 2
      </h3>

      <div class="dark-background container-column-md flex ">

        <div class="flex-row ">
          <div>
            <h4>Contexto</h4>
            <p>
              Para mí, Frostpunk 1 no es solo un juego, es una obra de arte de la estrategia.
            </p>
            <p>Conté los minutos hasta el
              lanzamiento de Frostpunk 2. Tras algunos retrasos llegó el gran día, y como en el primero
              el impresionante diseño visual me fascinó, pero a medida que pasaban los minutos mi entusiasmo se iba
              desvaneciendo...y como a mí, a muchos de sus fans.
            </p>
            <p>Frostpunk 1 es un juego en un ambiente apocalíptico donde la estrategia gira entorno a los minutos, una
              estrategia milimétrica que da una sensación adictiva de acción constante controlada, esa acción-reacción
              necesaria en el cual habia consecuencias inmediatas visibles en tu comunidad aportando realidad, y
              resultando en un juego emocional.</p>
          </div>

          <div class="container-img-focus">
            <img class="img-focus" src="/images/frostpunk1.webp" loading="lazy" alt=" HUD y diseño Frostpunk1" />
          </div>
        </div>



        <div class="flex-row padding-Y-xs">
          <div>
            <p>En contraste, Frostpunk 2 se siente más como un simulador político. Las facciones se convierten en el eje
              principal de la estrategia, diluyendo la urgencia y la conexión emocional del original. El enfoque se
              centra
              en equilibrar intereses y esperar largos periodos para que algo significativo ocurra, lo que rompe la
              dinámica
              de "acción-reacción" que tanto disfruté en el primer juego.</p>
            <p>El resultado es un juego con un ritmo completamente distinto, que obliga al jugador a adelantar el
              tiempo,
              dejando atrás la intensidad estratégica que definió a su predecesor.<span> Si bien la dirección visual
                sigue
                siendo magnífica, el cambio de enfoque transforma radicalmente la experiencia, alejándola de lo que hizo
                al original tan memorable.</span></p>
          </div>

          <div class="container-img-focus">
            <img class="img-focus" src="/images/frostpunk2.webp" loading="lazy" alt=" HUD y diseño Frostpunk2" />
          </div>
        </div>
        <div class="flex-row">
          <div class="p-column-xs flex">
            <h4>Datos 4 meses después del lanzamiento</h4>
            <p> En Gamepass Frostpunk2 tiene una puntuación de 3.2* vs FrostPunk1 con un 4.3*.</p>
            <p>En Steam Frostpunk2 tiene 15mil comentarios positivos y 5mil comentarios negativos(25%), frente a 120mil
              comentarios positivos y
              9mil negativos(6.98%) de FrostPunk1.</p>
            <p> En Steam Spy, Frostpunk1 sigue teniendo más jugadores diarios que FrostPunk2.</p>
            <p> Comentar que 11bit Studios valora enormemente a sus usuarios, y algunos de los problemas detectados han
              sido
              rectificados posteriormente en sus actualizaciones.</p>
          </div>
          <img class="img-pc" src="/images/opinion-frost2.webp" loading="lazy" alt=" opinion videojuego Frostpunk2"
            width="300" />
        </div>


        <div>
          <h4>Analisis jugabilidad y usabilidad de Frostpunk 2</h4>
          <p>
            Para un jugador que conoce el juego anterior, la curva de aprendizaje es mucho más lenta de lo esperado.
            Aunque es
            comprensible dada la complejidad del juego, el diseño podría haber sido más amigable en la transición.
            Conceptos
            básicos que eran intuitivos en Frostpunk 1 como los recursos, los ciclos de día y noche con las operativas y
            estrategias específicas de cada turno o el uso estratégico de autómatas, han cambiado completamente o
            desaparecido.
          </p>
          <p>Quiero desarrollar el concepto de los autómatas porque esa sensación se refleja en el resto del juego a
            pesar de ser
            un detalle insignificante en la grandiosidad del juego: Un autómata en Frostpunk1 -y en la mayoría de
            videojuegos- es
            un robot que puede hacer trabajos de humano con ciertas características, es decir una herramienta que juega
            con unas
            normas propias y según la estrategia te puede interesar, o no. Qué es un autómata en Frostpunk2? Un autómata
            = 800
            habitantes.</p>
          <h5>Tiempos de Construcción y Recursos Desproporcionados:</h5>
          <p>Una partida que comienza con 8000 habitantes, de los cuales pueden trabajar 4800 (adultos), temperatura
            exterior a
            menos -20º en un ambiente apocalíptico.</p>
          <ul>
            <li>
              <p> Un distrito de viviendas básico requiere 200 trabajadores fijos y produce 20 viviendas.</p>
            </li>
            <li>
              <p>Distrito de comidas requiere 600 trabajadores fijos y produce 50 alimentos.</p>
            </li>
            <li>
              <p>Impacto: Con un tiempo de construcción medio de 7.2 meses -quitar hielo: 3,2 meses + construir distrito
                4 meses-, aparece la necesidad constante de adelantar el tiempo, combinados con la falta de
                consecuencias inmediatas, rompen la inmersión. En un apocalipsis donde el tiempo es vital, pasar meses
                sin comida, calor o techo debería tener un impacto significativo en la población, pero en Frostpunk 2,
                estas decisiones parecen carecer de peso real, además de la sensación de desproporción en el % de
                empleados y recursos obtenidos.</p>
            </li>
          </ul>
          <p>Una vez conoces el juego o desarrollas el arbol de ideas puedes tomar otras estrategias, expandir distritos
            o construir edificios, y aqui es donde entra el conflicto de diseño y experiencia de usuario.</p>
        </div>

        <div class=" analisis-frost flex p-column-xs">
          <h4>Análisis UX/UI Frostpunk 2:</h4>
          <p>Como ya he comentado el diseño artístico y visual del juego es impresionante, las animaciones realmente
            aportan vida a los personajes, y la historia sigue siendo increíble, pero enfocándome en la experiencia de
            usuario y tras analizar tanto el juego, los datos y las opiniones puedo decir que hay mejoras o enfoques que
            se podrían implementar:</p>
          <ul class="padding-Y-xs">
            <li class="flex p-column-xxs">
              <p><span>Visibilidad y confusión visual en distritos 🢖</span></p>
              <div class="shadow-container ">
                <p class="text-red ">Problema: Confusión visual en el sistema de distritos. La falta de tamaños fijos o
                  organización clara en los distritos dificulta la planificación y expansión, obligando al jugador a
                  seleccionar edificio por edificio para verificar su nivel de expansión, o buscar edificios vitales
                  como
                  hospitales, lo que ralentiza la toma de decisiones.</p>
                <p class="text-bg-purple">Solución: Mejorar la visibilidad de los distritos, estableciendo tamaños fijos
                  o
                  formas claras que permitan al jugador identificar rápidamente los niveles de expansión y disposición
                  de
                  los edificios sin necesidad de inspeccionarlos individualmente.</p>
              </div>
            </li>
            <li class="flex p-column-xxs">
              <p><span>Interrupción en el flujo de interacciones 🢖</span></p>
              <div class="shadow-container">
                <p class="text-red ">Problema: Al hacer clic en un edificio, la cámara se desplaza y acerca a cámara
                  lenta
                  hacia él, provocando tiempos de espera y rompiendo la fluidez de la interacción al gestionar múltiples
                  edificios. </p>
                <p class="text-bg-purple">Solución: Resaltar el edificio seleccionado sin moverse de la vista actual,
                  mostrando una miniatura del edificio seleccionado en la interfaz junto a la información. </p>
              </div>
            </li>
            <li class="flex p-column-xxs">
              <p><span>Deshumanización del gameplay 🢖</span></p>
              <div class="shadow-container">
                <p class="text-red ">Problema: Los íconos relacionados con los enfermos y otros estados críticos
                  (hambre,
                  criminalidad) solo muestra información imprecisa como "leve" o "moderada", lo que genera una sensación
                  de falta de detalle y realismo.</p>
                <p class="text-bg-purple">Solución: Evitar términos genéricos como "leve" o "moderada", ofreciendo
                  información más concreta (por ejemplo, porcentaje de personas afectadas o número exacto de casos) para
                  difuminar la sensación para mejorar la interacción y la toma de decisiones del jugador.</p>
              </div>
            </li>
            <li class="flex p-column-xxs">
              <p><span>Árbol de desarrollo confuso 🢖</span></p>
              <div class="shadow-container">
                <p class="text-red ">Problema: El árbol de desarrollo es difícil de comprender, algunos conceptos no se
                  encuentran donde se esperan, no muestran un camino claro llevándote a cometer errores, y no se muestra
                  claramente qué elemento está en desarrollo.</p>
                <p class="text-bg-purple">Solución: Usar un color predominante para destacar claramente los elementos
                  que
                  están en desarrollo. Agrupaciones que permitan al jugador ver las tecnologías o mejoras relevantes
                  según
                  categorías y recursos, y ajustar con mejoras más proporcionales según el tipo de recurso. </p>
              </div>
            </li>
            <li class=" p-column-xs flex  align-left">
              <p> Problemas adicionales 🢖</p>
              <div class="shadow-container">
                <p class="text-red ">- Actualmente al expandir un edificio industrial, el producto que se está
                  produciendo
                  cambia automáticamente al valor por defecto, perdiendo tiempo de juego vital hasta que eres consciente
                  de ello.</p>
              </div>

            </li>
          </ul>
        </div>



        <div class="flex-row padding-Y-xs">
          <div class="p-short p-column-xs flex">
            <h4>Rediseño sugerido "Árbol de ideas"</h4>
            <p>Sugiero cambiar a nombres más intuitivos y jerárquicos para las ideas generales en la pantalla principal
              (ej. Invernaderos avanzados II), y posteriormente incluir los nombres específicos según facción, además
              mostrar el tipo de contrucción (edificio o distrito) incluyendo el área de constucción correspondiente, en
              conjunto estos cambios facilitan la organización y el espacio visual de las opciones.</p>
            <p> Se incluye un icono que marca la idea que se encuentra en desarrollo. Se agrupan visualmente las ideas
              compartidas entre facciones.</p>
          </div>
          <img class="container-img" src="/images/diseño-frost.webp" loading="lazy"
            alt="Rediseño arbol ideas Frostpunk2">
        </div>

        <p>
          En resumen, ambos son juegos increíbles, y valoro enormemente la intención del estudio que proporciona
          entornos de juego muy completos, pero como fan de Frostpunk1 entiendo las reacciones frente su secuela, y
          espero que lancen más DLC de lo que para mi siempre será una obra maestra.
        </p>


      </div>

    </div>
    <div class="container-casos-games flex ">
      <h3>
        Cities Skylines: Secuela muy esperada que decepcionó a sus fans.
      </h3>
      <div class="dark-background container-column-md flex">

        <div>
          <p>
            City Skylines 1, lanzado en 2015 es un juego de simulación de
            construcción de ciudades con más de 12 millones uds
            comercializadas y más de 70 DlC, además de premios como Juego de
            estrategia y simulación.
          </p>
          <p>
            Al anunciar que lanzarían la secuela en 2023 sus fans se frotaban
            las manos, ya que cuando tienes una buena base de juego esperas
            que la próxima sea muy superior, pero finalmente llovieron las
            críticas....Qué pasó?
          </p>
        </div>
        <div class="container-img-focus">
          <img class="img-focus" src="/images/bad-comments.webp" loading="lazy"
            alt="comparacion opiniones citiesSkylines" />
        </div>
        <div>
          <h4>Análisis Cities: Skylines 1 - Simulación Urbana Compleja</h4>
          <p>
            Analizando el juego base (sin LCd) que tanto triunfó, tengo
            opiniones encontradas sobre Cities: Skylines 1:
          </p>

          <h5>Puntos positivos:</h5>
          <ul>
            <li>
              <p>Me gusta su simulación de agentes y sistemas de gestión, la
                calidad visual y las texturas del juego. Estos elementos tienen
                un realismo atractivo para quienes disfrutan de la microgestión
                y el diseño urbano.</p>
            </li>
            <li>
              <p>El concepto del tiempo, un sistema donde 24 horas equivalen a 1
                mes, permitiendo un ritmo más controlado, favoreciendo la
                planificación estratégica y proporcionando un cambio natural
                entre el día y la noche que enriquece la ambientación.</p>
            </li>
            <li>
              <p>Control de tráfico, me resulta muy interesante como la gestión
                del tráfico se convierte en algo entretenido y vital en el
                juego.</p>
            </li>
          </ul>
        </div>
        <div class="flex-row padding-Y-xs ">
          <div>
            <h5>Puntos de mejora:</h5>
            <ul class="p-short">
              <li>
                <p>
                  Encuentro limitaciones que impactan la experiencia. La curva
                  de aprendizaje es muy lenta y requiere horas para dominar
                  las mecánicas; además, las pocas explicaciones no ayudan a
                  la comprensión inicial creando frustraciones.
                </p>
              </li>
              <li>
                <p>
                  Tras horas invertidas, las mayores estrategias se reducen en
                  su mayoría, a la gestión del tráfico, lo cual limita el
                  potencial de una simulación tan rica.
                </p>
              </li>
            </ul>
          </div>
          <img class="img-pc" src="/images/flow1.webp" loading="lazy" alt="flow videojuegos" />
        </div>

        <div class="p-column-xs flex">
          <h5>Interfaz y diseño de experiencia de usuario:</h5>
          <p>
            Para un juego de estrategia o simulación hay claras herramientas,
            como controles avanzados y objetivos que son necesarios, pero el
            juego no las facilita.
          </p>
          <p>
            Desde la primera interfaz te muestran la multitud de "escenarios
            disponibles" pero todos de pago (unos 14€ cada uno), creando la
            sensación de juego "vacío" al ver que el juego base
            realmente solo ofrece unos pocos mapas sin objetivos ni retos
            claros y limitados encuanto a estrategia, donde la mayor
            estrategia es entender el funcionamiento juego.
          </p>
          <p>
            En comparación y desde mi perspectiva, la saga Tropico —lanzada
            antes y con una base de fans similar— ofrece una experiencia más
            jugable y emocionante, con opciones estratégicas variadas que
            mantienen el interés y sí permiten que los jugadores apliquen
            distintas tácticas sin necesidad de comprar expansiones.
          </p>
        </div>
        <div>
          <h4>
            Análisis Cities Skylines 2 - Mejoras Visuales y Retos en
            Usabilidad
          </h4>
          <p>
            Analizando la secuela un año después de su lanzamiento, he
            encontrado inconsistencias en el diseño, bugs y errores en capas
            o construcción y sin ambargo ya hay DLC de pago.

          </p>
        </div>
        <div class="flex-row padding-Y-xs">
          <div class="p-column-sm flex align-left">

            <div>
              <h5>HUD y UI:</h5>
              <ul class="p-med">
                <li>
                  <p>
                    Aunque el HUD y la interfaz general han mejorado
                    visualmente, la usabilidad sigue siendo una barrera
                    importante. El nuevo diseño resulta en una interfaz elegante
                    pero poco funcional, sobrecargada de ventanas, capas y
                    colores que dificultan la visibilidad y generan confusión en
                    lugar de claridad.</p>
                </li>
                <li>
                  <p>
                    La incorporación de múltiples ventanas emergentes por
                    edificio -cuatro de promedio- intenta suplir la falta de
                    información del primer juego, pero estas son poco prácticas
                    y no del todo útiles para el usuario. Esto refleja la
                    importancia de diseñar experiencias que simplifiquen la
                    navegación, en lugar de saturar con ayudas o ventanas
                    innecesarias.</p>
                </li>
              </ul>
            </div>
          </div>
          <img class="img-pc" src="/images/skylines2.webp" loading="lazy" alt="UI cities skylines2" />
        </div>

        <div class="flex-row ">
          <div class="p-med flex p-column-xs">
            <h5>La importancia del propósito y del modelo Kano:</h5>
            <p>
              Otra decisión cuestionable es la eliminación de algunas métricas
              claves para la estrategia de tráfico, lo cual era uno de los
              puntos fuertes del primer juego. Este cambio disminuye las
              opciones estratégicas y la profundidad del gameplay, algo
              esencial en este tipo de simulación.
            </p>
            <p>
              Un buen diseño debe proporcionar una experiencia fluida y
              motivadora para el jugador, facilitando la interacción y
              ofreciendo una curva de aprendizaje acorde. Este lanzamiento es
              un claro ejemplo de la importancia del Modelo Kano, donde se
              debe identificar qué funciones mantendrán la satisfacción del
              usuario priorizando la estabilidad y optimización.
            </p>
            <p>
              Las expectativas eran altas, y en este caso, la compañía ignoró
              ciertos aspectos funcionales esperados y lanzó el juego con
              fallos de rendimiento significativos, lo cual impactó gravemente
              la confianza de la base de jugadores hasta el día de hoy, donde
              los comentarios siguen siendo "curiosos", os dejo algunos :)
            </p>
          </div>
          <img class="img-pc" src="/images/opinion-skylines2.webp" loading="lazy"
            alt=" opiniones y puntuacion cities Skylines 2" />
        </div>
        <div class="container-img-focus">
          <img class="img-focus" src="/images/opiniones-sky.webp" loading="lazy" alt="opiniones cities Skylines 2" />
        </div>
        <!--<video class= "video-bank"  autoplay loop muted playsinline>
                                        <source src="/images/bank.mp4" type="video/mp4" >
                                </video>-->
        <div class="p-column-xs flex padding-Y-xs align-center">
          <h4>Rediseñando la Experiencia: Propuesta UX/UI y jugabilidad para Cities: Skylines 2</h4>
          <p>Tras analizar los puntos débiles y aciertos propongo una versión que corrige los errores y que implementa
            nuevas funcionalidades para crear una experiencia de usuario más fluida. El objetivo de este rediseño es
            ofrecer al jugador un mayor control estratégico, mejorar la claridad de la información y reducir la
            sobrecarga cognitiva para garantizar una interacción más eficiente y agradable.</p>

          <div class="flex-row">
            <div class="p-short flex p-column-xs padding-Y-xs">
              <h5>Propuesta de rediseño Head-up Display general:</h5>
              <ul>
                <li>
                  <p>Interfaz modular y paneles dinámicos:</p>
                  <p>Introducción de un sistema modular en la interfaz, con paneles dinámicos que el jugador puede
                    minimizar según sus necesidades. Los paneles clave estarán siempre accesibles, esto eliminará los
                    problemas de menús mal distribuidos. Encontramos en la barra superior la zona de control, en la
                    barra inferior la zona de construcción y en el lateral las ventanas de información o misiones. </p>
                  <p>Las ventanas de información serán dinámicas y aparecerán al seleccionar un edificio o botón de
                    construcción para apoyar al desarrollo.</p>
                  <p>Los botones más relevantes como tráfico y demoledora se encuentran en el lateral derecho de la
                    pantalla donde los usuarios al jugar usan más el ratón y no al revés.</p>
                </li>
              </ul>
            </div>
            <img class="container-img" src="/images/skylines.webp" loading="lazy" alt="rediseño cities Skylines2" />
          </div>
          <ul>
            <li>
              <p>Información crítica siempre visible:</p>
              <p>Para mejorar la accesibilidad de la información crítica, como los recursos de ”agua” y “luz” , estos
                estarán permanentemente visibles en una barra superior junto con el objetivo o propósito de la partida
                que según la estrategia será el estado de la “felicidad de la población”.</p>
              <p>Las misiones tendrían un indicador visual atractivo que incentive al jugador a cumplir objetivos a
                corto y largo plazo, evitando que se pierdan en el micromanagement.
                Las “misiones activas” estarán en una barra de progreso lateral que se actualiza en tiempo real y se
                puede minimizar. Esto evitará la necesidad de abrir menús adicionales solo para ver el estado de la
                ciudad. También tendremos acceso a datos vitales de la población como motivos de fallecimiento.</p>

            </li>
            <li>
              <p>Control total sobre los sistemas de tráfico y construcción:</p>
              <p>Mediante un nuevo *modo de tráfico* que se activa desde un botón fijo, el jugador ahora tendrá mayor
                control sobre el tráfico y la gestión de infraestructuras. Se implementará un sistema que permita al
                jugador definir dónde colocar “señales de tráfico”, “cedas” y “stops”, personalizando el flujo vial de
                la ciudad. Además, se agregarán “flechas direccionales” que indicarán claramente la conexión entre
                edificios y carreteras. </p>


            </li>
          </ul>
          <div class="flex-row">
            <img class="container-img" src="/images/skylines1.webp" loading="lazy" alt="rediseño cities Skylines2" />
            <div class="p-short flex p-column-xxs padding-Y-xs">
              <ul>
                <li>
                  <p>Gestión avanzada de presupuestos y estadísticas asincrónicas:</p>
                  <p>El sistema de presupuesto será más visual y menos intrusivo. En lugar de una ventana en pantalla
                    completa, se abrirá un panel lateral con gráficos interactivos que muestren cómo afectan los cambios
                    a recursos clave como la energía y el agua. Las estadísticas se actualizarán en tiempo real, sin
                    interrumpir la jugabilidad.</p>
                </li>
                <li>
                  <p> Mayor interacción del jugador:</p>
                  <p>Se dará al jugador más herramientas para intervenir y ajustar sus decisiones estratégicas de la
                    ciudad, como leyes, establecer zonas de emergencia o controlar detalles de las infraestructuras.</p>
                </li>
                <li>
                  <p>Mapas temáticos con mejor contraste:</p>
                  <p>El mapa de recursos será rediseñado para mostrar los diferentes elementos con colores lógicos y
                    bien diferenciados, el contraste se mejorará para que los edificios ya ubicados sean fáciles de
                    distinguir del entorno.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>
  