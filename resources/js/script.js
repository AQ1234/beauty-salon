//Slide

/**
 * TEN PLIK JEST BARDZO KRÓTKI A MOZE BYC DOBRYM ĆWICZENIEM
 * NAPISZ TO TAK ŻEBY BYŁO CZYSTO i ŻEBY DAŁO SIĘ TO CZYTAĆ
 */
showSlides = () => {
   
  let slides = document.getElementsByClassName("main-slideshow__slide");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    
      
  }
  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 20000); // Change image every 20 seconds
}
let slideIndex = 0;
showSlides();


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


//Apear and Disapear menu in mobile DRY!!!!!!!
// TO RÓWNIE DOBRZE MOŻNA ZROBIĆ POPRZEZ ANIMATION w CSS
function headNavAppear() {

var head = document.getElementById("headList");

if (head.style.opacity === "0") {

setTimeout(() => {
head.style.opacity = "1";
},200);

} else {
setTimeout(() => {
head.style.opacity = "0";
},200);

  }

  window.onresize = function () {
  if(window.innerWidth >= 601) {
    head.style.opacity = "1";
  }
}
}



/*Dropdownlist appear DRY!! */ 
// TO RÓWNIE DOBRZE MOŻNA ZROBIĆ POPRZEZ ANIMATION w CSS
//Menu treatments
function treatmentsApper() {
  var listTreat = document.getElementById('listTreatments');
    var timeOuts = {};
  if (listTreat.style.opacity === "0") {

    timeOuts.time = setTimeout(() => {
      listTreat.style.opacity = "1";
    },200);
    
     } else {
    timeOuts.time = setTimeout(() => {
        listTreat.style.opacity = "0";
    },100);
    
    if(window.innerWidth <= 600) {
      listTreat.style.opacity === "1";
        }
     }

     //obserwuj
    console.log(timeOuts);
}

//DRY!! 
// I możesz używać do woli w htmlu czy nawet tu poprzez addeventlistner
// przekazujesz string-a
// to i tak kupa 
function changeOpacity(elemntID = '', time = 200) {
    var element = document.getElementById(elemntID);
    if(window.innerWidth <= 600) {
        element.style.opacity === "1";
    } else {
        if (element.style.opacity === "0") {
            setTimeout(() => {
                element.style.opacity = "1";
            },time);

        } else {
            setTimeout(() => {
                element.style.opacity = "0";
            },time);
        }
    }
};

//Menu packets DRY !!!
// PRZEMYŚL TO
function packetsApper() {
    var listPack = document.getElementById('listPackets');

    if(window.innerWidth <= 600) {
        listPack.style.opacity === "1";
    } else {
        if (listPack.style.opacity === "0") {
            setTimeout(() => {
                listPack.style.opacity = "1";
            },200);

        } else {
            setTimeout(() => {
                listPack.style.opacity = "0";
            },100);
        }
    }


        // if (listPack.style.opacity === "0") {

        //     setTimeout(() => {
        //         listPack.style.opacity = "1";
        //     },200);

        //  } else {
        //     setTimeout(() => {
        //         listPack.style.opacity = "0";
        //     },100);

        //     if(window.innerWidth <= 600) {
        //         listPack.style.opacity === "1";
        //     }
        // }
}


