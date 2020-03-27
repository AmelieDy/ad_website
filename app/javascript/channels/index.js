// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
//= require wow

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
      $('.navbar').addClass('navbar-transparent');
    } else{
      $('.navbar').addClass('navbar-light');
      $('.navbar').removeClass('navbar-transparent');
      // $('.navbar').css('transition', '1s ease');
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
    }, 500);
  });
});

// funtion(){
//   message = $(this).data('message-id');
//   console.log(message);
//   $.ajax({
//     url: "/messages",
//     type: "POST",
//     data: {
//       message_params: message
//     },
//     dataType: 'script',
//     success: function() {
//       $('.sending-content').hide();
//       $('.sent-content').show();
//     }
//     // error: function(data) {}
//   })
//   console.log('eho');
// }
