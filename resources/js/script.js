//Slide

// showSlides = () => {
   
//   let slides = document.getElementsByClassName("main-slideshow__slide");

//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
    
      
//   }
//   slideIndex++;

//   if (slideIndex > slides.length) {slideIndex = 1}

//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 20000); // Change image every 20 seconds
// }
// let slideIndex = 0;
// showSlides();


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




// const sign = document.querySelector('.sign');
// const list = document.querySelector('.head__nav--list');

signClick = () => {

document.toggle('.head__nav--list').style.display = "block";
}

function headNavAppear() {

var head = document.getElementById("headList");

if (head.style.opacity === "0") {

setTimeout(() => {
head.style.opacity = "1";
},200);

} else {
setTimeout(() => {
head.style.opacity = "0";
},100);

if(window.innerWidth <= 600) {
head.style.opacity === "1";
  }
}
}


//Menu treatments
function treatmentsApper() {
  var listTreat = document.getElementById('listTreatments');

  if (listTreat.style.opacity === "0") {

    setTimeout(() => {
      listTreat.style.opacity = "1";
    },200);
    
     } else {
      setTimeout(() => {
        listTreat.style.opacity = "0";
    },100);
    
    if(window.innerWidth <= 600) {
      listTreat.style.opacity === "1";
        }
     }

}


//Menu packets 
function packetsApper() {
var listPack = document.getElementById('listPackets');

if (listPack.style.opacity === "0") {

  setTimeout(() => {
    listPack.style.opacity = "1";
  },200);
  
   } else {
    setTimeout(() => {
      listPack.style.opacity = "0";
  },100);
  
  if(window.innerWidth <= 600) {
    listPack.style.opacity === "1";
      }
   }

}

