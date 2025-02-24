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
        </div>
      </div>
    </section>
  `,
}
