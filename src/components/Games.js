import '../styles/games.css'

export default {
  name: 'Games',
  template: /*html*/ `
  
    <section class="header-games">
      <h1>Unreal engine, desarrollo y UX/UI para videojuegos</h1>
      <div class="container-header container-column-sm flex">

        <h2>El UX/UI en videojuegos es el vestíbulo del jugador.</h2>
        <div class="p-column-sm flex padding-sm">
          <!--<h3>Por qué es importante?</h3>-->
          <p>
            Mostrar la información correcta en el momento adecuado en
            videojuegos es fundamental, impacta directamente en la experiencia
            del jugador y su capacidad para tomar decisiones de manera efectiva.
          </p>
        </div>

        <div class="flex-row padding-xs">
          <img
            class="img-pc"
            src="/images/control-game.webp"
            alt="img control consola"
          />
          <p class="p-short p-align">
            La neurociencia es fundamental en este contexto, ya que proporciona
            una comprensión más profunda de cómo los jugadores procesan la
            información, toman decisiones y experimentan emociones durante el
            juego.
          </p>
        </div>

        <div class="p-column-sm flex padding-sm">
          <h2>Que puedes hacer con Unreal Engine?</h2>
          <ul>
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
      </div>
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
            Servicios de asesoría y análisis especializados en HUD, diseño
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
      <router-link
        to="/contacta"
        class="big-btn1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar servicios y contactar"
        >CONTACTAR</router-link
      >
    </section>

    <section class="black-background">
      <div class="container-casos-games flex">
        <h2>Análisis y diseño de videojuegos</h2>

        <div class="dark-background container-column-md flex">
          <h3>
            Cities Skylines: Secuela muy esperada que decepcionó a sus fans.
          </h3>
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
            <img
              class="img-focus"
              src="/images/bad-comments.webp"
              loading="lazy"
              alt="comparacion opiniones citiesSkylines"
            />
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
            <img
              class="img-pc"
              src="/images/flow1.webp"
              loading="lazy"
              alt="flow juegos"
            />
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

          <div class="flex-row padding-Y-xs">
            <div class="p-column-sm flex align-left">
              <h4>
                Análisis Cities Skylines 2 - Mejoras Visuales, Retos en
                Usabilidad y la Importancia del Modelo Kano
              </h4>
              <p>
                Analizando la secuela un año después de su lanzamiento, he
                encontrado inconsistencias en el diseño, bugs y errores en capas
                o construcción y sin ambargo ya hay DLC de pago.
              
              </p>
              <div>
                <h5>HUD y UI:</h5>
                <ul>
                  <li>
                    Aunque el HUD y la interfaz general han mejorado
                    visualmente, la usabilidad sigue siendo una barrera
                    importante. El nuevo diseño resulta en una interfaz elegante
                    pero poco funcional, sobrecargada de ventanas, capas y
                    colores que dificultan la visibilidad y generan confusión en
                    lugar de claridad.
                  </li>
                  <li>
                    La incorporación de múltiples ventanas emergentes por
                    edificio -cuatro de promedio- intenta suplir la falta de
                    información del primer juego, pero estas son poco prácticas
                    y no del todo útiles para el usuario. Esto refleja la
                    importancia de diseñar experiencias que simplifiquen la
                    navegación, en lugar de saturar con ayudas o ventanas
                    innecesarias.
                  </li>
                </ul>
              </div>
            </div>
            <img
              class="img-pc"
              src="/images/skylines2.webp"
              loading="lazy"
              alt="UI skylines2"
            />
          </div>

          <div class="flex-row">
            <div class="p-column-xs flex">
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
            <img
              class="img-pc"
              src="/images/opinion-skylines2.webp"
              loading="lazy"
              alt=" opiniones citiesSkyline2"
            />
          </div>
          <div class="container-img-focus">
            <img
              class="img-focus"
              src="/images/opiniones-sky.webp"
              loading="lazy"
              alt="opiniones citiesSkylines2"
            />
          </div>
          <!--<video class= "video-bank"  autoplay loop muted playsinline>
                                        <source src="/images/bank.mp4" type="video/mp4" >
                                </video>-->
          <div class="p-column-xs flex padding-Y-xs">
            <h4>Rediseñando la Experiencia: Propuesta UX/UI y jugabilidad para Cities: Skylines</h4>
            <p>Tras analizar los puntos débiles y aciertos propongo una versión que corrige los errores y que implementa nuevas funcionalidades para crear una experiencia de usuario más fluida. El objetivo de este rediseño es ofrecer al jugador un mayor control estratégico, mejorar la claridad de la información y reducir la sobrecarga cognitiva para garantizar una interacción más eficiente y agradable.</p>
            <h5>Propuesta de rediseño Head-up Display general:</h5>
            <div class="flex-row">
              <div class="p-short flex p-column-xxs padding-Y-xs">
                <ul>
                  <li>
                    <p>Interfaz modular y paneles dinámicos:</p>
                    <p>Introducción de un sistema modular en la interfaz, con paneles dinámicos que el jugador puede minimizar según sus necesidades. Los paneles clave estarán siempre accesibles, esto eliminará los problemas de menús mal distribuidos. Encontramos en la barra superior la zona de control, en la barra inferior la zona de construcción y en el lateral las ventanas de información o misiones.               </p>
                    <p>Las ventanas de información serán dinámicas y aparecerán al seleccionar un edificio o botón de construcción para apoyar al desarrollo.</p>
                    <p>Los botones más relevantes como tráfico y demoledora se encuentran en el lateral derecho de la pantalla donde los usuarios al jugar usan más el ratón y no al revés.</p>
                  </li>
                </ul>
              </div>
              <img
                class="container-img"
                src="/images/skylines.webp"
                loading="lazy"
                alt="rediseño citiesSkylines2"
              />
            </div>
            <ul>
                  <li>
                    <p>Información crítica siempre visible:</p>
                    <p>Para mejorar la accesibilidad de la información crítica, como los recursos de ”agua” y “luz” , estos estarán permanentemente visibles en una barra superior junto con el objetivo o propósito de la partida que según la estrategia será el estado de la “felicidad de la población”.</p>
                    <p>Las misiones tendrían un indicador visual atractivo que incentive al jugador a cumplir objetivos a corto y largo plazo, evitando que se pierdan en el micromanagement.
                        Las “misiones activas” estarán en una barra de progreso lateral que se actualiza en tiempo real y se puede minimizar. Esto evitará la necesidad de abrir menús adicionales solo para ver el estado de la ciudad. También tendremos acceso a datos vitales de la población como motivos de fallecimiento.</p>
                    
                  </li>
                  <li>
                    <p>Control total sobre los sistemas de tráfico y construcción:</p>
                    <p>Mediante un nuevo *modo de tráfico* que se activa desde un botón fijo, el jugador ahora tendrá mayor control sobre el tráfico y la gestión de infraestructuras. Se implementará un sistema que permita al jugador definir dónde colocar “señales de tráfico”, “cedas” y “stops”, personalizando el flujo vial de la ciudad. Además, se agregarán “flechas direccionales” que indicarán claramente la conexión entre edificios y carreteras. </p>
                    
                    
                  </li>
                </ul>
            <div class="flex-row">
              <img
                class="container-img"
                src="/images/skylines1.webp"
                loading="lazy"
                alt="rediseño citiesSkylines2"
              />
              <div class="p-short flex p-column-xxs padding-Y-xs">
                <ul>
                  <li>
                    <p>Gestión avanzada de presupuestos y estadísticas asincrónicas:</p>
                    <p>El sistema de presupuesto será más visual y menos intrusivo. En lugar de una ventana en pantalla completa, se abrirá un panel lateral con gráficos interactivos que muestren cómo afectan los cambios a recursos clave como la energía y el agua. Las estadísticas se actualizarán en tiempo real, sin interrumpir la jugabilidad.</p>
                  </li>
                   <li>
                    <p> Mayor interacción del jugador:</p>
                    <p>Se dará al jugador más herramientas para intervenir y ajustar sus decisiones estratégicas de la ciudad, como  leyes, establecer zonas de emergencia o controlar detalles de las infraestructuras.</p>
                  </li>
                  <li>
                    <p>Mapas temáticos con mejor contraste</p>
                    <p>El mapa de recursos será rediseñado para mostrar los diferentes elementos con colores lógicos y bien diferenciados, el contraste se mejorará para que los edificios ya ubicados sean fáciles de distinguir del entorno.</p>
                  </li>
                </ul>
              </div>
            </div>
                  

          </div>
        </div>
      </div>
    </section>
  `,
}
