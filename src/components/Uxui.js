import '../styles/uxui.css';

export default {
  name: 'Uxui',
  template: `
    

        <section class="header-ux">
            
            <h1> Diseño web UX/UI </h1>

                <div class="container-row">
                        <img class="img-pc"src="../img/pexels-photo-by-fauxels.png" alt="foto-pc-slogan" width="25%">
                        <div class="container-importancia">
                            <h2>La importancia del UX</h2>
                            <div class="p-column">
                                <p>La experiencia del usuario es un factor decisivo que puede determinar el éxito o el fracaso de una tienda online.</p>
                                <p> Un buen diseño UX tiene un impacto directo en el crecimiento de las ventas y la eficiencia operativa, incrementando sus ingresos al mismo tiempo que reduce costes y necesidad de personal.</p>
                            </div>
                            <h3>El equilibrio perfecto entre eficiencia y escalabilidad</h3>
                        </div>
                        
                </div>

                <div class="container-motivos-ux">
                    <div>
                        <h2>¿Cómo ayuda el UX a crecer las ventas? </h2>
                        <div class= "text-left">
                            <div>
                                <h4>Mejora la conversión:</h4> <p> Simplifica procesos, reduciendo fricciones que pueden llevar a la pérdida de clientes. Con una navegación intuitiva, los usuarios tienen menos probabilidades de abandonar sus carritos y más probabilidades de completar la compra. </p>
                            </div>
                            <div>
                                <h4>Aumenta la retención de clientes:</h4> <p>Una experiencia positiva hace que los usuarios regresen. La retención de clientes es clave para el crecimiento sostenible de las ventas, y es mucho más económico mantener a un cliente que adquirir uno nuevo.</p>
                            </div>
                            <div>
                                <h4>Optimiza la personalización:</h4> <p>Aprovechar el análisis de datos y ofrecer una experiencia de compra personalizada para cada cliente, aumenta el ticket promedio por cliente sin necesidad de ampliar tu catálogo de productos. </p>
                            </div>
                    </div>
                    </div>

                    <div>                    
                        <h2>Reducción de costes a través de UX: </h2>
                        <div class= "text-left">
                            <div>
                                <h4>Optimización del flujo de trabajo interno:</h4><p> Interfaces administrativas claras y procesos automatizados de gestión de inventarios, pedidos y envíos permiten que el personal trabaje de manera más eficiente, evitando duplicación de tareas y posibles errores humanos.</p>
                            </div>
                            <div>
                                <h4>Automatización de procesos:</h4><p> Un diseño UX eficiente puede reducir la dependencia de personal de atención al cliente al ofrecer herramientas donde los clientes resuelven sus problemas facilmente.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section>
                <div class="dark-back">
                    <div class="container-servicios-ux">
                        <h2> Servicios de Diseño UX/UI </h2>
                            <ul>
                                <li><h4>Auditorías UX/UI y Optimización de la Conversión (CRO) </h4>   <p>Auditorías completas de sitios web o plataformas CMS para detectar áreas de mejora en la experiencia de usuario y la interfaz visual. Optimizo la navegación, diseño y funcionalidad para aumentar la conversión y reducir la tasa de abandono.</p></li>
                                <li><h4> Diseño de Interfaces Personalizadas </h4><p>Diseño interfaces visuales atractivas y funcionales para mejorar la interacción del usuario. Obtén tus prototipos interactivos con flujos de navegación que se adaptan a las necesidades de cada empresa, optimizando tanto la estética como la usabilidad. Estos prototipos pueden llevarse a desarrollo o compartirlo con potenciales inversores.</p></li>
                                <li><h4> Integración y Personalización en CMS:</h4> <p> Implemento diseños optimizados en plataformas como WordPress o Shopify, Workflow, Ionos... personalizando plantillas y funcionalidades para adaptarlas a las necesidades específicas del negocio.</p></li>
                                <li><h4> Diseño Responsive:</h4> <p>Aseguro que cada diseño funcione perfectamente en dispositivos móviles y de escritorio, proporcionando una experiencia fluida independientemente del dispositivo que el usuario elija.</p></li>
                                <li><h4> Pruebas de Usuario y Validación:</h4> <p>Conduzco pruebas de usuario y validación continua para asegurar que las soluciones implementadas respondan a las necesidades reales de los clientes y usuarios finales. </p></li>
                            </ul>
                            <div class="p-column">
                                <h4> Optimiza tu presencia online con soluciones personalizadas. </h4>
                                                        
                            </div>
                            <router-link to="/contacta" class="btn1" target= "_blank"rel="noopener noreferrer">CONTACTAR</router-link>
                    </div>
                </div>
            </section>

            <section>
            <div class="full-width-div">
                <div class="container-casos-ux">

                    <h2>Casos de estudio de UX/UI </h2>

                    <div class="black-background">
                        <div class= "container-row" >
                            <div class="column-left-16">
                                <h3>Diseño de tienda online </h3>
                                <p>En el desarrollo de la experiencia digital  Omega, mi enfoque fue crear una plataforma que transmita la exclusividad y sofisticación. Este proyecto de diseño UX/UI busca combinar elementos visuales elegantes con una navegación intuitiva. </p>
                                <div class="p-column">
                                    <h4>Estética visual y Componentes del Diseño</h4>
                                    <p>La paleta de colores es predominantemente oscura, lo cual proporciona un fondo ideal para que las joyas resalten con intensidad. Los colores de acento en tonos metálicos como el dorado refuerzan esta imagen de lujo.</p>
                                </div>
                                <div class="p-column">
                                    <h4>Usabilidad y Navegación </h4>
                                    <p>La organización de los elementos en la página de inicio está pensada para proporcionar una experiencia de navegación fluida y jerárquica, donde cada sección guía al usuario hacia la siguiente sin distracciones. Los elementos visuales están diseñados para reducir la carga cognitiva, asegurando que el usuario pueda encontrar rápidamente lo que busca.</p>
                                </div>
                            </div>
                            <div>                      
                                <video class= "video"  autoplay loop muted playsinline>
                                <source src="../img/video-omega.mp4" type="video/mp4" >                       
                                </video>
                            </div>
                        </div>
                        <div class="container-column">
                            <h4> Página de Inicio </h4>
                            <ul>                                
                                <li> <p> La disposición en el encabezado busca simplificar el acceso a las categorías sin sobrecargar visualmente, favoreciendo una experiencia de navegación clara y directa, organizada en dos secciones principales: Mujer y Hombre, facilitando que los usuarios accedan directamente a la sección que les interesan.</p> </li>
                                <li> <p> Se muestra una selección de productos icónicos de Omega Jewelry en tarjetas individuales, cada una de ellas destacando el nombre de la joya. La disposición de estos elementos ayuda al usuario a explorar las opciones de forma visual y rápida.</p> </li>
                                <li> <p> Especial Regalos: Esta sección está pensada para captar el interés de usuarios que buscan ideas de regalo, destacando joyas de diferentes estilos. </p> </li>
                                <li> <p> Las fotografías de producto con modelos en uso, ayuda a los usuarios a visualizar el look final de las joyas, transmitiendo autenticidad y aspiración</p> </li>
                                <li> <p> Se dedica un espacio destacado a "Gold Collection", una de las líneas premium de la marca. La sección cuenta con una imagen llamativa que resalta el color dorado y la exclusividad de esta colección, acompañada por un botón de llamada a la acción que invita a explorar. </p> </li>
                                <li> <p> Productos Destacados dinámicos: Imagenes en alta resolución y el diseño centrado permitiendo que el usuario lo observe en detalle. </p> </li>
                            </ul>
                        </div>
                        <div class= "container-row" >
                            <div class="container-img-focus">
                                <img class="img-focus" src="../img/omega.svg" loading="lazy" alt="imagen inicio sesión proyecto tienda" style="border:2px solid #373737"> 
                            </div>
                            <div class="column-left-16">
                            <h4>Formulario de Inicio de Sesión </h4>
                                <div>                                    
                                    <ul>                                    
                                    <li><p>Diseño Minimalista: El formulario es visualmente claro y funcional, con campos de entrada que están distribuidos para evitar sobrecargar la vista del usuario. La simetría del diseño refuerza el orden y facilita la navegación intuitiva, guiando al usuario hacia los botones principales de interacción.</p></li>
                                    <li><p>Accesibilidad y Funcionalidad: Se incorpora un botón de "He olvidado mi contraseña", que proporciona una opción rápida de recuperación de la cuenta, y despliega información útil sobre los requisitos de contraseña al hacer hover (por ejemplo, al menos una mayúscula). Este detalle mejora la transparencia y la seguridad del sistema, ayudando además al usuario a recordar su contraseña y evitar pasos extra.</p></li>
                                    <li><p>Integración de Redes Sociales: Los botones de acceso con Google y Facebook están integrados de manera natural, ofreciendo a los usuarios una opción sencilla para iniciar sesión sin complicaciones adicionales. Estas opciones están estratégicamente colocadas, respetando la estética minimalista sin sobrecargar la vista del usuario.</p></li>
                                    </ul>
                                </div>                                
                            </div>
                                                 
                            
                        </div>                        
                    </div>

                    <div class="black-background">
                        <div class= "container-row" >
                            <div class="column-left-16">
                                <h3>Diseño de App Bancaria  </h3>
                                <p>El proyecto App bancaria se centra en optimizar la accesibilidad a información financiera clave en un entorno de dark mode. El objetivo principal fue reducir la carga cognitiva de los usuarios, permitiendo que accedan a sus productos financieros, saldos y gastos de forma rápida y clara.</p>
                                <div class="p-column">
                                    <h4>Estética visual</h4>
                                    <p>La interfaz adopta un enfoque minimalista con un diseño oscuro que reduce la fatiga visual especialmente en sesiones prolongadas, mientras que los colores de acento en naranja y pasteles/neón del darkmode resaltan la información más relevante. Este contraste permite una rápida identificación de los elementos interactivos y destaca gráficos y botones clave sin saturar la vista del usuario.</p>
                                </div>
                                <div >
                                    <h4>Componentes clave del diseño </h4>
                                    <p>Se utiliza una tipografía sans-serif moderna y limpia que facilita la legibilidad, con tamaños definidos para cada sección, garantizando que tanto los datos financieros como los elementos interactivos sean fáciles de leer en cualquier dispositivo.</p>
                                </div>
                            </div>
                            <div class="container-img-focus">
                                <img class="img-focus" src="../img/bank.svg" loading="lazy" alt="imagen inicio sesión proyecto tienda"> 
                            </div>                                
                        </div>

                        <div class="container-row">
                                    <div>                      
                                        <video class= "video-bank"  autoplay loop muted playsinline>
                                            <source src="../img/bank.mp4" type="video/mp4" >                       
                                        </video>
                                    </div>
                                    <div class="p-column">
                                        <h4>Organización Visual y Jerarquía</h4> 
                                        <ul>
                                                                        
                                            <li> <p> Tus productos: La parte superior de la pantalla agrupa de manera clara las cuentas y tarjetas del usuario, presentando la información más importante de manera inmediata: saldo, estado y detalles rápidos de cada producto financiero.</p> </li>
                                            <li> <p> Tu saldo total: El saldo total del usuario se muestra de forma prominente con un gráfico para resaltar la evolución mensual de los fondos. Este enfoque visual ayuda al usuario a interpretar rápidamente los cambios sin necesidad de leer datos numéricos extensos.</p> </li>
                                            <li> <p> Controla tus gastos: Los gastos se dividen en categorías simples como suscripciones y recibos, con colores asignados a cada categoría. Esto permite una fácil comprensión de los gastos mensuales y su seguimiento a lo largo del tiempo.</p> </li>
                                            <li> <p> Navegación simple e intuitiva: El menú inferior fijo proporciona un acceso rápido a las secciones más importantes: productos, transacciones, resumen financiero y contacto. Este diseño facilita la navegación rápida entre las funciones sin saturar la pantalla principal.</p> </li>
                                            <li> <p> Accesibilidad: El diseño sigue principios de accesibilidad, asegurando que los contrastes entre el texto y el fondo cumplen con los estándares AA y AAA de accesibilidad, lo que lo hace más usable para personas con baja visión o sensibilidad a la luz. </p> </li>
                                    
                                        </ul>
                                    </div>                       
                        </div>
                    </div>
                    <div class="black-background">
                            <div class="container-column-pdd">
                                <h3>Análisis y propuesta de rediseño Tiendanimal  </h3>
                            </div>

                            <div class= "container-row" >
                                <div class="p-column">
                                    
                                        <h4>Analisis y conflictos UX/UI:</h4>                                                                          
                                        <p>Como usuaria de esta plataforma y otras similares, me encuentro con una problemática recurrente relacionada con la intención y el resultado final del diseño y la usabilidad. </p>
                                        <p>Al analizar la web original de Tiendanimal, uno de los principales desafíos que identifiqué fue el exceso de banners e imágenes de gran tamaño, que sobrecargan visualmente al usuario. A esto se suma la complejidad de la barra de navegación superior (topbar), la cual presenta un menú desplegable muy extenso que ocupa demasiado espacio en pantalla, interrumpiendo la experiencia de navegación y sobrecargando la carga cognitiva y la toma de decisiones. </p>
                                        <p>Los iconos principales, tienen diferentes tamaños y formatos, y el banner más relevante para el usuario, que contiene la información clave (como detalles de envíos y precios), es parte del cuerpo de la web perdiéndose en el scroll y pasando totalmente desapercibido. </p>                                        
                                </div>
                                
                                <div class="container-img-focus">
                                    <img class="img-focus" src="../img/menu-tien.png" loading="lazy" alt="imagen inicio sesión proyecto tienda">
                                    
                                </div>                            
                            </div>
                            <div class= "container-row" >
                                    <div class="container-img-focus">
                                        <img class="img-focus" src="../img/tianimal-foto.png" loading="lazy" alt="imagen inicio sesión proyecto tienda">                                        
                                    </div>
                                    <p class="short"><strong>Estos conflictos radican en que, aunque los elementos gráficos de los banners están bien diseñados, su implementación y organización desde una perspectiva UX/UI no es óptima. En términos de navegación, resulta difícil encontrar un equilibrio entre la cantidad de información que se desea mostrar y la fluidez con la que el usuario puede interactuar con la interfaz.</strong></p>                              
                            </div>

                            <div class="container-column-pdd">
                                <h4>Rediseño </h4>
                                <p>Para abordar estos conflictos, se propone un rediseño enfocado en mejorar la usabilidad y la claridad visual, sin comprometer la estética gráfica.</p> 
                                <ul>                                                                            
                                                <li> <p> Reorganización de la navegación: Implementación una barra lateral fija que agrupa las categorías principales. Esta barra fija  se alinea con el principio de memoria espacial, en cómo el cerebro humano procesa, organiza y recuerda información, facilitando la asociación de categorías con su posición constante y ayudando a que el usuario pueda recordar con más facilidad donde encontrar sus productos favoritos, además permite un acceso más controlado y organizado a las categorías.</p> </li>
                                                <li> <p> Optimización del banner de información clave: El banner que contenía los detalles de envíos y precios es reposicionado en la parte superior de la interfaz como una barra fija y dinámica. De esta forma, la información más relevante para los usuarios está siempre visible sin necesidad de desplazarse por la página. Esta barra puede actualizarse de forma dinámica para mostrar ofertas o información adicional.</p> </li>
                                </ul>
                            </div>

                            <div class="container-row">
                                    <div class="p-column">
                                        
                                            <ul>
                                                <li> <p> Reducción de la carga cognitiva: se ha reducido el ruido visual con espacios negativos, que cumplen una función esencial en la percepción, comprensión y experiencia del usuario.</p> </li>
                                                <li> <p> Jerarquía visual clara: Organización de banners en la landing page, las promociones se organizaron en bloques más pequeños y cohesionados, permitiendo una navegación más fluida sin saturar visualmente al usuario.</p> </li>
                                                <li> <p> Accesibilidad: El diseño sigue principios de accesibilidad, asegurando que los contrastes entre el texto y el fondo cumplen con los estándares AA y AAA de accesibilidad, lo que lo hace más usable para personas con baja visión o sensibilidad a la luz. </p> </li>
                                            </ul>
                                            <p>Este rediseño manteniene la estética visual de la marca mejorando su funcionalidad. Los usuarios pueden encontrar la información relevante en puntos estratégicos de la interfaz.</p>    
                                        
                                    </div>
                                    <div class="container-img-focus">
                                        <img class="img-focus" src="../img/tien-foto.svg" loading="lazy" alt="imagen inicio sesión proyecto tienda"> 
                                    </div>               
                            </div>     
                    </div>
                    
                </div>
            </div>
            
        </section>
    `,
}
