/*Slideshow*/

//Show images in mainPage
let slideIndex = 0;
showSlides = () => {

  let slides = document.getElementsByClassName("main-slideshow__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 20000); // Change image every 20 seconds
}


//execute
showSlides();

/* Hamburger menu  */

//HamburgerMenu animation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#slidebar');
const nav2 = document.querySelector('#slidebar');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('treatments__navigation--active');
  nav.classList.toggle('pricelist__navigation--active');
}

hamburger.addEventListener('click', handleClick);



function headNavAppear() {

  var head = document.getElementById("headList");

  if (head.style.opacity === "0") {

    setTimeout(() => {
      head.style.opacity = "1";
    }, 200);

  } else {
    setTimeout(() => {
      head.style.opacity = "0";
    }, 100);

    window.onresize = () => {
      if(window.innerWidth >= 601) {
        head.style.opacity ="1";
      }

    }
  }
}
//Function response for change opacity in head nav list
function changeOpacity(elemntID = '', time = 200) {
  var element = document.getElementById(elemntID);
  
    if (element.style.opacity === "0") {
      setTimeout(() => {
        element.style.opacity = "1";
      }, time);

    } else {
      setTimeout(() => {
        element.style.opacity = "0";
      }, time);

      window.onresize = () => {
        if(window.innerWidth >= 601) {
          element.style.opacity ="1";
        }
  
      }
    }
};

