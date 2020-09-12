// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
//= require wow
//= require jquery.validate
//= require jquery.validate.additional-methods

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)
var wow = new WOW({
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       100,        // default
                mobile:       true,       // default
                live:         true        // default
              })
wow.init();

$(document).ready(function() {

  $.validator.messages.required = "Remplir ce champ";
  $.validator.messages.email = "Format non valide";
  $.validator.errorLabelContainer = '.error';


  $('.hide').hide();

  $('.submit').click(function(){
    if ($("form").valid()) {
      $('.sending-content').show();
      $('.initial-content').hide();
    }
  });

  function scroll_nav() {
    var scroll = $(window).scrollTop();
    if(scroll < 200){
      $('.navbar').removeClass('navbar-light');
      $('.navbar').addClass('navbar-dark');
    } else{
      $('.navbar').removeClass('navbar-dark');
      $('.navbar').addClass('navbar-light');
    }
  }

  scroll_nav();

  $(window).scroll(function(){
    scroll_nav();
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    wow.init();
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
  });

  // var textWrapper = document.querySelector('.ml3');
  // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // anime.timeline({loop: false})
  //   .add({
  //     targets: '.ml3 .letter',
  //     opacity: [0,1],
  //     easing: "easeInOutQuad",
  //     duration: 2250,
  //     delay: (el, i) => 40 * (i+1)
  //   });
  // $('.contact-btn-home').hide();
  // $('.contact-btn-home').delay(2200).show(0);

  $(".caroussel > span:gt(0)").hide();

  setInterval(function() {
    $('.caroussel > span:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.caroussel');
  },  4000);

});
