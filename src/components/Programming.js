import '../styles/programming.css'

export default {
  name: 'Programming',
  template: ` 
   
        <section class="header-programming">
            
                <h1> Desarrollo web y Personalización de Plataformas CMS.</h1>

                <div class="container-row" >
                    <h2 class="p-short">Contar con una web optimizada no solo mejora la experiencia del usuario, sino que también ayuda a posicionar tu marca y fidelizar clientes.</h2>
                    <img class="img-pc"src="../img/seo.png" alt="foto seo slogan" width="25%">
                </div>
                
                    <div class="beneficios">
                        <h2>Beneficios de contratar un desarrollador para tu web o CMS</h2>
                        <p>Aunque los CMS como WordPress o Shopify ofrecen soluciones predefinidas, también tienen limitaciones, un desarrollador te permite personalizar y optimizar completamente tu sitio.</p>    
                        <p> Al tener un programador, obtienes:</p>
                            <ul>
                                <li><h3>Personalización avanzada:</h3> <p>Puedes ajustar funcionalidades que no están disponibles de manera predeterminada en el CMS.</p></li>
                                <li><h3> Mejor rendimiento:</h3><p>Un desarrollador puede optimizar la velocidad y eficiencia de tu web, mejorando la experiencia del usuario y el SEO.</p></li>
                                <li><h3>  Integraciones personalizadas:</h3> <p> Conectar tu CMS a sistemas externos como CRMs, pasarelas de pago o servicios específicos de tu empresa.</p></li>
                                <li><h3> Mayor seguridad:</h3> <p>Implementar medidas de seguridad específicas para proteger tu sitio y los datos de tus usuarios.</p></li>
                                <li><h3> Escalabilidad: </h3> <p>Adaptar el sitio a medida que tu empresa crece o cambia sus necesidades. </p></li>
                            </ul>
                    </div>                    
                
                <div class="container-column">
                        <div class="p-column">
                            <h2>Servicios de desarrollo web y CMS</h2>
                        
                            <ul class="p-column">
                                <li><h4>Desarrollo web personalizado:</h4> <p> Creación de sitios desde cero, con PHP, JavaScript o Vue, adaptados a tus necesidades, Front-end y Back-end</p></li>
                                <li><h4>Personalización de CMS:</h4><p> Modificaciones avanzadas en WordPress, Shopify o cualquier CMS para integrar funciones específicas.</p></li>
                                <!--<li><h4>Integración de sistemas externos:</h4> <p> Conexión de tu web o tienda online con CRMs, pasarelas de pago, y otros servicios.</p></li>-->
                                <li><h4>Optimización de rendimiento:</h4> <p>Mejora de velocidad, usabilidad y SEO en tu sitio.</p></li>
                                <li><h4>Mantenimiento y soporte:</h4> <p> Actualizaciones, correcciones y mejoras continuas para garantizar que tu web funcione sin problemas.</p></li>
                            </ul>
                            <div class="container-btn">
                                <router-link to="/contacta" class="btn2" target= "_blank" rel="noopener noreferrer">CONTACTAR</router-link>
                            </div>
                        </div>
                </div>
            </section>

            <section class="section-proyect">
                <div class="container-proyect" >
                    <div class="">
                        <div class="p-column">
                            <h2>Mi primer proyecto personal</h2>
                            <p >Mi primer proyecto web nace de una experiencia personal: las acogidas y adopciones de animales. Durante años, he acogido perros con historias complicadas, y fue esa realidad la que impulsó mi primer diseño web.</p>
                            <p >Peko llegó con problemas graves para sociabilizar, Boni con miedos arraigados después de ser usada para criar, Toby con una desconfianza total hacia los humanos, y Duke, que era utilizado como "sparring", viviendo en condiciones que lo marcaron. Después vinieron los rescates de un mastín en Andalucía que encontró un hogar, y Bali, mi perra, a quien rescaté de la isla de Bali durante un viaje.</p>
                            <p >Este proyecto es para que los casos como estos no se queden en el olvido. Mi objetivo es que cada animal tenga una segunda oportunidad, por eso la web está diseñada para facilitar el proceso de adopción de forma rápida, efectiva y empática. El diseño UX/UI refleja esa urgencia y la necesidad de actuar, mientras que la programación asegura que el proceso de adopción sea tan sencillo y accesible como debe ser.</p>
                        </div>
                        <div class="container-img-focus">
                            <img class="img-focus" src="../img/foto-dogfinder.png" loading="lazy" alt="img app animal" width="500px">
                        </div>
                    </div>
                    <div>
                        <div class="p-column">
                            <h2>Sobre el proyecto</h2>
                            <p >En la parte técnica, trabajé con JavaScript para crear un frontend limpio, dinámico y adaptable, asegurándome de que la web se vea y funcione genial tanto en móvil como en escritorio. Para el backend, usé PHP y una base de datos en SQL, donde se gestiona toda la info de los animales: sus historias, fotos, estado de salud y más. También añadí filtros y búsquedas fáciles para que encontrar a tu futuro compañero sea súper rápido.</p>
                            <p >Quise que todo fuera sencillo, directo y sin complicaciones. Desde los formularios hasta los pasos para contactar a las asociaciones, todo está pensado para que adoptar sea lo más fácil posible. Este proyecto no solo es un reto técnico, es mi manera de aportar algo a una causa que me mueve: darles a estos animales la segunda oportunidad que merecen.</p>
                        </div>
                        <div class="container-img-focus">
                            <img class="img-focus" src="../img/animal-txt.png" loading="lazy" alt="img codigo php" width="500px">
                        </div>
                    </div>                 
                </div>
                <img class="img-proyect-pg" src="../img/happypath.png" loading="lazy" alt="img codigo php" width="100">
            </section>
    `,
}
