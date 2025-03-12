export function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen')
  if (loadingScreen) {
    loadingScreen.style.opacity = '0'
    setTimeout(() => loadingScreen.remove(), 500) // Se elimina después de la animación
  }
}
