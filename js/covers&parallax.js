const parallax = document.getElementById("parallax");

function handleScroll() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
}

$('.owl-carousel').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})



