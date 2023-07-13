# Astro demo View transition API

Esta nueva api para el navegador se encuentra en modo experimental y solo algunos navegadores la incorporan, entre ellos, Chrome +111, Opera y webview de android.

## Ver el soporte actual de esta nueva función
[🔗Ver soporte de Can i use](https://caniuse.com/?search=View%20Transitions%20API)

## ¿Qué necesitas?

1. Añadir la etiqueta `meta` para usar la API
```
  <meta name="view-transition" content="same-origin" />
```
2. Método para poder usar la nueva función
```
  function spaNavigate(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // With a transition:
  document.startViewTransition(() => updateTheDOMSomehow(data));
}
```
3. Simple customización desde el archivo css
   ```
  ::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 5s;
}
```
[Más información desde la web de developer de Chrome](https://developer.chrome.com/docs/web-platform/view-transitions/)