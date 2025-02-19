import '../styles/uxui.css';

export default {
  name: 'Uxui',
  template: /*html*/ `
  
        <section class="header-ux">
                <h1> Diseño web UX/UI </h1>
                <div class="flex-row padding-xs">
                        <div class="container-importancia container-column-sm flex p-align p-med ">
                            <h2>La importancia del UX</h2>
                            <p>La experiencia del usuario es un factor decisivo que puede determinar el éxito o el fracaso de una tienda online, cuando no se cumple con las expectativas del usuario, el impacto se traduce directamente en la pérdida de ventas y en la deterioración de la reputación de la marca.</p>
                            <p> Un buen diseño tiene un impacto directo en el crecimiento de las ventas y la eficiencia operativa, incrementando sus ingresos al mismo tiempo que reduce costes y necesidad de personal.</p>
                            <h3>El equilibrio perfecto entre eficiencia y escalabilidad</h3>
                        </div>
                        <img class="img-pc" src="/images/Designers.webp" alt="foto-pc-slogan" >
                </div>
        </section>

        <section class="benefits">

                <div class="container-motivos-ux flex-row padding-xs">
                
                    <div class="container-column-sm flex">
                        <h2>¿Cómo ayuda el UX a crecer las ventas? </h2>
                        <ul>
                            <li>
                                <h3>Mejora la conversión:</h3> <p> Simplifica procesos, reduciendo fricciones que pueden llevar a la pérdida de clientes. Con una navegación intuitiva, los usuarios tienen menos probabilidades de abandonar sus carritos y más probabilidades de completar la compra. </p>
                            </li>
                            <li>
                                <h3>Aumenta la retención de clientes:</h3> <p>Una experiencia positiva hace que los usuarios regresen. La retención de clientes es clave para el crecimiento sostenible de las ventas, y es mucho más económico mantener a un cliente que adquirir uno nuevo.</p>
                            </li>
                            <li>
                                <h3>Optimiza la personalización:</h3> <p>Aprovechar el análisis de datos y ofrecer una experiencia de compra personalizada para cada cliente, aumenta el ticket promedio por cliente sin necesidad de ampliar tu catálogo de productos. </p>
                            </li>
                        </ul>
                    </div>

                    <div class="container-column-sm flex">
                        <h2>Reducción de costes a través de UX: </h2>
                        <ul>
                            <li>
                                <h3>Optimización del flujo de trabajo interno:</h3><p> Tener interfaces administrativas claras y procesos automatizados de gestión de inventarios, pedidos y envíos permiten que el personal trabaje de manera más eficiente, evitando duplicación de tareas y posibles errores humanos.</p>
                            </li>
                            <li>
                                <h3>Automatización de procesos:</h3><p> Un diseño UX eficiente puede reducir la dependencia de personal de atención al cliente al ofrecer herramientas donde los clientes resuelven sus problemas o consultas fácilmente.</p>
                            </li>
                            <li>
                                <h3>Diseño eficiente:</h3><p>Un diseño eficiente agiliza procesos y reduce errores del usuario. Esto se traduce en menos consultas de soporte, mayor conversión y fidelización, maximizando el retorno de inversión.</p>
                            </li>
                        </ul>
                        <img class="gif" src="/images/gif2.gif" alt="Animación en movimiento" >
                    </div>
                    
                </div>
        </section>

        <section class="services-ux-background">
                <div class="services-ux-container flex container-column-sm">
                            <h2> Servicios de Diseño UX/UI </h2>
                            <ul>
                                <li><h3>Auditorías UX/UI y Optimización de la Conversión (CRO) </h3>   <p>Auditorías completas de sitios web o plataformas CMS para detectar áreas de mejora en la experiencia de usuario y la interfaz visual. Optimizo la navegación, diseño y funcionalidad para aumentar la conversión y reducir la tasa de abandono.</p></li>
                                <li><h3> Diseño de Interfaces Personalizadas </h3><p>Diseño interfaces visuales atractivas y funcionales para mejorar la interacción del usuario. Obtén tus prototipos interactivos con flujos de navegación que se adaptan a las necesidades de cada empresa, optimizando tanto la estética como la usabilidad. Estos prototipos pueden llevarse a desarrollo o compartirlo con potenciales inversores.</p></li>
                                <li><h3> Integración y Personalización en CMS:</h3> <p> Implemento diseños optimizados en plataformas como WordPress o Shopify, Workflow, Ionos... personalizando plantillas y funcionalidades para adaptarlas a las necesidades específicas del negocio.</p></li>
                                <li><h3> Diseño Responsive:</h3> <p>Aseguro que cada diseño funcione perfectamente en dispositivos móviles y de escritorio, proporcionando una experiencia fluida independientemente del dispositivo que el usuario elija.</p></li>
                                <li><h3> Pruebas de Usuario y Validación:</h3> <p>Conduzco pruebas de usuario y validación continua para asegurar que las soluciones implementadas respondan a las necesidades reales de los clientes y usuarios finales. </p></li>
                            </ul>
                            <h4> Optimiza tu presencia online con soluciones personalizadas. </h4>
                            
                            <router-link to="/contacta" class="big-btn2" target= "_blank" aria-label="Solicitar servicios y contactar" rel="noopener noreferrer">CONTACTAR</router-link>
                </div>
        </section>

            <section class="black-background">
                <div class="container-casos-ux  flex ">

                    <h2>Casos de estudio de UX/UI </h2>
                    
                    <div class="dark-background flex container-column-sm ">
                        <div class="flex-row">
                            <div class="p-column-sm flex ">
                                <h3>Diseño de App Bancaria  </h3>
                                <p>El proyecto App bancaria se centra en optimizar la accesibilidad a información financiera en un entorno de dark mode. El objetivo principal fue reducir la carga cognitiva de los usuarios, permitiendo que accedan a sus productos financieros, saldos y gastos de forma rápida y clara.</p>
                                <div>
                                    <h4>Estética visual</h4>
                                    <p>La interfaz tiene un enfoque minimalista con un diseño oscuro para reducir la fatiga visual especialmente en sesiones prolongadas, mientras que los colores de acento en naranja resaltan la información más relevante. Este contraste permite una rápida identificación de los elementos interactivos y destaca gráficos o botones clave sin saturar la vista del usuario.</p>
                                </div>
                            </div>
                            <img class="container-img" src="/images/bank.webp" loading="lazy" alt="imagen inicio sesión proyecto tienda" >
                        </div>

                        <div class=" p-column-xs flex p-align padding-xs">
                            <h4>Componentes del diseño </h4>
                            <p>Se emplea una tipografía sans-serif con una jerarquía clara de tamaños para asegurar la legibilidad de los datos financieros y los elementos interactivos en cualquier dispositivo. La estructura está optimizada mediante Auto Layout en Figma y Flexbox en CSS, permitiendo una adaptación fluida a diferentes pantallas. Además, las imágenes y los elementos interactivos cuentan con transiciones suaves, mejorando la experiencia de navegación.</p>
                        </div>
                                                                   
                        <div class="flex-row">
                            <ul>
                                    <h4>Organización Visual y Jerarquía</h4>
                                    <li> <p> Tus productos: La parte superior de la pantalla agrupa de manera clara las cuentas y tarjetas del usuario, presentando la información más importante de manera inmediata: saldo, estado y detalles rápidos de cada producto financiero.</p> </li>
                                    <li> <p> Tu saldo total: El saldo total del usuario se muestra de forma prominente con un gráfico para resaltar la evolución mensual de los fondos. Este enfoque visual ayuda al usuario a interpretar rápidamente los cambios sin necesidad de leer datos numéricos extensos.</p> </li>
                                    <li> <p> Controla tus gastos: Los gastos se dividen en categorías simples como suscripciones y recibos, con colores asignados a cada categoría. Esto permite una fácil comprensión de los gastos mensuales y su seguimiento a lo largo del tiempo.</p> </li>
                                    <li> <p> Navegación simple e intuitiva: El menú inferior fijo proporciona un acceso rápido a las secciones más importantes: productos, transacciones, resumen financiero y contacto. Este diseño facilita la navegación rápida entre las funciones sin saturar la pantalla principal.</p> </li>
                                    <li> <p> Accesibilidad: El diseño sigue principios de accesibilidad, asegurando que los contrastes entre el texto y el fondo cumplen con los estándares AA y AAA de accesibilidad, lo que lo hace más usable para personas con baja visión o sensibilidad a la luz. </p> </li>
                            </ul>
                            <video class= "video-bank"  autoplay loop muted playsinline>
                                <source src="/images/bank.mp4" type="video/mp4" >
                            </video>
                        </div>
                    </div>

                    <div class="dark-background flex container-column-sm">
                                    
                                    <div class="flex-row">
                                        <div class="p-column-sm flex">
                                            <h3>Análisis y propuesta de rediseño Tiendanimal  </h3>
                                            <div>
                                                <p>Realizo compras de productos para animales todos los meses, y esta plataforma que tiene múltiples tiendas físicas, choca con una problemática recurrente relacionada con la intención y el resultado final del diseño y la usabilidad en su tienda online.</p>
                                                <p>Esta falta de optimización en el uso de sus recursos digitales genera una interfaz que se aleja de la de sus competidores directos, quienes logran ofrecer un entorno más eficiente. En mi enfoque, trato de corregir y alinear la experiencia online con la fortaleza de su presencia física.</p>
                                            </div>
                                            <div>
                                                <h4>Conflictos UX/UI actuales</h4>
                                                <p>Al analizar la web original de Tiendanimal, uno de los principales conflictos es el exceso de banners e imágenes de gran tamaño, que sobrecargan visualmente. A esto se suma la complejidad de la barra de navegación superior (topbar), la cual presenta un menú desplegable muy extenso que ocupa demasiado espacio en pantalla, interrumpiendo la experiencia y sobrecargando la carga cognitiva y la toma de decisiones. </p>
                                                <p>Los iconos principales, tienen diferentes tamaños y formatos, y el banner más relevante para el usuario, que contiene la información clave (como detalles de envíos y precios), es parte del cuerpo de la web perdiéndose en el scroll y pasando totalmente desapercibido. </p>
                                            </div>
                                        </div>
                                        <figure class="p-column-sm flex">
                                                <div class="container-img-focus">
                                                    <img class="img-focus" src="/images/menu-tiendanimal.webp"  alt="imagen inicio sesión proyecto tienda">
                                                </div>
                                                <figcaption> Imágenes originales Tiendanimal</figcaption>
                                                <div class="container-img-focus">
                                                    <img class="img-focus" src="/images/tianimal-foto.png"  alt="imagen inicio sesión proyecto tienda">
                                                </div>
                                        </figure>
                                    </div>

                                    <p class="p-align padding-xs">Estos conflictos radican en que, aunque los elementos gráficos de están bien diseñados, su implementación y organización desde una perspectiva UX/UI no es óptima. En términos de navegación, resulta difícil encontrar un equilibrio entre la cantidad de información que se desea mostrar y la fluidez con la que el usuario puede interactuar con la interfaz.</p>
                                    
                                    <div class="flex-row">
                                        <div class=" flex p-column-xs p-short align-left">
                                            <h4>Rediseño Tiendanimal</h4>
                                            <p >Para abordar estos conflictos, se propone un rediseño enfocado en mejorar la usabilidad y la claridad visual, sin comprometer la estética de la marca, reduciendo la carga cognitiva y el ruido visual con espacios negativos, que cumplen una función esencial en la percepción, comprensión y experiencia del usuario.</p>
                                            <ul>
                                                <li> <p> Accesibilidad: El diseño sigue principios de accesibilidad, asegurando que los contrastes entre el texto y el fondo cumplen con los estándares AA y AAA de accesibilidad, lo que lo hace más usable para personas con baja visión o sensibilidad a la luz. </p> </li>
                                            </ul>
                                        </div>
                                        <figure class="container-img-focus">
                                            <img class="img-focus" src="/images/tien-foto.webp" loading="lazy" alt="imagen inicio sesión proyecto tienda">
                                        </figure>
                                    </div>
                                    <div class="container-column-xxs">
                                        <ul>
                                            <li> <p> Reorganización de la navegación: Implementación una barra lateral fija que agrupa las categorías principales. Esta barra fija  se alinea con el principio de memoria espacial, en cómo el cerebro humano procesa, organiza y recuerda información, facilitando la asociación de categorías con su posición constante y ayudando a que el usuario pueda recordar con más facilidad donde encontrar sus productos favoritos, además permite un acceso más controlado y organizado a las categorías.</p> </li>
                                            <li> <p> Optimización del banner de información clave: El banner que contenía los detalles de envíos y precios es reposicionado en la parte superior de la interfaz como una barra fija y dinámica. De esta forma, la información más relevante para los usuarios está siempre visible sin necesidad de desplazarse por la página. Esta barra puede actualizarse de forma dinámica para mostrar ofertas o información adicional.</p> </li>
                                            <li> <p> Jerarquía visual clara: Organización de banners en la landing page, las promociones se organizaron en bloques más pequeños y cohesionados, permitiendo una navegación más fluida sin saturar visualmente al usuario.</p> </li>
                                        </ul>
                                    </div>
                    </div>

                    <div class="dark-background flex container-column-sm">
                        <div class="flex-row">
                        
                            <div class="flex p-column-sm">                                
                                <h3>Diseño de tienda online </h3>
                                <p>En el desarrollo de la experiencia digital, mi enfoque fue crear una plataforma que transmita exclusividad. Este proyecto busca combinar elementos visuales elegantes con una navegación intuitiva. </p>
                                
                                <div>
                                    <h4>Estética visual y Componentes del Diseño</h4>
                                    <p>La paleta de colores es predominantemente oscura, lo cual proporciona un fondo ideal para que las joyas resalten con intensidad. Los colores de acento en tonos metálicos como el dorado refuerzan esta imagen de lujo.</p>
                                </div>
                                <div>
                                    <h4>Usabilidad y Navegación </h4>
                                    <p>La organización de los elementos está pensada para proporcionar una experiencia de navegación fluida y jerárquica, donde cada sección guía al usuario hacia la siguiente sin distracciones. Los elementos visuales están diseñados para reducir la carga cognitiva, asegurando que el usuario pueda encontrar rápidamente lo que busca.</p>
                                </div>
                            </div>
                            <video class= "video"  autoplay loop muted playsinline>
                                <source src="/images/video-omega.mp4" type="video/mp4" >                       
                            </video>
                        </div>                                
                        <div>
                                    <h4> Página de Inicio</h4>
                                    <ul>                                
                                        <li> La disposición en el encabezado busca simplificar el acceso a las categorías sin sobrecargar visualmente, favoreciendo una experiencia de navegación clara y directa, organizada en dos secciones principales y facilitando que los usuarios accedan directamente a la sección que les interesan. </li>
                                        <li> Se muestra una selección de productos icónicos de Omega Jewelry en tarjetas individuales, cada una de ellas destacando el nombre de la joya. La disposición de estos elementos ayuda al usuario a explorar las opciones de forma visual y rápida. </li>
                                        <li> Especial Regalos: Esta sección está pensada para captar el interés de usuarios que buscan ideas de regalo, destacando productos más accesibles y económicos. </li>
                                        <li> Las fotografías de producto con modelos en uso, ayuda a los usuarios a visualizar el look final de las joyas, transmitiendo aspiración. </li>
                                        <li> Se dedica un espacio destacado a "Gold Collection", una de las líneas premium de la marca. La sección cuenta con un diseño que resalta el color dorado y la exclusividad de esta colección, acompañada por un botón de llamada a la acción que invita a explorar. </li>
                                        <li> Productos Destacados dinámicos: Imagenes en alta resolución y el diseño centrado permitiendo que el usuario lo observe en detalle. </li>
                                    </ul>                           
                        </div>
                        <div class="flex-row">
                                <div class="container-img-focus">
                                    <img class="img-focus" src="/images/omega.webp" loading="lazy" alt="imagen inicio sesión proyecto tienda" style="border:2px solid #373737"> 
                                </div>
                                <div>   
                                    <h4>Formulario de Inicio de Sesión </h4>                               
                                    <ul>                                    
                                        <li><p>Diseño Minimalista: El formulario es visualmente claro y funcional.</p></li>
                                        <li><p>Accesibilidad y Funcionalidad: Se incorpora un botón de "He olvidado mi contraseña" que despliega información útil sobre los requisitos de contraseña al hacer hover (por ejemplo, al menos una mayúscula). Este detalle mejora la transparencia ayudando además al usuario a recordar su contraseña y evitar pasos extra.</p></li>
                                        <li><p>Integración de Redes Sociales: Los botones de acceso con Google y Facebook integrados facilita a los usuarios una opción sencilla para iniciar sesión sin complicaciones adicionales.</p></li>
                                    </ul>                    
                                </div>
                        </div>             
                    </div>

                </div>
        </section>
    `,
}
