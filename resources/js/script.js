var slideIndex = 0;
showSlides(slideIndex);


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("main-slideshow__slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

   
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 20000); // Change image every 2 seconds
}





/* Hamburger menu  */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.treatments__navigation');
//const nav2 = document.querySelector('.pricelist__navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('treatments__navigation--active');
 // nav2.classList.toggle('pricelist__navigation--active')
}

// MUSI BYĆ ID
// TU MASZ FUNKCJE KTÓRA BEDZIE UKRYWAŁA I POKAZYWAŁA HAMBURGERA
// const hamburgerShow = () => {
//     const elements = {
//         treatments: document.getElementById("treat"),
//         priceList: document.getElementById("priceList"),
//         ham: document.getElementById("hamb")
//     };

//     if(elements.treatments || elements.priceList) {
//         elements.ham.style.display = "inline block";
//     } else {
//         elements.ham.style.display = "none";
//     }

//     //! TEST
//     console.log(elements.ham.style);
// }

// hamburgerShow();



hamburger.addEventListener('click', handleClick);