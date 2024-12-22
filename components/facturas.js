export const Invoice = {
  template: `
    <div class="invoice-page">
      <h1>Generador de Facturas</h1>

      <form @submit.prevent="addConcept">
        <div>
          <label for="service">Servicio:</label>
          <select v-model="selectedService" id="service" required>
            <optgroup label="UX">
              <option v-for="(option, index) in services.ux" :key="'ux-' + index" :value="option">
                {{ option.name }} - {{ option.hours }} horas - {{ option.price }}€
              </option>
            </optgroup>
            <optgroup label="Desarrollo Web/CMS">
              <option v-for="(option, index) in services.web" :key="'web-' + index" :value="option">
                {{ option.name }} - {{ option.hours }} horas - {{ option.price }}€
              </option>
            </optgroup>
          </select>
        </div>
        <button type="submit">Añadir Servicio</button>
      </form>

      <div class="concept-list">
        <h2>Servicios Seleccionados</h2>
        <ul>
          <li v-for="(concept, index) in concepts" :key="index">
            {{ concept.name }} - {{ concept.hours }} horas - {{ concept.price.toFixed(2) }}€
            <button @click="removeConcept(index)">Eliminar</button>
          </li>
        </ul>
        <h3>Total: {{ total.toFixed(2) }}€</h3>
      </div>

      <button @click="generatePDF" class="download-btn">Descargar Factura</button>
    </div>
  `,
  data() {
    return {
      selectedService: null,
      concepts: [],
      services: {
        ux: [
          { name: 'Diseño de wireframes (6 frames)', hours: 12, price: 600 },
          { name: 'Diseño de wireframes (10 frames)', hours: 20, price: 1000 },
          { name: 'Diseño de wireframes (18 frames)', hours: 36, price: 1800 },
          { name: 'Diseño de prototipos (6 frames)', hours: 18, price: 900 },
          { name: 'Diseño de prototipos (10 frames)', hours: 30, price: 1500 },
          { name: 'Diseño de prototipos (18 frames)', hours: 54, price: 2700 },
          { name: 'Auditoría de UX/UI', hours: '10-20', price: '500-1000' },
          { name: 'Auditoría + rediseño', hours: '-', price: 'A Consultar' },
        ],
        web: [
          { name: 'Desarrollo Frontend Básico', hours: 10, price: 500 },
          { name: 'Desarrollo Backend Avanzado', hours: 20, price: 1500 },
          { name: 'Configuración CMS', hours: 15, price: 750 },
        ],
      },
    }
  },
  computed: {
    total() {
      return this.concepts.reduce((sum, concept) => sum + concept.price, 0)
    },
  },
  methods: {
    addConcept() {
      if (this.selectedService) {
        this.concepts.push({ ...this.selectedService })
        this.selectedService = null
      }
    },
    removeConcept(index) {
      this.concepts.splice(index, 1)
    },
    generatePDF() {
      const { jsPDF } = window.jspdf
      const doc = new jsPDF()

      doc.text('Factura', 10, 10)
      let y = 20

      this.concepts.forEach((concept) => {
        doc.text(
          `${concept.name} - ${concept.hours} horas - ${concept.price.toFixed(2)}€`,
          10,
          y
        )
        y += 10
      })

      doc.text(`Total: ${this.total.toFixed(2)}€`, 10, y + 10)
      doc.save('factura.pdf')
    },
  },
}
