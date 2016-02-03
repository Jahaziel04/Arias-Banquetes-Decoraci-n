var $ = require('jquery');
//var owlCarousel = require('./lib/owl.carousel');

$('.box').click(function() {
  $(this).toggleClass('selected');
  
});

//Al precionar el toggle le agrega a su padre la clase active
$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});


//Galeria de servicios
$('.btn-gallery').on('click', function() {
  $('.products').removeClass('list').addClass('gallery');
  $('.btn-list').removeClass('active');
  $(this).addClass('active');
});



//Modo lista de galeria de servicios
$('.btn-list').on('click', function() {
  $('.products').removeClass('gallery').addClass('list');
  $('.btn-gallery').removeClass('active');
  $(this).addClass('active');
});
(function () {

  //var loadCSS = require('./lib/loadCSS');
  //var onScroll = require('./lib/onScroll');



  //document.addEventListener('DOMContentLoaded', onDOMLoad);

//Escroll lento para arriba
$('#xxx').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
});

  function onDOMLoad() {
    var btnMenu = document.getElementById('btnMenu');
    var navbarMenu = document.getElementById('navbarMenu');


    btnMenu.addEventListener('click', onClickMenu);

    //loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');
    //loadCSS('https://fonts.googleapis.com/css?family=Montserrat|Lato');


    function onClickMenu() {
      navbarMenu.classList.toggle('header-menu-list--show');
    }
  }

}());

