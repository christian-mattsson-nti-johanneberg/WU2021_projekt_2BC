document.onscroll = function() {

  var nav = document.querySelector("nav");

  if(window.pageYOffset > nav.offsetHeight) {
      nav.classList.add("scrolled");
  }
  else {
      nav.classList.remove("scrolled");
  }

}

anime.timeline({loop: false})
  .add({
    targets: '.word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  });