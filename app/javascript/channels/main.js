'use strict';
$(document).ready(function() {

  function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "../../php/process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
              console.log('function');
            }
            else {
              console.log('function');
            }
        }
    });

  }

  $("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
  });


  $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
          $(".navbar").addClass("navbar-theme");
          $("#home").addClass("navbar-theme");
        } else {
            $(".navbar").removeClass("navbar-theme");
        }
    });


  // $('#home').parallax({imageSrc: 'assets/images/light.jpg'});


  var rellax = new Rellax('.rellax', {
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });




  function am(){
    $( ".progress-bar" ).each(function(){
  		var percent = $(this).attr("percent");
      var count   = $(this).next(".percent");
      $(this).css('width', percent+'%');
    });
  };

  var wow = new WOW({
                  boxClass:     'wow',      // default
                  animateClass: 'animated', // default
                  offset:       150,        // default
                  mobile:       true,       // default
                  live:         true        // default
                })
  wow.init();

  alert('u');

});
