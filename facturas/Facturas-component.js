export const Facturacion = {
  data() {
    return {
      conceptosSeleccionados: [],
      servicios: {
        uxui: [
          {
            nombre: 'Wireframes (6 frames - Startups)',
            horas: 12,
            precio: 300,
          },
          {
            nombre: 'Wireframes (10 frames - Startups)',
            horas: 20,
            precio: 500,
          },
          {
            nombre: 'Wireframes (15 frames - Medianas empresas)',
            horas: 12,
            precio: 450,
          },
          {
            nombre: 'Wireframes (20 frames - Medianas empresas)',
            horas: 12,
            precio: 600,
          },
          {
            nombre: 'Wireframes (25 frames - Corporaciones)',
            horas: 20,
            precio: 800,
          },
          {
            nombre: 'Wireframes (30 frames - Corporaciones)',
            horas: 30,
            precio: 1000,
          },
          {
            nombre: 'Prototipos (8 frames - Startups)',
            horas: 30,
            precio: 750,
          },
          {
            nombre: 'Prototipos (12 frames - Startups)',
            horas: 40,
            precio: 1000,
          },
          {
            nombre: 'Prototipos (15 frames - Medianas empresas)',
            horas: 30,
            precio: 1125,
          },
          {
            nombre: 'Prototipos (20 frames - Medianas empresas)',
            horas: 30,
            precio: 1500,
          },
          {
            nombre: 'Prototipos (25 frames - Corporaciones)',
            horas: 35,
            precio: 1250,
          },
          {
            nombre: 'Prototipos (30 frames - Corporaciones)',
            horas: 40,
            precio: 1500,
          },
          {
            nombre: 'Auditoría UX/UI (Startups - 5 páginas clave)',
            horas: 10,
            precio: 400,
          },
          {
            nombre: 'Auditoría UX/UI (Medianas empresas - 10 páginas clave)',
            horas: 15,
            precio: 600,
          },
          {
            nombre: 'Auditoría UX/UI (Corporaciones - 20 páginas clave)',
            horas: 20,
            precio: 1000,
          },
          {
            nombre: 'Auditoría + Rediseño (Medianas empresas - 10 páginas)',
            horas: 30,
            precio: 900,
          },
          {
            nombre: 'Auditoría + Rediseño (Corporaciones - 20 páginas)',
            horas: 30,
            precio: 1500,
          },
        ],
        web: [
          {
            nombre: 'Desarrollo Web Front-end (Pequeñas empresas - 5 páginas)',
            horas: 20,
            precio: 500,
          },
          {
            nombre: 'Desarrollo Web Full-stack (Medianas empresas - 8 páginas)',
            horas: 30,
            precio: 800,
          },
          {
            nombre: 'Grandes sitios corporativos (15 páginas)',
            horas: 50,
            precio: 1500,
          },
          { nombre: 'Optimización Web (General)', horas: 8, precio: 400 },
        ],
      },
    }
  },

  computed: {
    total() {
      return this.conceptosSeleccionados.reduce(
        (acc, item) => acc + item.precio,
        0
      )
    },
  },
  methods: {
    agregarConcepto(concepto) {
      if (!this.conceptosSeleccionados.includes(concepto)) {
        this.conceptosSeleccionados.push(concepto)
      }
    },
    eliminarConcepto(index) {
      this.conceptosSeleccionados.splice(index, 1)
    },
    descargarFactura() {
      const factura = `
        Factura
        ==================
        Servicios Seleccionados:
        ${this.conceptosSeleccionados
          .map((c) => `${c.nombre} - ${c.horas} horas - ${c.precio}€`)
          .join('\n')}
        ------------------
        Total: ${this.total}€
      `
      const blob = new Blob([factura], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'factura.txt'
      link.click()
    },
  },
  template: `
    <div>
      <h1>Gestión de Facturas</h1>
      <h2>Servicios UX/UI</h2>
      <ul>
        <li v-for="(servicio, index) in servicios.uxui" :key="'uxui-' + index">
          <button @click="agregarConcepto(servicio)">
            {{ servicio.nombre }} - {{ servicio.horas }} horas - {{ servicio.precio }}€
          </button>
        </li>
      </ul>
      <h2>Servicios Desarrollo Web</h2>
      <ul>
        <li v-for="(servicio, index) in servicios.web" :key="'web-' + index">
          <button @click="agregarConcepto(servicio)">
            {{ servicio.nombre }} - {{ servicio.horas }} horas - {{ servicio.precio }}€
          </button>
        </li>
      </ul>
      <h2>Resumen de Factura</h2>
      <ul class="delete-ul">
        <li v-for="(concepto, index) in conceptosSeleccionados" :key="'resumen-' + index">
          {{ concepto.nombre }} - {{ concepto.horas }} horas - {{ concepto.precio }}€
          <button @click="eliminarConcepto(index)">Eliminar</button>
        </li>
      </ul>
      <h3>Total: {{ total }}€</h3>
      <button @click="descargarFactura">Descargar Factura</button>
    </div>
  `,
}
