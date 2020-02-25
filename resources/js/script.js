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


function changone(elementID = '') {
  var what = document.getElementById('homes');
 if(elementID === 'abt') {

  setTimeout(() => {
   what.innerHTML = ` <section class="about"> 
   <h2 class="about__header u-margin-top-default">Villa Uroda</h2>
   <div class="about__container">
     <div class="about__container--item">
       <div class="about__content">
         <h3 class="about__content--header">Kim jesteśmy?</h3>
         <strong>Salon kosmetyczny Villa Uroda</strong> jest pierwszą i jedyną w Białymstoku kliniką dbającą o wygląd
         i zdrowie klienta. Powstała z zamiłowania do tradycyjnej kosmetologii i dermatologii, połączenie tych dwóch
         dziedzin gwarantuje najwyższą jakość zabiegów, dostosowanych do indywidualnych potrzeb odwiedzających nas
         osób. Siłą dermokliniki jest profesjonalnie wyszkolony personel i ponad trzydziestoletnie doświadczenie w
         zakresie kosmetologii.
         <br /></br>
         W zakresie usług naszego <strong>salonu kosmetycznego</strong> znajdują się zabiegi podstawowe, takie jak:
         lecznicze i kosmetyczne oczyszczanie skóry twarzy, manicure i pedicure, peelingi, depilacje, masaże, oraz
         wiele innych dotyczących pielęgnacji twarzy i ciała.
         Z dziedziny dermatologii i medycyny estetycznej zajmujemy się między innymi: <strong>usuwaniem zmarszczek
           oraz ich wypełnianiem, usuwaniem plam pigmentacyjnych, mezoterapią</strong>, oferujemy także zabiegi z
         użyciem kwasów.
       </div>
       <div class="about__content">
         <h2 class="about__content--header">Gabinet Kosmetyczny – w centrum miasta</h2>
         <strong>Gabinet kosmetyczny Villa Uroda</strong> mieści się w <strong>centrum Białegostoku</strong> przy
         ulicy <strong> Podleśnej 11/1.</strong> Gwarantujemy, że przychodząc do naszej dermokliniki, możesz mieć
         pewność, że poczujesz się wyjątkowo oraz znajdziesz się w najlepszym miejscu do rozwiązania Twoich
         problemów, gdyż niezwykle ważne jest dla nas dobre samopoczucie klienta oraz jego zadowolenie, kiedy wraca
         do nas po raz kolejny. Pragniemy budować długotrwałe relacje z naszymi klientami, dawać poczucie komfortu i
         usług świadczonych na najwyższym poziomie. Dołącz do nas już dziś!
       </div>
       <div class="about--btn">
         <a href="#popup" class="btn btn--gold">Zobacz więcej!</a>
       </div>
     </div>
     <div class="about__container--item">
       <div class="about__container--picture">

       </div>
       <div class="about__container--picture-2">

       </div>
     </div>
   </div>

   <div class="about__header--2">
    <p>Salon kosmetyczny Villa Uroda jest pierwszą i jedyną w Białymstoku kliniką dbającą o wygląd i zdrowie klienta</p>
   </div>
   </div>
   </div>
 </section>
  `;


},300); 

} else if(elementID === 'conct') {
  what.innerHTML = `
  <section class="contact" id="conct"> 
  <div class="contact__flex-container">
    <div class="contact__flex-container--flex-item border_radius">
        <h3 class="contact__content--header">Kontakt</h3>
        <strong>VillaUroda</strong> - Podleśna 11/1. Białystok<br /><br />
        Telefon: <strong>(85) 742-74-67</strong><br />kom. <strong>606-406-540</strong><br /><br />
        Godziny otwarcia:<br /><br />
        <strong>pon.-pt.: 11:00 – 19:00<br />
          sob.: 10:00 – 14:00</strong> <br /><br />
        <strong>Dołącz na:</strong><br><svg class="icon icon-facebook2--down"><use xlink:href="#icon-facebook2"></use></svg>
       
    </div>

    <div class="contact__flex-container--flex-item--2 border_radius">
      <h3 class="contact__content--header">Jak dojechać?</h3>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe class="border_radiusMap" src="https://maps.google.com/maps?q=Villauroda&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0">
              </iframe><a href="https://www.bitgeeks.net"></a>
            </div>
      </div>
      
    </div>

</section>`

} else if(elementID = 'skinCare') {
  what.innerHTML = `
  <section class="skinCare border_radius"> 
          <h2 class="skinCare__header--2">Kosmetyka pielęgnacyjna</h2>
          <div class="skinCare__image skinCare__image--1 border_radius--2">

          </div>
          <div class="article">
            <div class="article__content border_radius">
              <h2 class="article__header">Ultimate Time Solution Ritual</h2><br>
              <strong>Intensywny liftigująco - przeciwstarzeniowy rytułał</strong><br>
              Z wiekiem skóra kobiet pod wpływem spadku poziomu hormonów może tracić nawet do 2% kolagenu rocznie.
              Spadek ten powoduje nieodwracalne szkody w jakości skóry, jej sprężystości i odporności na zmarszczki
              mimiczne. Dodatkowo, z wiekiem zmniejsza się aktywność fibroblastów – komórek, odpowiedzialnych za
              produkcję włókien kolagenu i elastyny. Jednak pod wpływem hormonów algowych, zawartych w linii Exception
              Ultimate, zauważono znaczny wpływ hamujący na destrukcję kolagenu, a także działanie intensywnie odżywcze
              i regenerujące. Awangardowy masaż na mięśniach twarzy i wyjątkowa maska na bazie biologicznej celulozy,
              zatopiona w kwasie hialuronowym połączonym z kompleksem Age-Reverse®, pozwolą uzyskać efekt biologicznego
              liftingu.<br><br>
              <strong>WSKAZANIA</strong><br>
              skóra dojrzała o obniżonej elastyczności
              wymagająca ujędrnienia
              wymagająca liftingu i regeneracji<br><br>
              <strong>CEL</strong><br>
              opóźnienie procesu starzenia się skóry
              wygładzenie drobnych zmarszczek mimicznych
              pobudzenie produkcji kolagenu i elastyny
              poprawa napięcia i odżywienia skóry, relaksacja mięśni mimicznych
              modelowanie owalu
              przywrócenie promiennego wyglądu
            </div>
          </div>

          <div class="article">
            <div class="article__content border_radius">
              <h2 class="article__header">Cold Cream Marine Ritual</h2><br>
              <strong>INTENSYWNY LIFTINGUJĄCO – PRZECIWSTARZENIOWY RYTUAŁ</strong><br>
              <strong>REGENERUJĄCO-ODŻYWCZY ZABIEG DLA SKÓRY SUCHEJ I WRAŻLIWEJ</strong><br>
              Odwodnienie skóry jest spowodowane uszkodzeniem płaszcza hydro-lipidowego. Dehydratacja jest przyczyną
              nadmiernego przesuszenia się skóry, co powoduje dyskomfort, napięcie, pękanie, pieczenia i powstanie
              drobnych mikro-urazów. Rozwiązaniem Thalgo jest rytuał na bazie kosmetyków z unikalną, udoskonaloną
              recepturą Cold Cream Marine dla zapewnienia długotrwałego odżywienia, nawilżenia i ukojenia delikatnej,
              suchej i wrażliwej skórze oraz zwiększenia jej progu tolerancji.<br><br>
              <strong>WSKAZANIA</strong><br>
              Skóra sucha i bardzo sucha, odwodniona, wrażliwa, skłonna do podrażnień i zaczerwienienia<br><br>
              <strong>CEL</strong><br>
              Nawilżenie, odżywienie, regeneracja skóry, zabezpieczenie skóry przed utratą lipidów i wody
            </div>
          </div>
          <div class="article">
            <div class="article__content border_radius">
              <h2 class="article__header">Prodige Des Oceanes Face & Body Ritual</h2><br>
              <strong>INTENSYWNY REGENERUJĄCO-ODMŁADZAJĄCY RYTUAŁ NA TWARZ I CIAŁO</strong>
              Każda kobieta marzy o wiecznej młodości, pięknej skórze, chce zatrzymać czas, szuka swojego eliksiru
              młodości. Odpowiedzią jest Rytuał Prodige, który kryje moc 5 oceanów. Morze to ogromne, wspaniale
              zaopatrzone laboratorium, w którym znajdują się prawie wszystkie pierwiastki chemiczne występujące na
              ziemi – część w postaci rozpuszczalnych soli, inne w postaci nierozpuszczalnej zawiesiny. To właśnie
              bogactwo tych substancji sprawia, że woda morska ma tak dobroczynny wpływ na zdrowie i urodę. Rytuał łączy
              w sobie elementy 7 technik masażu, w tym masażu Kobido, skutecznie poprawia wygład skóry – wygładza,
              nawilża, przyspiesza syntezę włókien podporowych skóry i kwasu hialuronowego, zmniejsza widoczność i ilość
              zmarszczek. Skóra odzyskuje gładkość, elastyczność, jednolity koloryt i młodzieńczy wygląd.<br><br>
              <strong>WSKAZANIA</strong><br>
              Skóra o obniżonej elastyczności, wymagająca nawilżenia, ujędrnienia, liftingu i regeneracji<br><br>
              <strong>CEL RYTUAŁU</strong><br>
              Opóźnienie procesu starzenia się skóry, wygładzenie drobnych zmarszczek mimicznych, pobudzenie produkcji
              kolagenu i elastyny, poprawa napięcia i odżywienia skóry, modelowanie owalu oraz przywrócenie promiennego
              wyglądu.
            </div>
          </div>
          <div class="article">
            <div class="article__content border_radius">
              <h2 class="article__header">Hydraluronic Marine Treament</h2>
              <strong>WYGŁADZENIE I WYPEŁNIENIE ZMARSZCZEK</strong><br>
              Innowacyjny zabieg na bazie kwasu hialuronowego. Usuwa pierwsze oznaki starzenia się skóry i precyzyjnie
              wypełnia zmarszczki. Błyskawiczny efekt zapewniają mikrosfery z cząsteczkami kwasu hialuronowego. Przy
              kontakcie z wodą zwiększają swoją objętość i wypychają zmarszczki od wewnątrz,
              mają właściwości wychwytywania wody. GAG (polisacharydy) znajdujące się pomiędzy włóknami kolagenu i
              elastyny ograniczają utratę wody. Zabieg regeneruje skore, redukuje ilość i głębokość zmarszczek, chroni
              komórki przed szkodliwym wpływem wolnych rodników, wzmacnia skórę oraz modeluje owal twarzy.<br><br>
              <strong>WSKAZANIA</strong><br>
              Skóra odwodniona z widocznymi zmarszczkami, potrzebująca nawilżenia i regeneracji.<br><br>
              <strong>CEL</strong><br>
              Zabieg ma na celu wygładzić i nawilżyć skórę, wypełnić zmarszczki oraz stymulować syntezę nowych włókien
              kolagenowych.
            </div>
          </div>
        </section>
     
        <div class="skinCare__image skinCare__image--2 border_radius--2">
        </div>
        <div class="article">
          <div class="article__content border_radius">
            <h2 class="article__header">Hydradermie podwójna jonizacja</h2><br>
            <strong>ZABIEG DLA KAŻDEGO CELU PIELĘGNACYJNEGO</strong><br>
            Ekskluzywny zabieg pielęgnacyjny, który zapewnia wyjątkową skuteczność. Jego innowacyjność umożliwia
            szybkie i dogłębne wchłanianie zjonizowanych składników aktywnych oraz niesamowicie piękną skórę.
            Hydradermie podwójna jonizacja występuje w siedmiu wersjach, zależnie od celów pielęgnacyjnych oraz
            rodzaju skóry.<br><br>
            <strong>REZULTATY</strong><br>
            Hydradermie podwójna jonizacja to ekskluzywny, najbardziej kompleksowy zabieg – skóra jest nawilżona,
            odżywiona, dotleniona, zrelaksowana i pełna blasku już po 1 zabiegu! Dzięki Hydradermie podwójna jonizacja
            Twoja twarz jest wypoczęta i promienieje urodą przez cały rok.
          </div>
        </div>
        <div class="article">
          <div class="article__content border_radius">
            <h2 class="article__header">Hydradermie Lift podwójna jonizacja</h2><br>
            <strong>REGENERUJĄCO-ODŻYWCZY ZABIEG DLA SKÓRY SUCHEJ I WRAŻLIWEJ</strong><br>
            NATYCHMIASTOWY „LIFTING”
            Zapewnia rewolucyjne odmłodzenie dzięki stymulacji mięśni twarzy, przywracając im odpowiednie napięcie
            oraz unosząc rysy przy pomocy gimnastyki twarzy. Hydradermie Lift podwójna jonizacja pozwala uzyskać
            spektakularny efekt „liftingu” bez iniekcji!<br><br>
            <strong>REZULTATY</strong><br>
            Poza pielęgnacją i uelastycznieniem skóry, Hydradermie Lift podwójna jonizacja powoduje „uniesienie”
            konturu twarzy dzięki gimnastyce mięśni. Mięśnie odzyskują napięcie i witalność i już po 1 zabiegu twarz
            jest wyraźnie odmłodzona!
          </div>
        </div>

        <div class="article">
          <div class="article__content border_radius">
            <h2 class="article__header">Age Summum</h2><br>
            <strong>HIGH TECH ANTI-AGE</strong><br>
            Kwintesencja największych osiągnięć marki w zakresie pielęgnacji anti-age. manualny zabieg high-tech z
            wykorzystaniem doskonale przebadanych, przetestowanych, uznanych przez świat naukowy aktywnych składników
            antystarzeniowych oraz redukujących objawy starzenia się skóry: czysta witamina C, Kompleks Życia
            Komórkowego z 56 aktywnymi składnikami, kwas hialuronowy…<br><br>
            <strong>REZULTATY</strong><br>
            Age Summum to kompleksowy zabieg anti-ageing – redukuje zmarszczki i drobne linie, zapewnia blask i napięcie
            skóry. Zabieg, który stymuluje regenerację komórkową i odnowę tkankową dla efektu gładkiej, napiętej skóry,
            wymodelowanej i wypoczętej twarzy.
          </div>
        </div>
        <div class="article">
          <div class="article__content border_radius">
            <h2 class="article__header">Liftsome</h2><br>
            Zabieg ujędrniający i odmładzający rysy twarzy. Wykorzystuje termiczną maskę gipsową i zapewnia wyjątkowe
            działanie antystarzeniowe.<br><br>
            <strong>REZULTATY</strong><br>
            Liftosome przywraca młodzieńczość i jędrność skóry redukując widoczne oznaki starzenia się. Zmniejsza też
            oznaki zmęczenia a skóra odzyskuje blask i witalność. Już po 1 zabiegu skóra jest lepiej napięta i
            zrelaksowana, wygląda na młodszą!
          </div>
        </div>
        <div class="article">
          <div class="article__content border_radius">
            <h2 class="article__header">Beaute Neuve</h2><br>
            <strong>ODNOWIONA I PEŁNA BLASKU SKÓRA </strong><br>
            Zabieg z efektem podwójnego peelingu, usuwa martwe komórki naskórka i odsłania blask „nowej” skóry. Oparty
            na kwasach owocowych AHA i czystej witaminie C.<br><br>
            <strong>REZULTATY</strong><br>
            Już 1 zabieg przywraca pełnię blasku cery! Dzięki Beauté Neuve przebarwienia będą widocznie zredukowane,
            cera rozjaśniona, odmłodzona i pełna blasku.
          </div>
        </div>
        <div class="article">
          <div class="article__content border_radius">
            <h2 class="article__header">Eye Logic</h2><br>
            Zabieg ujędrniający i odmładzający rysy twarzy. Wykorzystuje termiczną maskę gipsową i zapewnia wyjątkowe
            działanie antystarzeniowe.<br><br>
            <strong>REZULTATY</strong><br>
            Kontur oczu już po pierwszym zabiegu wygląda na młodszy! Jak po liftingu! Drobne linie i zmarszczki są
            wygładzone. Opuchlizna i cienie pod oczami są zredukowane. Zanika uczucie ciężkich powiek. Rezultaty
            dowiedzione testami klinicznymi!
          </div>
        </div>
        <div class="article">
          <div class="article__content border_radius--2">
            <ul class="article__content--list article__content--list--2">
              <li><strong>ŹRÓDŁO DELIKATNOŚCI I UKOJENIA</strong> – Polecany dla skóry WRAŻLIWEJ i ALERGICZNEJ</li>
              <li><strong>ŹRÓDŁO KOMFORTU</strong> – Pielęgnacja skóry suchej i ekstremalnie suchej</li>
              <li><strong>ŹRÓDŁO MŁODOŚCI</strong> - Pielęgnacja PRZECIWZMARSZCZKOWA</li>
              <li><strong>ŹRÓDŁO NAPIĘCIA</strong> – Pielęgnacja SKÓRY WIOTKIEJ I ATROFICZNEJ</li>
              <li><strong>ŹRÓDŁO NAWILŻENIA</strong> – Pielęgnacja skóry odwodnionej</li>
              <li><strong>ŻRÓDŁO RÓWNOWAGI</strong> – Pielęgnacja skóry problematycznej</li>
              <li><strong>ŹRÓDŁO ROZJAŚNIENIA NEWHITE</strong> –Pielęgnacja skóry z przebarwieniami</li>
            </ul>
          </div>
        </div>

        <section class="skinCare border_radius">
          <div class="skinCare__image skinCare__image--3 border_radius--2"></div>

          <div class="article__content">
            Zabieg ujędrniający i odmładzający rysy twarzy. Wykorzystuje termiczną maskę gipsową i zapewnia wyjątkowe
            działanie antystarzeniowe Kontur oczu już po pierwszym zabiegu wygląda na młodszy! Jak po liftingu! Drobne
            linie i zmarszczki są wygładzone. Opuchlizna i cienie pod oczami są zredukowane. Zanika uczucie ciężkich
            powiek. Rezultaty dowiedzione testami klinicznymi!
          </div>

          <div class="article">
            <div class="article__content border_radius">
              <strong>INTRACEUTICALS REJUVENATE</strong><br><br>
              Odmłodzenie cery, wygładzenie, redukcja zmarszczek i linii, widoczny lifting, poprawa konturów i
              zwiększenie jędrności, przywrócenie promienności i witalności, głębokie nawodnienie i odżywienie skóry.
            </div>
          </div>

          <div class="article">
            <div class="article__content border_radius">
              <strong>INTRACEUTICALS CLARITY SENSITIVE</strong><br><br>
              Zmniejszenie trądziku i wygładzenie cery, redukcja stanu zapalnego i przyspieszenie procesu gojenia,
              normalizacja wydzielania sebum, działanie antybakteryjne i przeciwdziałanie nawrotowi problemu,
              normalizacja skóry i złagodzenie podrażnień
            </div>
          </div>

          <div class="article">
            <div class="article__content border_radius">
              <strong>INTRACEUTICALS ATOXELENE</strong><br><br>
              Wyraźne spłycenie linii i zmarszczek mimicznych, wygładzenie okolic oczu i ust, przywrócenie młodszego,
              promiennego wyglądu, długotrwałe nawilżenie, poprawa jędrności napięcia skóry.
            </div>
          </div>

          <div class="article">
            <div class="article__content border_radius">
              <strong>INTRACEUTICALS OPULENCE</strong><br><br>
              Zmniejszenie plam i przebarwień, ujednolicenie kolorytu skóry, nawodnienie i przywrócenie gładkości i
              miękkości, zniwelowanie linii, złagodzenie zmarszczek.
            </div>
          </div>
          <div class="article">
            <div class="article__content border_radius">
              <strong>INTRACEUTICALS OPULENCE</strong><br><br>
              <strong>Intraceuticals Booster z witaminą C to zabieg rekomendowany dla skór przedwcześnie starzejących
                się, </strong>
              Zmniejszenie plam i przebarwień, ujednolicenie kolorytu skóry, nawodnienie i przywrócenie gładkości i
              miękkości, zniwelowanie linii, złagodzenie zmarszczek.<br><br>
              <strong>Intraceuticals Booster z przeciwutleniaczem to zabieg dla skóry młodszej, z pierwszymi oznakami
                starzenia</strong>
              Zmniejszenie plam i przebarwień, ujednolicenie kolorytu skóry, nawodnienie i przywrócenie gładkości i
              miękkości, zniwelowanie linii, złagodzenie zmarszczek.<br><br>
              <strong>Intraceuticals Booster z kolagenem to zabieg dla skóry dojrzałej,</strong>
              Zmniejszenie plam i przebarwień, ujednolicenie kolorytu skóry, nawodnienie i przywrócenie gładkości i
              miękkości, zniwelowanie linii, złagodzenie zmarszczek.<br><br>
              <strong>Intraceuticals Booster z witaminą A to zabieg dla skóry przekrwionej, z widocznymi porami,
                starzejącej się.</strong>
              Serum stymuluje fibroblasty do produkcji kolagenu oraz zwiększa objętość skóry, co przekłada się na jej
              gładszy i młodszy wygląd. Redukuje podrażnienia, koryguje głębokość porów, wyrównuje koloryt.
            </div>
          </div>
          <div class="content">
            <div class="content__end">
              Michelle Peck jest światową ekspertką w dziedzinie kosmetyki tlenowej, przyjaźni się z wieloma gwiazdami i
              jest autorytetem wśród kosmetyczek. To właśnie ona kilka lat temu spopularyzowała w Hollywood Infuzję
              Intraceuticals. Szybkość działania i spektakularne rezultaty, jakie przynosi zabieg, sprawiają, że
              doceniły i pokochały go gwiazdy m.in. Madonna, Eva Longoria, Naomi Campbell, Gwyneth Paltrow, Kate Perry,
              Fergie, a także Justin Timberlake i John Galliano.
              Miss Polonia 2010 – Rozalia Mancewicz podczas wizyty w dermoklinice Villa Uroda <strong>skorzystała z
                zabiegu gwiazd – Intraceuticals</strong>
            </div>
            <div class="content__img--skinCare">
              </img>
            </div>
          </div>
        </section>
        <div class="skinCare__image skinCare__image--4 border_radius--2">
        </div>
        <div class="article__content border_radius">
          <h2 class="article__header" style="text-align: center">Hydradermie podwójna jonizacja</h2><br>
          Ceremonia rekomendowana dla skóry tłustej, mieszanej i problematycznej w każdym wieku, z widocznymi
          zaskórnikami i rozszerzonymi porami. Celem zabiegu jest regulacja pracy gruczołów łojowych, przyśpieszenie
          gojenia się stanów zapalnych, detoksykacja, zwężenie i oczyszczenie porów. Polecany jako pojedynczy seans
          upiększający, bądź intensywna kuracja, składająca się z serii 4 – 6 zabiegów.

        </div>
        <section class="skinCare border_radius">
          <div class="skinCare__image skinCare__image--5 border_radius--2">
          </div>
          <div class="article">
            <div class="article__content border_radius">
              <h2 class="article__header">Ella Bache Perfect Radiance New Skin</h2><br>
              Intensywny rytuał rozświetlający, przywracający zdrowy i promienny wygląd skórze. Szczególnie polecany dla
              cery szarej i zmęczonej. Doskonały na specjalne okazje, jak i przed wielkim wyjściem.
            </div>
          </div>
          <div class="article">
            <div class="article__content border_radius">
              <h2 class="article__header">Ella Bache Hydra Repulp’ Moistrizing</h2><br>
              Nawilżająco- wygładzający rytuał dla wszystkich typów skóry odwodnionej- suchej, tłustej, mieszanej,
              zdradzającej oznaki przesuszenia (drobne zmarszczki, utrata sprężystości, dyskomfort, napięcie). Zabieg
              pobudza skórę właściwą, odbudowując jej zdolność do produkcji lipidów i GAG. Zapobiega nadmiernej utracie
              woda, aby utrzymać optymalny poziom nawilżenia. Łagodzi i przywraca długotrwały komfort.
            </div>
          </div>
        </section>
  `;

}

}
