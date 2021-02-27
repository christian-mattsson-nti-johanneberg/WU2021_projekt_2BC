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