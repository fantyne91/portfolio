// Contacta.js
import { ref } from 'vue'

export default {
  name: 'Contacta',
  setup() {
    const form = ref({
      nombre: '',
      email: '',
      telefono: '',

      interes: '',
      tipoProyecto: '',
      tamanoProyecto: '',

      tipoServicio: '',
      mensaje: '',
      tamanoJuego: '',
      help: false,
    })
    const currentStep = ref(1) // Estado para controlar el paso actual

    const nextStep = () => {
      if (currentStep.value === 1) {
        currentStep.value = 2 // Avanza al segundo paso
      }
    }

    // const enviarFormulario = () => {
    //   alert('Formulario enviado'),
    //   window.location.href = 'agradecimiento.html',
    //   console.log("loading")
    // }

    return {
      form,
      currentStep,
      nextStep,
      // enviarFormulario,
    }
  },

  template: `
  <div class="container-form">
    <div class="contact-form-1">
      <h1 class="visually-hidden ">Contacta</h1>
      
      <!-- Formulario paso 1 (Nombre, Email, Teléfono) -->
      <form @submit.prevent="nextStep" v-if="currentStep === 1" >
      
      <h2>Datos personales</h2>
        <div class="form-input">
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder=" " 
            required 
            v-model="form.nombre" 
            autocomplete="on">
          <label class="accesible" for="name" id="name-label">Nombre completo*</label>
        </div>

        <div class="form-input">
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder=" "
            maxlength="30"
            required 
            v-model="form.email"
            autocomplete="on">
          <label class="accesible" for="email" id="email-label">Correo electrónico*</label>
        </div>

        <div class="form-input">
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder=" " 
            pattern="\+?[0-9\s\-()]{7,}" 
            v-model="form.telefono" 
            autocomplete="on">
          <label class="accesible" for="phone" id="phone-label">Teléfono</label>
        </div>

        <p class="align"> Tu presupuesto tras el siguiente paso!</p>
        <div class="container-btn-form">
          <button type="submit">Siguiente</button>
        </div>
      </form>

      <!-- Formulario paso 2 (Me interesa, dinámico, mensaje) -->
      
      <form  v-if="currentStep === 2" action="https://formsubmit.co/a551f70ca89a851c4a5030450f868f87" method="POST">
     
          <!-- Campos ocultos del primer paso -->
          <input type="hidden" name="nombre" :value="form.nombre">
          <input type="hidden" name="email" :value="form.email">
          <input type="hidden" name="telefono" :value="form.telefono">

          <button type="button" class="unset-btn" @click="currentStep--">
            < Volver
          </button>
          <h2> Datos de tu proyecto</h2>
            <div class="form-input">
              <label for="option" required>Necesito:</label>
              <select v-model="form.interes" id="option-interes" name="option-interes">
                <option value="uxui">Diseñar una Web</option>
                <option value="programming">Programar una Web</option>
                <option value="games">Diseñar Videojuegos</option>
                <option value="unreal">Unreal Engine</option>
              </select>
            </div>

            <div v-if="form.interes === 'uxui'">
            <div class="form-input">
                <label for="tipoProyecto">Tipo de Proyecto:</label>            
                <select v-model="form.tipoProyecto" id="option-proyecto" name="option-proyecto">
                  <option value="ecommerce">E-commerce</option>
                  <option value="blog">Blog</option>
                  <option value="otros">Otros</option>            
                </select>
              </div>
              <div class="form-input">  
                <label for="tamanoProyecto">Tamaño del Proyecto:</label>            
                <select v-model="form.tamanoProyecto" id="option-tamano" name="option-tamano">
                  <option value="-10">10 pantallas o menos</option>
                  <option value="-20">20 pantallas o menos</option>
                  <option value="+20">+20 pantallas</option>            
                </select>
              </div>
            </div>

            <div v-if="form.interes === 'programming'">
            <div class="form-input">
                <label for="tipoProyecto">Tipo de Proyecto:</label>            
                <select v-model="form.tipoProyecto" id="option-proyecto" name="option-proyecto">
                  <option value="front-end">Interfaz y Front-end</option>
                  <option value="back-end">Back-end</option>
                  <option value="full">Full-stack</option>            
                </select>
              </div>
              <div class="form-input">  
                <label for="tamanoProyecto">Tamaño del Proyecto:</label>            
                <select v-model="form.tamanoProyecto" id="option-tamano" name="option-tamano">
                  <option value="-10">10 pantallas o menos</option>
                  <option value="-20">20 pantallas o menos</option>
                  <option value="+20">+20 pantallas</option>            
                </select>
              </div>
            </div>
            

            <div v-if="form.interes === 'games'">
              
                <div class="form-input">  
                  <label for="tipoServicio">Tipo de servicio:</label>            
                  <select v-model="form.tipoServicio" id="tipoServicio" name="tipoServicio">
                    <option value="-10">Documentación, spitch, GDD</option>
                    <option value="-20">Diseño HUD (prototipado)</option>
                    <option value="+20">Creación HUD Unreal</option>
                    <option value="+20">Análisis y test jugabilidad + UX</option>             
                  </select>
              </div>
              
            </div>
          
            <div>
              <label for="message">Cuéntame sobre tu proyecto:</label>
              <textarea id="message" v-model="form.mensaje" name="message" placeholder="Escribe al menos 2 líneas." rows="5" minlength="40" required></textarea>
            </div>

            <div class="call" >         
              <input type="checkbox" v-model="form.help" id="help" name="help"</input>
              <label for="help"> Solicita una videollamada si tienes una idea, pero no sabes por donde empezar!</label>
            </div>


          <!-- Formulario paso 2 (Me interesa, dinámico, mensaje)
            <div class="" >
            <label for="range"> Tienes un presupuesto máx? En base a tus necesidades intentaré ofrecerte lo mejor</label>
              <input type="range" min="40" max="100" v-model="form.range" id="range" </input>
              <span>{{ form.range }} €</span>       
            </div>  -->
            <input type="hidden" name="_redirect" value="/agradecimiento.html">
            <div class="container-btn">
              <button type="submit">Enviar</button>
            </div>
      </form>
       <div class="whatsapp-link">
      <p>Si prefieres contacta por <a href="https://wa.me/34671303377?text=Hola! Quiero información sobre: " target="_blank">WhatsApp</a></p>
      
    </div>
    </div>
    </div>
  `,
}