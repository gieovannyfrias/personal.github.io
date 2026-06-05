// Este archivo externo registra el service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.error('Error al registrar SW:', err));
  });
}