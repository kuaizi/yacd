if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register(new URL('sw.js', publicUrl.href).href, { scope: './' })})}
