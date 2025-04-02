// src/views/notfound.js (o en tu carpeta de componentes)
export default {
  name: 'NotFound',
  template: `
    <div class="not-found" style="height:100vh">
      <h1>404 - Página no encontrada</h1>
      <p>Redirigiendo a la página principal...</p>
    </div>
  `,
  mounted() {
    // Redirige después de 2s (solo para usuarios, no bots)
    if (!navigator.userAgent.match(/bot|crawl|spider|googlebot/i)) {
      setTimeout(() => this.$router.replace('/'), 2000)
    }
  },
  metaInfo() {
    return {
      title: 'Página no encontrada ',
      link: [
        { rel: 'canonical', href: 'https://www.mariadevdesign.com/404' }, // Canonical para 404
      ],
      meta: [
        { name: 'robots', content: 'noindex' }, // Evita indexación
      ],
    }
  },
}
