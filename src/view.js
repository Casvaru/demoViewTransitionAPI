const msgSupport = document.getElementById('support');
	
if (msgSupport !== null) {
  if (typeof document.startViewTransition === 'undefined') {
      msgSupport.style.display = "flex";
  } else {
      msgSupport.style.display = "none";
  }
}