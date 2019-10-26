//Slide
// var slideIndex = 0;
// showSlides(slideIndex);


// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("main-slideshow__slide");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;

//     if (slideIndex > slides.length) {slideIndex = 1}

   
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 20000); // Change image every 2 seconds
// }





/* Hamburger menu  */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#slidebar');
const nav2 = document.querySelector('#slidebar');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('treatments__navigation--active');
  nav.classList.toggle('pricelist__navigation--active');
}


hamburger.addEventListener('click', handleClick);




