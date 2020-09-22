// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require wow
//= require jquery.validate
//= require jquery.validate.additional-methods
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
// require("channels")
require("jquery")
require("bootstrap")
import 'bootstrap/js/dist/scrollspy'
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

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
      $('.sent-content').show();
      $('.sent-content').addClass('wow fadeInLeft');

      $('.initial-content').hide();
    }
  });

  $("#cv").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.location = 'images/pdf/cv_dev.pdf';
  });

  function scroll_nav() {
    var scroll = $(window).scrollTop();
    if(scroll < 10){
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

  $('.navbar-toggler').click(function(){
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('navbar-light');
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    wow.init();
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
  });


  $(".caroussel > span:gt(0)").hide();

  setInterval(function() {
    $('.caroussel > span:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.caroussel');
  },  4000);

  $('a#infos-tab').click(function(e){
      // Special stuff to do when this link is clicked...

      // Cancel the default action
      e.preventDefault();
  });

});
