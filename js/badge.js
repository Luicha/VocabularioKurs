var SWU__currentScript = document.currentScript || {};
var SWU__DOMReady = function(callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};
SWU__DOMReady(function() {
  const el = document.createElement('div');

  // Options
  const url = SWU__currentScript.getAttribute('url');
  const title = SWU__currentScript.getAttribute('title');
  const position = SWU__currentScript.getAttribute('position');

  // Set custom title
  el.title = title || 'Apoyamos a Ucrania';

  // Set custom URL
  if (url) {
    el.style.cursor = 'pointer'
    el.target = '_blank'
    el.addEventListener('click', function() {
      window.open(url, '_blank')
    })
  }

  // Set custom position (left, right)
  if (position === 'right') {
    el.style.right = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(135deg)'
    el.style.background = 'linear-gradient(-360deg, #005BBB 50%, #FFD500 50%)'
  } else {
    el.style.left = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(45deg)'
    el.style.background = 'linear-gradient(-180deg, #005BBB 50%, #FFD500 50%)'
  }

  el.style.width = '300px'
  el.style.height = '64px'
  el.style.position = 'fixed';
  el.style.zIndex = '999';

  function myFunction(x) {
    if (x.matches) { // If media query matches
        el.style.width = '200px'
        el.style.height = '34px'
    } else {
        el.style.width = '300px'
        el.style.height = '64px'
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  el.setAttribute('id', 'we-stand-with-ukraine')
  document.body.appendChild(el);
});