/* Navbar */
document.onscroll = function() {

  var nav = document.querySelector("nav");

  if(window.pageYOffset > nav.offsetHeight) {
      nav.classList.add("scrolled");
  }
  else {
      nav.classList.remove("scrolled");
  }

}


/* Button Hover Effect */
var buttons = document.querySelectorAll(".circle-fill");

for (let btn of buttons)  {
  let span = document.createElement("span");
  btn.appendChild(span);

  btn.addEventListener("mouseenter", function(e) {
    let rect = btn.getBoundingClientRect();
    let dx = e.clientX - rect.x;
    let dy = e.clientY - rect.y;
    btn.querySelector("span").style.top = dy + "px";
    btn.querySelector("span").style.left = dx + "px";
  });

  btn.addEventListener("mouseleave", function(e) {
    let rect = btn.getBoundingClientRect();
    let dx = e.clientX - rect.x;
    let dy = e.clientY - rect.y;
    btn.querySelector("span").style.top = dy + "px";
    btn.querySelector("span").style.left = dx + "px";
  });
}


/* Text Animations */
anime.timeline({loop: false})
  .add({
    targets: '.word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  });


/* Cloud Upload Animation */
anime.timeline({loop: true})
  .add({
    targets: '.laptop',
    opacity: [0, 1],
    translateX: ["50%", 0],
    delay: 1000,
    duration: 1000,
  })
  .add({
    targets: '.cloud',
    scale: [0, 1],
    delay: 100,
    duration: 1000,
  })
  .add({
    targets: '.upload-circle',
    scale: [0, 1],
    delay: anime.stagger(150, {direction: 'reverse'}),
    duration: 250,
    easing: 'easeOutExpo',
  })
  .add({
    targets: '.upload-circle',
    scale: [1, 1.5, 1],
    delay: anime.stagger(150, {direction: 'reverse'}, {start: 250}),
    duration: 750,
    easing: 'linear',
  })
  .add({
    targets: '.upload-circle',
    scale: [1, 1.5, 1],
    delay: anime.stagger(150, {direction: 'reverse'}),
    duration: 750,
    easing: 'linear',
  })
  .add({
    targets: '.upload-circle',
    scale: [1, 1.5, 1],
    delay: anime.stagger(150, {direction: 'reverse'}),
    duration: 750,
    easing: 'linear',
  })
  .add({
    targets: '.check',
    width: [0, '25%'],
    duration: 750,
    easing: 'linear',
  })
  .add({
    targets: '.check',
    width: ['25%', 0],
    delay: 500,
    duration: 1250,
    easing: 'linear',
  })
  .add({
    targets: ['.check', '.cloud'],
    scale: [1, 0],
    delay: 500,
    duration: 500,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.upload-circle',
    scale: [1, 0],
    delay: anime.stagger(150),
    duration: 250,
    easing: 'easeOutExpo',
  })
  .add({
    targets: '.laptop',
    opacity: [1, 0],
    translateX: [0, "-50%"],
    duration: 1000,
    easing: 'easeOutExpo',
  });