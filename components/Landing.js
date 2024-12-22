//creacion páginas
export const Landing = {
  template: ` 
  <link rel="stylesheet" href="../styles/landing.css">
  <link rel="stylesheet" href="../styles/forms.css">
        <section class="landing">

            <div class= "intro-container">
                    <img class= "maria" src="../img/maria3.png" alt="imagen presentación">
                    <p class= "texto-entrada"> SOLUCIONES CREATIVAS Y TECNOLÓGICAS PARA EMPRESAS Y VIDEOJUEGOS</p>
            </div>

            <div class= "list-container">
                            
                            <div><strong>Servicios</strong></div>
                            <h1>Experiencia de usuario, desarrollo web <br>y Unreal Engine</h1>
                           

                            <div class= "group-list">
                                
                                    <div class= "list">

                                        <div class= "list-ux-title">
                                            <h2>DISEÑO WEB UX/UI</h2>
                                            <h3> Auditorías y Diseños</h3>
                                        </div>
                                        
                                        <div class= "list-text"> 
                                            <h4 style="text-align: center; font-weight: bold"> Optimizar la experiencia de tus usuarios  aumenta las conversiones y ventas, reduciendo costos, puedo ayudarte con: </h4>
                                            <ul type= "circle">
                                                <li> 
                                                    <h5> <strong>Diseño de página web, CMS ( Wordpress, shoppify) o Ionos</strong> con foco en el éxito de tu empresa y <strong> posicionamiento  SEO</strong>. Obtendrás un diseño interactivo para mostrar a desarrolladores o inversores.</h5>
                                                </li>
                                                <li> 
                                                    <h5><strong>Auditorías o análisis heurístico </strong> de tu sitio web y un posterior rediseño ajustándome a tus necesidades. </h5>
                                                </li>                                            
                                            </ul>                                                                                    
                                        </div>
                                                                         
                                    </div>
                
                                    <div class= "list">

                                        <div class= "list-programming-title">
                                            <h2>DESARROLLO WEB </h2>
                                            <h3>Interfaz y bases de datos</h3>
                                        </div>
                                        
                                        <div class= "list-text">
                                            <h4 style="text-align: center; font-weight: bold">Trabajar con JavaScript, Vue, PHP y CSS me permite crear soluciones completas y personalizadas incluyendo CMS: </h4>
                                            <ul type= "circle">
                                                <li> 
                                                    <h5> <strong>Front-end: </strong> Creación de interfaces visuales atractivas e intuitivas que los usuarios ven e interactúan, como botones, menús y el diseño general.</h5>
                                                </li>
                                                <li> 
                                                    <h5> <strong> Back-end: </strong>Trabajo en la estructura que hace que el sitio web funcione, incluyendo bases de datos y servidores. Esto permite que las tiendas online gestionen información crítica, como datos de  usuarios y productos.</h5>
                                                </li>                                            
                                            </ul>                                                                                    
                                        </div>

                                    </div>
                                

                                
                                    <div class= "list">

                                        <div class= "list-games-title">
                                            <h2>DISEÑO DE VIDEOJUEGOS</h2>
                                            <h3>Auditorías, GDD, pitch’s</h3>
                                        </div>
                                        
                                        <div class= "list-text"> 
                                            <h4 style="text-align: center; font-weight: bold"> Optimizar la experiencia de tus usuarios  aumenta las conversiones y ventas, reduciendo costos: </h4>
                                            <ul type= "circle">
                                                <li> 
                                                    <h5> Si quieres crear una web, puedo diseñarla enfocándome en el éxito de tu empresa y <strong> posicionamiento  SEO.</strong> Obtendrás un diseño interactivo para mostrar a desarrolladores o inversores, también puedo diseñar tu Wordpress, ionos, shoppify... </h5>
                                                </li>
                                                <li> 
                                                    <h5>Puedo realizar una <strong>auditoría o análisis heurístico </strong> de tu sitio web y un posterior rediseño ajustándome a tus necesidades. </h5>
                                                </li>                                            
                                            </ul>                                                                                    
                                        </div>

                                    </div>
                    
                                    <div class= "list">

                                        <div class= "list-unreal-title">
                                            <h2>UNREAL ENGINE</h2>
                                            <h3>Cinemáticas y videojuegos</h3>
                                        </div>
                                        
                                        <div class= "list-text"> 
                                            <h4 style="text-align: center; font-weight: bold"> Optimizar la experiencia de tus usuarios  aumenta las conversiones y ventas, reduciendo costos: </h4>
                                            <ul type= "circle">
                                                <li> 
                                                    <h5> Si quieres crear una web, puedo diseñarla enfocándome en el éxito de tu empresa y <strong> posicionamiento  SEO </strong>. Obtendrás un diseño interactivo para mostrar a desarrolladores o inversores, también puedo diseñar tu Wordpress, ionos, shoppify... </h5>
                                                </li>
                                                <li> 
                                                    <h5>Puedo realizar una <strong>auditoría o análisis heurístico </strong> de tu sitio web y un posterior rediseño ajustándome a tus necesidades. </h5>
                                                </li>                                            
                                            </ul>                                                                                    
                                        </div>

                                    </div>
                                                                    
                                                 
                            </div>
                            
                            <div class="container-list-footer">
                               
                                <p class="list-footer">CADA PROYECTO ES ÚNICO! </p>
                                <h6>Cuéntame tus necesidades o agenda una llamada, trabajemos juntos para ajustarme a tu presupuesto <br>y hacer realidad tu visión.</h6>
                                
                                <div class="text-btn">       
                                        <div class="contact-form-2" >
                                            <h2>Solicitar videollamada:</h2>
                                            <form action="https://formsubmit.co/mjortiz93@gmail.com" method="POST" >
                                                <div class="container-input">
                                                    <div class="form-input" >
                                                        <input 
                                                        type="email" 
                                                        id="email" 
                                                        name="email" 
                                                        placeholder=" " 
                                                        required 
                                                        aria-labelledby="name-label"
                                                        autocomplete="on">
                                                        <label class="accesible" for="email" id="email-label">Correo electrónico</label>                                   
                                                    </div>
                                                    <button  type="submit">Enviar</button>
                                                </div>
                                            </form>
                                        </div>
                                </div>
                            </div>
            
            </div>
            <div class="exito-container">
                <div class="container">
                
                    <div class="exito-div">                        
                        <p class= "texto-exito"> El éxito de cualquier empresa nace de la satisfacción de sus usuarios </p>
                        <div>
                            <p>Ya sea un servicio, un sitio web o videojuego, el éxito dependerá de una comprensión de las necesidades del usuario.</p> 
                            <p>   Tener una plataforma visualmente atractiva es solo parte del desafío, lo vital es asegurar que los usuarios puedan interactuar con facilidad, sin obstáculos que generen frustración o abandono.</p>
                            <p>   Identificar y corregir esos puntos de fricción es clave para aumentar la satisfacción del usuario y el éxito del negocio a largo plazo. </p>
                        </div>
                        <div>
                            <h6> <a href="uxui.js" target="_blank" rel="noopener noreferrer"> Casos de estudio UX/UI  </a> </h6>
                            <h6>Casos de estudio Videojuegos   </h6>
                        </div>
                    </div>
                    <div> 
                        <img src="../img/psico-ux.svg" alt="imagen usabilidad,empativa y psicologia en ux/ui" width="290px"/>
                    </div>
                </div>

                
                   
                            <div class="btn-footer">
                                    <a class="btn0" href="contacta.html" target="_blank" rel="noopener noreferrer">CONTACTAR </a>
                            </div>
                    

                
            </div>
            
            <div class= "portfolio">
                <h2 class="texto-portfolio"> DISEÑOS UX/UI</h2>
                <div class="imgs">
                    <div class= "img-portfolio">
                        <img class= "homes" src="../img/casa.svg" alt="diseño ux/ui" />
                    </div>
                    <div class= "img-portfolio">
                        <img class= "lollipop" src="../img/plant.svg" alt="diseño ux/ui" />
                    </div>
                    <div class= "img-portfolio">
                        <img class= "gamerhouse" src="../img/games.svg" alt="diseño ux/ui" />
                    </div>
                    <div class= "img-portfolio">
                        <img class= "gamerhouse" src="../img/zen.png" alt="diseño ux/ui" />
                    </div>
                    <div class= "img-portfolio">
                        <img class= "gamerhouse" src="../img/lolli.svg" alt="diseño ux/ui" />
                    </div>
                    <div class= "img-portfolio">
                        <img class= "gamerhouse" src="../img/mind.svg" alt="diseño ux/ui" />
                    </div>
                    
                    <video class= "video-omega"  autoplay loop muted playsinline>
                        <source src="../img/2024122022181.mp4" type="video/mp4" >                       
                    </video>
                    <video class= ""  autoplay loop muted playsinline>
                        <source src="../img/dogfinder.mp4" type="video/mp4" >                       
                    </video>
                     <div class= "img-portfolio">
                        <img class= "gamerhouse" src="../img/hotel.svg" alt="diseño ux/ui"  />
                    </div>
                     <div class= "img-portfolio">
                        <img class= "gamerhouse" src="../img/bank.svg" alt="diseño ux/ui" />
                    </div>
                     <div class= "img-portfolio">
                        <img class= "gamerhouse" src="../img/bag.png" alt="diseño ux/ui" />
                    </div>
                </div>
            </div>
           
            
            
        </section>
    `,
}
