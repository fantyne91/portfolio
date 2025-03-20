// Contacta.js
import { ref, computed } from 'vue'

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
    const opcionesDinamicas = computed(() => {
      switch (form.value.interes) {
        case 'uxui':
          return {
            tipoProyecto: ['E-commerce', 'Blog', 'Otros'],
            tamanoProyecto: [
              '10 pantallas o menos',
              '20 pantallas o menos',
              '+20 pantallas',
            ],
          }
        case 'programming':
          return {
            tipoProyecto: [
              'Interfaz o Front-end',
              'Lado servidor o Back-end',
              'Front y Back-end',
            ],
            tamanoProyecto: [
              '10 pantallas o menos',
              '20 pantallas o menos',
              '+20 pantallas',
            ],
          }
        case 'games':
          return {
            tipoServicio: [
              'Documentación, spitch, GDD',
              'Diseño HUD (prototipado Figma)',
              'Creación HUD Unreal',
              'Análisis y test jugabilidad + UX',
            ],
          }
        case 'unreal':
          return {
            tipoServicio: ['Cinemáticas corporativas', 'Videojuegos'],
          }
        default:
          return {}
      }
    })

    return {
      form,
      currentStep,
      nextStep,
      opcionesDinamicas,
      // enviarFormulario,
    }
  },

  template: /*html*/ `
  <section class="background-form">
    <div class="contact-form-1 container-column-md flex ">
      <h1 class="visually-hidden ">Contacta</h1>
      
      <!-- Formulario paso 1 (Nombre, Email, Teléfono) -->
      <form class="p-column-xs flex align-center" @submit.prevent="nextStep" v-if="currentStep === 1"  >
      
      <h2 class="padding-xs p-align">Datos personales</h2>
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
        
          <button type="submit" >Siguiente paso</button>
        
      </form>

      <!-- Formulario paso 2 (Me interesa, dinámico, mensaje) -->
      
      <form class="second-part p-column-sm flex align-center" v-if="currentStep === 2" action="https://formsubmit.co/a551f70ca89a851c4a5030450f868f87" method="POST">
     
          <!-- Campos ocultos del primer paso -->
          <input type="hidden" name="nombre" :value="form.nombre">
          <input type="hidden" name="email" :value="form.email">
          <input type="hidden" name="telefono" :value="form.telefono">

          <div class="full-width align-center flex">
            <button type="button" class="back-btn" @click="currentStep--">
              ⤺ Atrás
            </button>
            <h2 class="p-align"> Sobre tu proyecto</h2>
          </div>
          
            <div class="form-input ">
              <label  for="option-interes" required>Busco: </label>
              <select v-model="form.interes" id="option-interes" name="option-interes">
                <option value="">Seleccionar</option>
                <option value="uxui">Diseñar una Web</option>
                <option value="programming">Programar una Web</option>
                <option value="games">Diseñar Videojuegos</option>
                <option value="unreal">Unreal Engine</option>
              </select>
            </div>
            <div v-if="form.interes" class="specific-interest p-column-xs flex padding-xs">
                <div v-if="form.interes && opcionesDinamicas.tipoProyecto" class="form-input">
                  <label for="tipoProyecto">Tipo de Proyecto:</label>
                  <select id="tipoProyecto" v-model="form.tipoProyecto">
                    <option v-for="tipo in opcionesDinamicas.tipoProyecto" :key="tipo" :value="tipo">{{ tipo }}</option>
                  </select>
                </div>

                <div v-if="form.interes && opcionesDinamicas.tamanoProyecto" class="form-input">
                  <label for="tamanoProyecto">Tamaño del Proyecto:</label>
                  <select id="tamanoProyecto" v-model="form.tamanoProyecto">
                    <option v-for="tamano in opcionesDinamicas.tamanoProyecto" :key="tamano" :value="tamano">{{ tamano }}</option>
                  </select>
                </div>

                <div v-if="form.interes === 'games' && opcionesDinamicas.tipoServicio" class="form-input">
                  <label for="tipoServicio">Tipo de servicio:</label>
                  <select id="tipoServicio" v-model="form.tipoServicio">
                    <option v-for="servicio in opcionesDinamicas.tipoServicio" :key="servicio" :value="servicio">{{ servicio }}</option>
                  </select>
                </div>
                <div v-if="form.interes === 'unreal' && opcionesDinamicas.tipoServicio" class="form-input">
                  <label for="tipoServicio">Tipo de servicio:</label>
                  <select id="tipoServicio" v-model="form.tipoServicio">
                    <option v-for="servicio in opcionesDinamicas.tipoServicio" :key="servicio" :value="servicio">{{ servicio }}</option>
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
            
            
              <button type="submit" class="submit-btn">Enviar</button>
            
      </form>
       <div class="whatsapp-link">
      <p>Si lo prefieres contacta por <a href="https://wa.me/34671303377?text=Hola! Quiero información sobre: " target="_blank">WhatsApp</a></p>
      
    </div>
    </div>
    </section>
  `,
}