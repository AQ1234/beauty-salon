// var slideIndex = 0;
// showSlides(slideIndex);


// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("main-slideshow__slide");
//   var dots = document.getElementsByClassName("main-slideshow__dots--dot");
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
  
//   if (slideIndex > slides.length) {slideIndex = 1}    
  
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 20000); // Change image every 2 seconds
// }

// let photo = document.getElementById("phot");

// let state = { num : 0};
// let slide2 = () => {
//   let imgArr = ['one', 'two'];
//   photo.classList = `test fade ${imgArr[state.num]}`;
//   state.num += 1;
//   state.num > 1 ? state.num = 0 : null;
// };
// setInterval(slide2, 2000);

// let para = (tex) => {
//   let markup = `<h3 class="about__content--header">${tex}</h3>`;
//   document.getElementById('mC').insertAdjacentHTML("beforeend", markup);
// };
// window.addEventListener('click', () => para("Hello"));




/* Hamburger menu  */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);