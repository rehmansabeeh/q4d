var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

(function ($) {
    "use strict";
    new WOW().init

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Smooth scroll for the navigation and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if (! $('#header').hasClass('header-scrolled')) {
              top_space = top_space - 20;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.main-nav, .mobile-nav').length) {
            $('.main-nav .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });

$("#myBtn").click(function(){
    var str = $("#myInput").val();
    alert(str);
});
// var selected_option_1;
// var selected_option_2;
// var selected_option_3;

// $('.box-first').click(function(){
//   selected_option_1 = $('.caption_text_1').html()
// })
// $('.box-second').click(function(){
//   selected_option_2 = $('.caption_text_2').html()
// })
// $('.box-third').click(function(){
//   selected_option_3= $('.caption_text_3').html()
// })

var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('id');
console.log(myParam)

$('.right-button').click(function(){
      $(".main").fadeTo(1000, 0.165);
      $(".exit_button_popup").fadeIn("slow");
})

$('.no_exit_confirmation_button').click(function(){
      $(".main").fadeTo(1000, 1);
      $(".exit_button_popup").fadeOut("slow");
})
$('.next_button').click(function() {

  var entered_text = $("#entered_essay_text").val();
  var attached_picture = $("#myFile").val();
  // var form_data = new FormData();
  // form_data.append('file', $('#myFile').prop('files')[0]);
  // var form = $('#file_upload')[0]
  // var fd = new FormData(form)
  // console.log(fd)
  // console.log(attached_picture)
  // var conceptName = $('.dob_element').find(":selected").text();

fetch(`${window.origin}/q7_quiz`,{
    method : 'POST',
    credentials : "include",
    body : JSON.stringify({
    query_variable_in_url : myParam,
    entered_text_user: entered_text,
    attached_picture_user: attached_picture,
    // fileUser: fd
    }),
    cache : 'no-cache'
  }).then(function(response){
    console.log("OKAY2")
    if(response.status == 200)
    { 
      console.log("OKAY!")
      response.json().then(function(data_received){
        window.location.href = `${window.origin}/register_1` + '?id=' + myParam;
    })

    }
  }

  )
})
})(jQuery)