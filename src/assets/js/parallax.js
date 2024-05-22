let bg = document.getElementById("home");

window.addEventListener('scroll', function() {
  var value = window.scrollY;

  bg.style.backgroundPositionY = value * 0.7 + 'px';
});
