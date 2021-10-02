AOS.init();


//the loader script starts
function myLoader(){
  setTimeout(showKorbo, 1500);
}

function showKorbo(){
  document.querySelector(".loaderLogo-div").style.display= "none";
  document.querySelector("#main-body").style.display= "block";
}
//the loader script Ends

// scrolling nav script start
var navbar = document.querySelector(".nav-scroll");


document.addEventListener('scroll', function(){
  var scroll_position = window.scrollY;
  if (scroll_position > 100) {
    navbar.style.position = 'fixed';

  } else {
    navbar.style.position = 'initial';

  }
});
//  ends


// Side bar count down starts
var countDownDate = new Date("Dec 10, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = flashCountDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("premium").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("premium").innerHTML = "00";
  }
}, 1000);

// Side offer count down ends


// Flash count down starts
var flashCountDownDate = new Date("Oct 2, 2021 15:37:25").getTime();

// Update the count down every 1 second
var y = setInterval(function() {

  var now = new Date().getTime();

  var Fdistance = flashCountDownDate - now;

  var Fdays = Math.floor(Fdistance / (1000 * 60 * 60 * 24));
  var Fhours = Math.floor((Fdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var Fminutes = Math.floor((Fdistance % (1000 * 60 * 60)) / (1000 * 60));
  var Fseconds = Math.floor((Fdistance % (1000 * 60)) / 1000);

  document.getElementById("hour").innerHTML = Fhours;
  document.getElementById("min").innerHTML = Fminutes;
  document.getElementById("sec").innerHTML = Fseconds;
  
    
  if (Fdistance < 0) {
    clearInterval(x);
    document.getElementsByClassName("Fcount")[0].innerHTML = "Expired";
    document.getElementsByClassName("Fcount")[1].innerHTML = "Expired";
    document.getElementsByClassName("Fcount")[2].innerHTML = "Expired";
  }
}, 1000);

// Flash offer count down


// script for catagories carousel starts
var owl = $('#categories .owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay : true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    margin: 50,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },            
        960:{
            items:4
        },
     
    }
});
// script for catagories carousel ends

// script for Products carousel starts
var owl = $('#products .owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay : true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    margin: 50,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
     
    }
});
// script for Products carousel ends

// script for Feedback carousel starts
var owl = $('#feedback .owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay : true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    margin: 50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:1
        },
     
    }
});
// script for catagories carousel ends
