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
// var wow = new WOW({
//                 boxClass:     'wow',      // default
//                 animateClass: 'animated', // default
//                 offset:       100,        // default
//                 mobile:       true,       // default
//                 live:         true        // default
//               })

var wow = new WOW();
wow.init();

$(document).ready(function() {

  // validate contact form
  $.validator.messages.required = "Remplir ce champ";
  $.validator.messages.email = "Format non valide";
  $.validator.errorLabelContainer = '.error';

  // hide sent button, onclick show it
  $('.hide').hide();

  $('.submit').click(function(){
    if ($("form").valid()) {
      $('.sent-content').show();
      $('.initial-content').hide();
    }
  });

  // navbar settings when scroll
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

  // prevent default when click on link
  $(document).on('click', 'a[href^="#"]', function (event) {
    wow.init();
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
  });

  // animate home caroussel
  $(".caroussel > span:gt(0)").hide();

  setInterval(function() {
    $('.caroussel > span:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.caroussel');
  },  2600);
});
