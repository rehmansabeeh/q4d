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
    // First we store the name user entered
    // var entered_name = $("#lname").value;
//     $('.gender_selection_male').click(function() {
//     selected_gender = "Male";
    var first_language_yes = 0;
    var first_language_no = 0;
    var bilingual_yes = 0;
    var bilingual_no = 0;
    var read_write_frequent = 0;
    var read_write_occasionally = 0;
    var read_write_rarely = 0;
    var first_language = "";
    var bilingual = "";
    var dyslexic_or_not = "";
    var dyslexic_or_not_yes = 0;
    var dyslexic_or_not_no = 0;
    var reading_writing_in_Urdu = "";


    
    $('.first_language_1').click(function() {
      

      $('.first_language_2').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(first_language_no%2 != 0){
    first_language_no++;
}



if(first_language_yes%2 == 0){
  first_language = "Yes";
  $('.first_language_1').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  first_language = "";
  $('.first_language_1').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
first_language_yes++;
    });


$('.first_language_2').click(function() {
      
      first_language = "No";
  
      $('.first_language_1').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(first_language_yes%2 != 0){
    first_language_yes++;
}



if(first_language_no%2 == 0){
  first_language = "No";
  $('.first_language_2').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  first_language = "";
  $('.first_language_2').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
first_language_no++;
    });


$('.bilingual_1').click(function() {
      
  
      $('.bilingual_2').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(bilingual_no%2 != 0){
    bilingual_no++;
}



if(bilingual_yes%2 == 0){
  bilingual = "Yes";
  $('.bilingual_1').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  bilingual = "";
  $('.bilingual_1').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
bilingual_yes++;
    });


$('.bilingual_2').click(function() {
      
      
  
      $('.bilingual_1').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(bilingual_yes%2 != 0){
    bilingual_yes++;
}



if(bilingual_no%2 == 0){
  bilingual = "No";
  $('.bilingual_2').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  bilingual = "";
  $('.bilingual_2').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
bilingual_no++;
    });

// <----------------------------------------------------------------------------------->
$('.dyslexic_or_not_1').click(function() {
      
  
      $('.dyslexic_or_not_2').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(dyslexic_or_not_no%2 != 0){
    dyslexic_or_not_no++;
}



if(dyslexic_or_not_yes%2 == 0){
  dyslexic_or_not = "Yes";
  $('.dyslexic_or_not_1').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  dyslexic_or_not = "";
  $('.dyslexic_or_not_1').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
dyslexic_or_not_yes++;
    });


$('.dyslexic_or_not_2').click(function() {
      
      
  
      $('.dyslexic_or_not_1').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(dyslexic_or_not_yes%2 != 0){
    dyslexic_or_not_yes++;
}



if(dyslexic_or_not_no%2 == 0){
  dyslexic_or_not = "No";
  $('.dyslexic_or_not_2').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  dyslexic_or_not = "";
  $('.dyslexic_or_not_2').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
dyslexic_or_not_no++;
    });
//<------------------------------------------------------------------------------------------->
   

$('.frequently_box').click(function() {
      
        $('.occassionally_box').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });

      $('.rarely_box').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(read_write_rarely%2 != 0){
    read_write_rarely++;
}
if(read_write_occasionally%2 != 0){
    read_write_occasionally++;
}


if(read_write_frequent%2 == 0){
  reading_writing_in_Urdu = "Frequently";
  $('.frequently_box').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  reading_writing_in_Urdu = "";
  $('.frequently_box').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
read_write_frequent++;

});


$('.rarely_box').click(function() {
      
      $('.occassionally_box').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });

      $('.frequently_box').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(read_write_frequent%2 != 0){
    read_write_frequent++;
}
if(read_write_occasionally%2 != 0){
    read_write_occasionally++;
}


if(read_write_rarely%2 == 0){
  reading_writing_in_Urdu = "Rarely";
  $('.rarely_box').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  reading_writing_in_Urdu = "";
  $('.rarely_box').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
read_write_rarely++;

});

$('.occassionally_box').click(function() {
      
      $('.rarely_box').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });

      $('.frequently_box').css({
          'border': '1px solid #B4ADB0',
          'width': '100%',
          'padding': '10px',
          'float': 'left',
          'text-align': 'center',
          'border-radius': '6px',
          'font-weight': 'initial',
          'background-color': '#fff',
          'color': '#B4ADB0',
          'transition': '0.3s ease' 
          });
          
if(read_write_rarely%2 != 0){
    read_write_rarely++;
}
if(read_write_frequent%2 != 0){
    read_write_frequent++;
}


if(read_write_occasionally%2 == 0){
  reading_writing_in_Urdu = "Occassionally";
  $('.occassionally_box').css({
      'border': 'none',
      'border-radius': '6px',
      'background-color': '#3AAFA9',
      'color': '#fff'
  });

}

else{
  reading_writing_in_Urdu = "";
  $('.occassionally_box').css({
    'border': '1px solid #B4ADB0',
    'width': '100%',
    'padding': '10px',
    'float': 'left',
    'text-align': 'center',
    'border-radius': '6px',
    'font-weight': 'initial',
    'background-color': '#fff',
    'color': '#B4ADB0',
    'transition': '0.3s ease' 
    });
}
read_write_occasionally++;

});

var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('id');
console.log(myParam)


$('.next_button').click(function() {
 
  if(first_language == "" || bilingual == "" || reading_writing_in_Urdu == "" || dyslexic_or_not == "")
  {
    alert("Kindly fill all the fields!")
  }
  else
  {
    fetch(`${window.origin}/create_profile_3`,{
    method : 'POST',
    credentials : "include",
    body : JSON.stringify({
      first_language_Urdu : first_language,
      bilingual_Urdu : bilingual,
      reading_writing_in_Urdu : reading_writing_in_Urdu,
      dyslexia_diagnosed_condition : dyslexic_or_not,
      query_variable_in_url: myParam
    }),
    cache : 'no-store'
  }).then(function(response){
    console.log("OKAY2")
    if(response.status == 200)
    { console.log("OKAY!")
      response.json().then(function(data_received){
        window.location.href = `${window.origin}/test_start_1` + '?id=' + data_received['id_to_be_passed'];
      })
    }
  }
  )
  }

})


})(jQuery);









//     $('.gender_selection_female').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//     $('.gender_selection_other').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//         if(no_of_clicks_female%2 != 0){
//             no_of_clicks_female++;
//         }
//         if(no_of_clicks_other%2 != 0){
//             no_of_clicks_other++;
//         }
        
        

//         if(no_of_clicks_male%2 == 0){

//     $('.gender_selection_male').css({
//     'border': 'none',
//     'border-radius': '6px',
//     'background-color': '#3AAFA9',
//     'color': '#fff'
//     });
// }
// else{
//     $('.gender_selection_male').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
// }
// no_of_clicks_male++;
// // $.ajax({
// //     url:"create_profile", //the page containing python script
// //     type: "post", //request type,
// //     dataType: 'json',
// //     data: { gender_reached_or_not: "success" , gender: "male"},
// //     success:function(result){
// //     console.log(result.abc);
// //           }
// //         });


    
//     });

// $('.gender_selection_female').click(function() {
//     selected_gender = "Female";


//     $('.gender_selection_male').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//     $('.gender_selection_other').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
        
//         if(no_of_clicks_male%2 != 0){
//             no_of_clicks_male++;
//         }
//         if(no_of_clicks_other%2 != 0){
//             no_of_clicks_other++;
//         }
        

//         if(no_of_clicks_female%2 == 0){

//     $('.gender_selection_female').css({
//     'border': 'none',
//     'border-radius': '6px',
//     'background-color': '#3AAFA9',
//     'color': '#fff'
//     });
// }
// else{
//     $('.gender_selection_female').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
// }
// no_of_clicks_female++;
// // $.ajax({
// //     url:"create_profile", //the page containing python script
// //     type: "post", //request type,
// //     dataType: 'json',
// //     data: {gender_reached_or_not: "success" , gender: "female"},
// //     success:function(result){
// //     console.log(result.abc);
// //           }
// //         });
// });

// $('.gender_selection_other').click(function() {
//     selected_gender = "Other";

    
//     $('.gender_selection_male').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//     $('.gender_selection_female').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//         if(no_of_clicks_male%2 != 0){
//             no_of_clicks_male++;
//         }
//         if(no_of_clicks_female%2 != 0){
//             no_of_clicks_female++;
//         }
        
    
//         if(no_of_clicks_other%2 == 0){

//     $('.gender_selection_other').css({
//     'border': 'none',
//     'border-radius': '6px',
//     'background-color': '#3AAFA9',
//     'color': '#fff'
//     });
// }
// else{
//     $('.gender_selection_other').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
// }
// no_of_clicks_other++;
// // $.ajax({
// //     url:"create_profile", //the page containing python script
// //     type: "post", //request type,
// //     dataType: 'json',
// //     data: {gender_reached_or_not: "success" , gender: "other"},
// //     success:function(result){
// //     console.log(result.abc);
// //           }
// //         });
// });

// Selecting date of birth
// var day;
// var month;
// var year;
// $('#dob-day').click(function(){
//     day = $('#dob-day option:selected').text();
    
// });
// $('#dob-month').click(function(){
//     month = $('#dob-month option:selected').text();
//     console.log(month);
    
// });
// $('#dob-year').click(function(){
//     year = $('#dob-year option:selected').text();
//     });
// $.ajax({
//     url:"create_profile_1", //the page containing python script
//     type: "post", //request type,
//     dataType: 'json',
//     data: {date_reached_or_not: "success", day_selected: day , month_selected: month, year_selected: year },
//     success:function(result){
//     console.log(result.abc);
//             }
//         });
// $('.next_button').click(function(){
    
// });
        
    
