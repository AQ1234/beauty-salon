var slideIndex = 0;
showSlides(slideIndex);


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("main-slideshow__slide");
    var dots = document.getElementsByClassName("main-slideshow__dots--dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    //! PAWEŁ SPRAWDŹ CONSOLE ZROZUMIESZ ;P

    console.log(dots);
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //! TU MASZ BŁĄD I RESZTY CI NIE WCZYTUJE
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // setTimeout(showSlides, 20000); // Change image every 2 seconds
}

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

// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.treatments__navigation');
// const nav2 = document.querySelector('.pricelist__navigation');

// const handleClick = () => {
//   hamburger.classList.toggle('hamburger--active');
//   nav.classList.toggle('treatments__navigation--active');
// nav2.classList.toggle('pricelist__navigation--active'); //nawet nie wiem jaki dać warunek, bo chcę by hamburger był jeden zgodnie z zasadą DRY xD
// }

// MUSI BYĆ ID
// TU MASZ FUNKCJE KTÓRA BEDZIE UKRYWAŁA I POKAZYWAŁA HAMBURGERA
const hamburgerShow = () => {
    const elements = {
        treatments: document.getElementById("treat"),
        priceList: document.getElementById("priceList"),
        ham: document.getElementById("hamb")
    };

    if(elements.treatments || elements.priceList) {
        elements.ham.style.display = "inline block";
    } else {
        elements.ham.style.display = "none";
    }

    //! TEST
    console.log(elements.ham.style);
}

hamburgerShow();



// hamburger.addEventListener('click', handleClick);