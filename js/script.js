if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "welcome", // nome do atributo data-slide="principal"
    time: 3000, // tempo de transição dos slides
    pauseOnHover: false // pausa a transição automática
  });
}

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}