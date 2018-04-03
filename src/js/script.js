document.addEventListener("DOMContentLoaded", function(event) {

// HEADER RESIZE

  let $header = document.querySelector('.header');

  if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    document.addEventListener("scroll", function(){
      if(document.querySelector('html').scrollTop > 100){
        $header.classList.remove("header--large");
        $header.classList.add("header--small");
      }
      else {
        $header.classList.add("header--large");
        $header.classList.remove("header--small");
      }
    });
  }

// BURGER MENU

  let $headerBurger = document.querySelector('.header__burger');

  $headerBurger.addEventListener("click", function(){
    $headerBurger.classList.toggle('clicked');
    document.querySelector('.header').classList.toggle('header--show');
  });

// DEFER YOUTUBE VIDEO PARSING

  function parsing() {
    let $video = "<iframe src='https://www.youtube.com/embed/UyHmyLyBm_A' allowfullscreen></iframe>";
    document.getElementsByClassName('wrap__video')[0].innerHTML = $video;
  }
  window.onload = parsing;

});
