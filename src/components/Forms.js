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

    return {
      form,
      currentStep,
      nextStep,
      // enviarFormulario,
    }
  },

  template: /*html*/ `
  <section class="background-form">
    <div class="contact-form-1 container-column-md flex ">
      <h1 class="visually-hidden ">Contacta</h1>
      
      <!-- Formulario paso 1 (Nombre, Email, Teléfono) -->
      <form class="p-column-xs flex" @submit.prevent="nextStep" v-if="currentStep === 1"  >
      
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
            pattern="^\\+?[0-9]{7,}$" 
            autocomplete="on"
            v-model="form.telefono">
          <label class="accesible" for="phone" id="phone-label">Teléfono</label>
        </div>
        
          <button type="submit">Siguiente paso</button>
        
      </form>

      <!-- Formulario paso 2 (Me interesa, dinámico, mensaje) -->
      
      <form class="second-part p-column-sm flex" v-if="currentStep === 2" action="https://formsubmit.co/a551f70ca89a851c4a5030450f868f87" method="POST">
     
          <!-- Campos ocultos del primer paso -->
          <input type="hidden" name="nombre" :value="form.nombre">
          <input type="hidden" name="email" :value="form.email">
          <input type="hidden" name="telefono" :value="form.telefono">

          <button type="button" class="back-btn" @click="currentStep--">
            < Atrás
          </button>
          <h2> Sobre tu proyecto</h2>
            <div class="form-input ">
              <label  for="option" required>Busco: </label>
              <select v-model="form.interes" id="option-interes" name="option-interes">
                <option value="uxui">Diseñar una Web</option>
                <option value="programming">Programar una Web</option>
                <option value="games">Diseñar Videojuegos</option>
                <option value="unreal">Unreal Engine</option>
              </select>
            </div>

            <div class="div-specific-interest p-column-sm flex padding-xs" v-if="form.interes === 'uxui'">
            <div class="form-input ">
                <label for="tipoProyecto">Tipo de Proyecto: </label>
                <select v-model="form.tipoProyecto" id="option-proyecto" name="option-proyecto">
                  <option value="ecommerce">E-commerce</option>
                  <option value="blog">Blog</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div class="form-input">
                <label for="tamanoProyecto">Tamaño del Proyecto: </label>
                <select v-model="form.tamanoProyecto" id="option-tamano" name="option-tamano">
                  <option value="-10">10 pantallas o menos</option>
                  <option value="-20">20 pantallas o menos</option>
                  <option value="+20">+20 pantallas</option>
                </select>
              </div>
            </div>

            <div class="div-specific-interest p-column-sm flex padding-xs"  v-if="form.interes === 'programming'">
            <div class="form-input">
                <label for="tipoProyecto">Tipo de Proyecto: </label>
                <select v-model="form.tipoProyecto" id="option-proyecto" name="option-proyecto">
                  <option value="front-end">Interfaz o Front-end</option>
                  <option value="back-end">Bases de datos o Back-end</option>
                  <option value="full"> Ambas </option>
                </select>
              </div>
              <div class="form-input">
                <label for="tamanoProyecto">Tamaño del Proyecto: </label>
                <select v-model="form.tamanoProyecto" id="option-tamano" name="option-tamano">
                  <option value="-10">10 pantallas o menos</option>
                  <option value="-20">20 pantallas o menos</option>
                  <option value="+20">+20 pantallas</option>
                </select>
              </div>
            </div>
            

            <div class="div-specific-interest p-column-sm flex padding-xs"  v-if="form.interes === 'games'">
              
                <div class="form-input">
                  <label for="tipoServicio">Tipo de servicio: </label>
                  <select v-model="form.tipoServicio" id="tipoServicio" name="tipoServicio">
                    <option value="-10">Documentación, spitch, GDD</option>
                    <option value="-20">Diseño HUD (prototipado)</option>
                    <option value="+20">Creación HUD Unreal</option>
                    <option value="+20">Análisis y test jugabilidad + UX</option>
                  </select>
              </div>
              
            </div>
          
            <div>
              <label for="message"> Para saber como ayudarte necesito toda la información posible: </label>
              <textarea id="message" v-model="form.mensaje" name="message" placeholder="Escribe al menos 2 líneas." rows="5" minlength="40" required></textarea>
            </div>

            <div class="call" >
              <input type="checkbox" v-model="form.help" id="help" name="help">
              <label for="help">  Tengo una idea, pero no sé por donde empezar...</label>
            </div>
         
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="http://localhost:3000/thanks">
            
            <div class="container-btn">
              <button type="submit">Enviar</button>
            </div>
      </form>
       <div class="whatsapp-link">
      <p>Si prefieres contacta por <a href="https://wa.me/34671303377?text=Hola! Quiero información sobre: " target="_blank">WhatsApp</a></p>
      
    </div>
    </div>
    </section>
  `,
}