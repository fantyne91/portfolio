import '../styles/programming.css'

export default {
  name: 'Programming',
  template: /*html*/ `
   
        <section class="header-programming p-align">
                <h1> Desarrollo web y Personalización de Plataformas CMS.</h1>
                <div class="flex-row">
                    <img class="img-pc" src="/images/seo1.webp" alt="foto seo" >
                    <h2 class="p-med padding-sm"> Contar con una web optimizada no solo mejora la experiencia del usuario, sino que también impacta en el SEO, lo que ayuda a posicionar tu marca y fidelizar clientes.</h2>
                </div>
        </section>

        <section class="beneficios p-align">
                
                        <h2>Beneficios de contratar un desarrollador para tu web o CMS</h2>
                        <p>Si bien los CMS como WordPress o Shopify ofrecen soluciones rápidas, sus limitaciones pueden afectar la escalabilidad y personalización de tu proyecto.</p>
                        <p> Al tener un programador, obtienes:</p>
                        
                        <ul class=" full-width">
                                <li><h3>Personalización avanzada:</h3> <p>Puedes realizar modificaciones avanzadas y ajustar funcionalidades que no están disponibles de manera predeterminada en el CMS.</p></li>
                                <li><h3> Mejor rendimiento:</h3><p>Un desarrollador puede optimizar la velocidad y eficiencia de tu web, mejorando la experiencia del usuario y el SEO, vitales para cualquier negocio.</p></li>
                                <li><h3>  Integraciones personalizadas:</h3> <p> Conectar tu CMS a sistemas externos como CRMs, pasarelas de pago o servicios específicos de tu empresa.</p></li>
                                <li><h3> Mayor seguridad:</h3> <p>Implementar medidas de seguridad específicas para proteger tu sitio y los datos de tus usuarios.</p></li>
                                <li><h3> Escalabilidad: </h3> <p>Adaptar el sitio a medida que tu empresa crece o cambia sus necesidades. </p></li>
                        </ul>
        </section>
            <section class="services-programming">
                            <h2>Servicios de desarrollo web y CMS</h2>
                        
                            <ul>
                                <li><h3>Desarrollo web personalizado:</h3> <p>Construyo sitios web desde cero utilizando tecnologías como PHP, JavaScript y Vue.js, garantizando soluciones a medida que se ajustan completamente a tus necesidades. Ya sea una web empresarial, un e-commerce o una plataforma interactiva, desarrollo tanto el Front-end (interfaz y experiencia del usuario) como el Back-end (funcionalidad y base de datos).</p></li>
                                <li><h3>Personalización de CMS:</h3><p> Si usas WordPress, Shopify u otro CMS, puedo realizar modificaciones avanzadas para que tu sitio no se limite a las funciones estándar. Desde agregar integraciones personalizadas y modificar la apariencia hasta optimizar la gestión de contenido, adapto la plataforma para que cumpla exactamente con lo que necesitas.</p></li>
                                <!--<li><h4>Integración de sistemas externos:</h4> <p> Conexión de tu web o tienda online con CRMs, pasarelas de pago, y otros servicios.</p></li>-->
                                <li><h3>Optimización de rendimiento:</h3> <p>Un sitio web rápido y optimizado es clave para mejorar la experiencia del usuario y el posicionamiento en buscadores (SEO). Me encargo de:</p>
                                    
                                        <p>✔️ Reducir tiempos de carga mediante optimización de código, imágenes y recursos.</p>
                                        <p>✔️ Mejorar la usabilidad, asegurando que la navegación sea intuitiva y accesible.</p>
                                        <p>✔️ Optimización SEO, para que tu web aparezca mejor posicionada en Google.</p> </li>
                                <li><h3>Mantenimiento y soporte:</h3> <p> Actualizaciones, correcciones y mejoras continuas para garantizar que tu web funcione sin problemas.</p></li>
                            </ul>
                            
                                <router-link to="/contacta" class="big-btn1" target= "_blank" rel="noopener noreferrer" aria-label="Solicitar servicios y contactar">CONTACTAR</router-link>
                            
            </section>

            <section class="section-proyect">
                <div class="flex-row">
                            
                    <div class="container-proyect container-column-sm flex">
                        <div class="p-column-sm flex">
                            <h2>Mi primer proyecto personal</h2>
                            <p >Mi primer proyecto web surgió de una experiencia personal:<span> las acogidas temporales de animales en situación de vulnerabilidad.</span> A lo largo de los años, he dado hogar a perros con historias complejas, lo que me enseñó la importancia de un sistema eficiente para gestionar acogidas y adopciones</p>
                            <p >Este proyecto en desarrollo tiene como objetivo optimizar y agilizar el proceso de acogida y adopción de animales. La plataforma facilita la conexión entre rescatistas, familias de acogida y adoptantes, ayudando a evitar estafas en propias de redes sociales, mediante verificación de perfiles y una experiencia de usuario intuitiva y accesible.</p>
                            <h3> Contexto y Necesidad </h3>
                            <p>En el mundo del rescate animal, muchas organizaciones y particulares enfrentan dificultades para gestionar acogidas temporales, especialmente en casos de animales con necesidades especiales. He vivido de primera mano múltiples situaciones con final feliz como la de:</p>
                            <ul>
                                <li><p>Peko, un perro con severos problemas de socialización.</p></li>
                                <li><p>Boni, una podenca con miedos arraigados tras ser utilizada para cría.</p></li>
                                <li><p>Toby, que sufrió malos tratos con una fuerte desconfianza hacia los humanos.</p></li>
                                <li><p>Duke, que fue utilizado como "sparring".</p></li>
                                <li><p>Gorda, una mastín que encontré vagando en Andalucía.</p></li>
                                <li><p>Bali, mi perra,  encontrada muy enferma durante un viaje a la isla de Bali.</p></li>
                            </ul>
                        </div>
                        <div class="container-img-focus">
                            <img class="img-focus" src="/images/foto-dogfinder.webp" loading="lazy" alt="img app animal" width="500px">
                        </div>
                    </div>
                    <div class="container-bubble container-column-sm flex">
                        <p> Algunos de mis pequeños acogidos </p>
                        <img class="bubble" src="/images/duke.webp" loading="lazy" alt=" acogido duke">
                        <img class="bubble" src="/images/luna.webp" loading="lazy" alt=" acogida luna">
                        <img class="bubble" src="/images/baby.webp" loading="lazy" alt=" acogido baby">
                        <img class="bubble" src="/images/boni.webp" loading="lazy" alt=" acogida boni">
                        <img class="bubble" src="/images/bebes.webp" loading="lazy" alt="acogido duke y boni">

                        <img class="bubble" src="/images/bebeses.webp" loading="lazy" alt="  acogidos bebes">
                        <img class="bubble" src="/images/toby.webp" loading="lazy" alt=" acogido toby">
                        <img class="bubble" src="/images/bali.webp" loading="lazy" alt=" acogida bali">
                        <img class="bubble" src="/images/bruce.webp" loading="lazy" alt=" acogido bruce">
                        <img class="bubble" src="/images/gorda.webp" loading="lazy" alt=" acogida gorda">
                    </div>
                </div>
                   <div class="flex-row padding-sm">
                        <div class="p-column-sm flex">
                            <h3>Arquitectura y Tecnologías Utilizadas</h3>
                            <ul>
                                <li><h4>Base de Datos (SQL - MySQL)</h4>
                                    <p>Estructuración de datos para gestionar perfiles de usuarios, asociaciones, animales y solicitudes de adopción.</p>
                                    <p>Relaciones y consultas bien definidas y optimizadas entre entidades como usuarios, animales y estados de adopción</p>
                                </li>
                                <li><h4>Lenguaje de Programación (PHP y JavaScript)</h4>
                                    <p>PHP (Back-end): Manejo de lógica de negocio, validación de formularios, gestión de usuarios y procesamiento de datos en el servidor.</p>
                                    <p>JavaScript (Front-end): Mejora de la experiencia del usuario con interactividad en tiempo real, validaciones dinámicas y actualizaciones de contenido sin recargar la página.</p>
                                    <p></p>
                                </li>
                                <li><h4>Gestión de Perfiles</h4>
                                    <p>Perfiles y funcionalidades específicas para Asociaciones y Usuarios, publicación y gestión de fichas de animales disponibles para adopción y sistema de contacto con asociaciones</p>
                                </li>
                                <li><h4>Funcionalidades Clave</h4>
                                    <p>Panel de administración para asociaciones y gestores, con herramientas para actualizar información sobre animales y adopciones.</p>
                                    <p>Sistema de búsqueda y filtros para que los usuarios encuentren fácilmente animales según ubicación, tamaño, edad y necesidades especiales.</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="p-column-sm flex">                                
                                <img class="img-focus" src="/images/cod-error.webp" loading="lazy" alt="img errores" width="500px">
                                <p>Casos de prueba</p>
                        </div>
                        
                    </div>
                    <h4>Diagrama de Flujo: </h4>
                    <img class="img-focus" src="/images/happypath.webp" loading="lazy" alt="img happypath" >
                             <!--   
                                
                                <div class="container-img-focus">
                                <img class="img-focus" src="/images/cod3.webp" loading="lazy" alt="img codigo php" width="500px">
                            </div>
                            <div class="container-img-focus">
                                <img class="img-focus" src="/images/cod2.webp" loading="lazy" alt="img codigo php" width="100">-->
                   
            </section>
    `,
}
