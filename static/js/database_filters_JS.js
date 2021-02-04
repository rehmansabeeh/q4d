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
var no_of_clicks_male = 0;
var no_of_clicks_female = 0;
var no_of_clicks_other = 0;
var selected_filter = "";

(function ($) {
    "use strict";
    new WOW().init

    $(window).scroll(function () {
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
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-scrolled')) {
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

    var no_of_clicks_filter_button_1 = 0;
    var no_of_clicks_filter_button_2 = 0;
    var no_of_clicks_filter_button_3 = 0;
    var no_of_clicks_filter_button_4 = 0;
    var no_of_clicks_filter_sub_gender_1 = 0
    var no_of_clicks_filter_sub_gender_2 = 0
    var no_of_clicks_filter_sub_gender_3 = 0
    var no_of_clicks_filter_sub_education_level_1 = 0
    var no_of_clicks_filter_sub_education_level_2 = 0
    var no_of_clicks_filter_sub_education_level_3 = 0
    var no_of_clicks_filter_sub_language_1 = 0
    var no_of_clicks_filter_sub_language_2 = 0

    var selected_filter = "";
    var selected_educational_level = ""
    var selected_grade = ""
    var selected_gender = ""
    var selected_language = ""
    $('.filter_sub_gender_1').click(function () {

        selected_gender = "Male";
        console.log(selected_gender);
        $('.list_display').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.filter_sub_gender_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_sub_gender_3').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_sub_gender_2 % 2 != 0) {
            no_of_clicks_filter_sub_gender_2++;
        }
        if (no_of_clicks_filter_sub_gender_3 % 2 != 0) {
            no_of_clicks_filter_sub_gender_3++;
        }


        if (no_of_clicks_filter_sub_gender_1 % 2 == 0) {

            $('.filter_sub_gender_1').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_gender_1').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_gender_1++;
    });

    $('.filter_sub_gender_2').click(function () {
        selected_gender = "Female";
        console.log(selected_gender);
        $('.list_display').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.filter_sub_gender_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_sub_gender_3').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_sub_gender_1 % 2 != 0) {
            no_of_clicks_filter_sub_gender_1++;
        }
        if (no_of_clicks_filter_sub_gender_3 % 2 != 0) {
            no_of_clicks_filter_sub_gender_3++;
        }


        if (no_of_clicks_filter_sub_gender_2 % 2 == 0) {

            $('.filter_sub_gender_2').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_gender_2').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_gender_2++;
    });

    $('.filter_sub_gender_3').click(function () {

        selected_gender = "Other";
        console.log(selected_gender);
        $('.list_display').css({
            'display': 'none'
        })
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()
        $('.filter_sub_gender_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_sub_gender_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_sub_gender_1 % 2 != 0) {
            no_of_clicks_filter_sub_gender_1++;
        }
        if (no_of_clicks_filter_sub_gender_2 % 2 != 0) {
            no_of_clicks_filter_sub_gender_2++;
        }


        if (no_of_clicks_filter_sub_gender_3 % 2 == 0) {

            $('.filter_sub_gender_3').css({

                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_gender_3').css({

                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_gender_3++;
    });

    $('.filter_sub_education_level_1').click(function () {

        selected_educational_level = "School";
        console.log(selected_educational_level);

        $('.hide_grades_or_not').css({
            'display': 'flex'
        })
        $('.list_display').css({
            'display': 'none'
        })
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        $('.filter_sub_education_level_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_sub_education_level_3').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_sub_education_level_2 % 2 != 0) {
            no_of_clicks_filter_sub_education_level_2++;
        }
        if (no_of_clicks_filter_sub_education_level_3 % 2 != 0) {
            no_of_clicks_filter_sub_education_level_3++;
        }


        if (no_of_clicks_filter_sub_education_level_1 % 2 == 0) {

            $('.filter_sub_education_level_1').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_education_level_1').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_education_level_1++;
    });

    $('.filter_sub_education_level_2').click(function () {

        selected_educational_level = "College";
        console.log(selected_educational_level);
        $('.hide_grades_or_not').css({
            'display': 'none'
        })
        $('.list_display').css({
            'display': 'none'
        })
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        $('.filter_sub_education_level_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_sub_education_level_3').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_sub_education_level_1 % 2 != 0) {
            no_of_clicks_filter_sub_education_level_1++;
        }
        if (no_of_clicks_filter_sub_education_level_3 % 2 != 0) {
            no_of_clicks_filter_sub_education_level_3++;
        }


        if (no_of_clicks_filter_sub_education_level_2 % 2 == 0) {

            $('.filter_sub_education_level_2').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_education_level_2').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_education_level_2++;
    });

    $('.filter_sub_education_level_3').click(function () {

        selected_educational_level = "University";

        $('.hide_grades_or_not').css({
            'display': 'none'
        })
        $('.list_display').css({
            'display': 'none'
        })
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()
        $('.filter_sub_education_level_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_sub_education_level_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_sub_education_level_1 % 2 != 0) {
            no_of_clicks_filter_sub_education_level_1++;
        }
        if (no_of_clicks_filter_sub_education_level_2 % 2 != 0) {
            no_of_clicks_filter_sub_education_level_2++;
        }


        if (no_of_clicks_filter_sub_education_level_3 % 2 == 0) {

            $('.filter_sub_education_level_3').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_education_level_3').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_education_level_3++;
    });

    $('.filter_sub_language_1').click(function () {

        selected_language = "Urdu";

        $('.filter_sub_language_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.list_display').css({
            'display': 'none'
        })
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        if (no_of_clicks_filter_sub_language_2 % 2 != 0) {
            no_of_clicks_filter_sub_language_2++;
        }


        if (no_of_clicks_filter_sub_language_1 % 2 == 0) {

            $('.filter_sub_language_1').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_language_1').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_language_1++;
    });

    $('.filter_sub_language_2').click(function () {

        selected_language = "English";
        $('.list_display').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()
        $('.no_data_error').css({
            'display': 'none'
        })
        $('.filter_sub_language_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_sub_language_1 % 2 != 0) {
            no_of_clicks_filter_sub_language_1++;
        }


        if (no_of_clicks_filter_sub_language_2 % 2 == 0) {

            $('.filter_sub_language_2').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_sub_language_2').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }

        no_of_clicks_filter_sub_language_2++;
    });





    $('.filter_button_1').click(function () {
        selected_filter = "Date";
        console.log(selected_filter);

        $('.hide_dates_or_not').css({
            'display': 'flex'
        })

        $('.hide_gender_or_not').css({
            'display': 'none'
        })
        $('.hide_education_level_or_not').css({
            'display': 'none'
        })
        $('.hide_language_or_not').css({
            'display': 'none'
        })
        $('.hide_grades_or_not').css({
            'display': 'none'
        })
        $('.list_display').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.filter_button_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_3').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_4').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_button_2 % 2 != 0) {
            no_of_clicks_filter_button_2++;
        }
        if (no_of_clicks_filter_button_3 % 2 != 0) {
            no_of_clicks_filter_button_3++;
        }
        if (no_of_clicks_filter_button_4 % 2 != 0) {
            no_of_clicks_filter_button_4++;
        }



        if (no_of_clicks_filter_button_1 % 2 == 0) {

            $('.filter_button_1').css({
                'border': 'none',
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_button_1').css({
                'border': 'none',
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }
        no_of_clicks_filter_button_1++;
    });

    $('.filter_button_2').click(function () {
        selected_filter = "Gender";

        console.log(selected_filter);

        $('.hide_dates_or_not').css({
            'display': 'none'
        })

        $('.hide_gender_or_not').css({
            'display': 'flex'
        })
        $('.hide_education_level_or_not').css({
            'display': 'none'
        })
        $('.hide_language_or_not').css({
            'display': 'none'
        })
        $('.hide_grades_or_not').css({
            'display': 'none'
        })
        $('.list_display').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        $('.no_data_error').css({
            'display': 'none'
        })
        $('.filter_button_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_3').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_4').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_button_1 % 2 != 0) {
            no_of_clicks_filter_button_1++;
        }
        if (no_of_clicks_filter_button_3 % 2 != 0) {
            no_of_clicks_filter_button_3++;
        }
        if (no_of_clicks_filter_button_4 % 2 != 0) {
            no_of_clicks_filter_button_4++;
        }



        if (no_of_clicks_filter_button_2 % 2 == 0) {

            $('.filter_button_2').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_button_2').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }
        no_of_clicks_filter_button_2++;
    });

    $('.filter_button_3').click(function () {
        selected_filter = "Education Level";

        console.log(selected_filter);
        $('.hide_dates_or_not').css({
            'display': 'none'
        })

        $('.hide_gender_or_not').css({
            'display': 'none'
        })
        $('.hide_education_level_or_not').css({
            'display': 'flex'
        })
        $('.hide_language_or_not').css({
            'display': 'none'
        })
        $('.hide_grades_or_not').css({
            'display': 'none'
        })
        $('.list_display').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        $('.no_data_error').css({
            'display': 'none'
        })
        $('.filter_button_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_4').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_button_1 % 2 != 0) {
            no_of_clicks_filter_button_1++;
        }
        if (no_of_clicks_filter_button_2 % 2 != 0) {
            no_of_clicks_filter_button_2++;
        }
        if (no_of_clicks_filter_button_4 % 2 != 0) {
            no_of_clicks_filter_button_4++;
        }



        if (no_of_clicks_filter_button_3 % 2 == 0) {

            $('.filter_button_3').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_button_3').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }
        no_of_clicks_filter_button_3++;
    });

    $('.filter_button_4').click(function () {
        selected_filter = "Language";

        console.log(selected_filter);
        $('.hide_dates_or_not').css({
            'display': 'none'
        })

        $('.hide_gender_or_not').css({
            'display': 'none'
        })
        $('.hide_education_level_or_not').css({
            'display': 'none'
        })
        $('.hide_language_or_not').css({
            'display': 'flex'
        })
        $('.hide_grades_or_not').css({
            'display': 'none'
        })
        $('.list_display').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        $('.no_data_error').css({
            'display': 'none'
        })
        $('.filter_button_1').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_2').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });
        $('.filter_button_3').css({
            'border': '1px solid #B4ADB0',
            'border-radius': '6px',
            'background-color': '#fff',
            'color': '#C6C1C3'
        });

        if (no_of_clicks_filter_button_1 % 2 != 0) {
            no_of_clicks_filter_button_1++;
        }
        if (no_of_clicks_filter_button_2 % 2 != 0) {
            no_of_clicks_filter_button_2++;
        }
        if (no_of_clicks_filter_button_3 % 2 != 0) {
            no_of_clicks_filter_button_3++;
        }



        if (no_of_clicks_filter_button_4 % 2 == 0) {

            $('.filter_button_4').css({
                'border-radius': '6px',
                'background-color': '#3AAFA9',
                'color': '#fff'
            });
        }

        else {
            $('.filter_button_4').css({
                'border-radius': '6px',
                'background-color': '#fff',
                'color': '#C6C1C3'
            });
        }
        no_of_clicks_filter_button_4++;
    });

    var no_of_clicks_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var selected_grade = "";

    $('.circle_grade_option_0').click(function () {
        var i;
        var num;

        for (i = 1; (i % 10) != 0; i++) {
            num = i % 10;

            $('.list_display').css({
                'display': 'none'
            })
            $('.no_data_error').css({
                'display': 'none'
            })
            $('.list_headings_data').empty()
            var no_of_clicks_iterated = no_of_clicks_array[num]

            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[0] % 2 == 0) {

            // $('.circle_grade_option_0').addClass('selected_grade');
            selected_grade = 1


            $('.circle_grade_option_0').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white'
            });
        }

        else {
            $('.circle_grade_option_0').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });
        }

        no_of_clicks_array[0]++;

    })
    $('.circle_grade_option_1').click(function () {
        var i;
        var num;
        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })
        $('.list_headings_data').empty()

        for (i = 2; (i % 10) != 1; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });




            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[1] % 2 == 0) {

            selected_grade = 2

            $('.circle_grade_option_1').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white'
            });
        }

        else {
            $('.circle_grade_option_1').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });
        }

        no_of_clicks_array[1]++;
    })
    $('.circle_grade_option_2').click(function () {
        var i;
        var num;
        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()
        for (i = 3; (i % 10) != 2; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[2] % 2 == 0) {

            selected_grade = 3

            $('.circle_grade_option_2').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white'
            });
        }

        else {
            $('.circle_grade_option_2').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });
        }

        no_of_clicks_array[2]++;
    })
    $('.circle_grade_option_3').click(function () {
        var i;
        var num;

        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()

        for (i = 4; (i % 10) != 3; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[3] % 2 == 0) {

            selected_grade = 4

            $('.circle_grade_option_3').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white'
            });
        }

        else {
            $('.circle_grade_option_3').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });
        }

        no_of_clicks_array[3]++;
    })
    $('.circle_grade_option_4').click(function () {
        var i;
        var num;
        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()

        for (i = 5; (i % 10) != 4; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[4] % 2 == 0) {

            selected_grade = 5

            $('.circle_grade_option_4').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white'
            });
        }

        else {
            $('.circle_grade_option_4').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
            });
        }

        no_of_clicks_array[4]++;
    })
    $('.circle_grade_option_5').click(function () {
        var i;
        var num;

        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()

        for (i = 6; (i % 10) != 5; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[5] % 2 == 0) {

            selected_grade = 6

            $('.circle_grade_option_5').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white',
            });
        }

        else {
            $('.circle_grade_option_5').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });
        }

        no_of_clicks_array[5]++;
    })
    $('.circle_grade_option_6').click(function () {
        var i;
        var num;

        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()

        for (i = 7; (i % 10) != 6; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[6] % 2 == 0) {

            selected_grade = 7

            $('.circle_grade_option_6').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white',
            });
        }

        else {
            $('.circle_grade_option_6').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });
        }

        no_of_clicks_array[6]++;
    })
    $('.circle_grade_option_7').click(function () {
        var i;
        var num;

        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()

        for (i = 8; (i % 10) != 7; i++) {
            num = i % 10;
            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[7] % 2 == 0) {

            selected_grade = 8

            $('.circle_grade_option_7').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white',
            });
        }

        else {
            $('.circle_grade_option_7').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });
        }

        no_of_clicks_array[7]++;
    })
    $('.circle_grade_option_8').click(function () {
        var i;
        var num;

        $('.list_display').css({
            'display': 'none'
        })

        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()

        for (i = 9; (i % 10) != 8; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[8] % 2 == 0) {

            selected_grade = 9

            $('.circle_grade_option_8').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white',
            });
        }

        else {
            $('.circle_grade_option_8').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });
        }

        no_of_clicks_array[8]++;
    })

    $('.circle_grade_option_9').click(function () {
        var i;
        var num;

        $('.list_display').css({
            'display': 'none'
        })
        $('.no_data_error').css({
            'display': 'none'
        })

        $('.list_headings_data').empty()

        for (i = 0; (i % 10) != 9; i++) {
            num = i % 10;


            var no_of_clicks_iterated = no_of_clicks_array[num]
            $('.circle_grade_option_'.concat(num.toString())).css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });

            if (no_of_clicks_array[num] % 2 != 0) {
                no_of_clicks_array[num]++;
            }
        }


        if (no_of_clicks_array[9] % 2 == 0) {

            selected_grade = 10

            $('.circle_grade_option_9').css({
                'color': 'white',
                'background-color': '#3AAFA9',
                'border': '1px solid white',
            });
        }

        else {
            $('.circle_grade_option_9').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
            });
        }

        no_of_clicks_array[9]++;
    })

    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('id');
    console.log(myParam)

    $('.next_button').click(function () {
        var entered_month = $('#dob-month').val();
        var entered_year = $('#dob-year').val();
        var entered_day = $('#dob-day').val();

        if (selected_filter == "Date") {
            $("#loader").css({
                'display': 'block'
            });
            fetch(`${window.origin}/admin`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    selected_filter_sent: selected_filter,
                    entered_month_user: entered_month,
                    entered_year_user: entered_year,
                    entered_day_user: entered_day,
                    query_variable_in_url: myParam
                }),
                cache: 'no-store'
            }).then(function (response) {
                if (response.status == 200) {
                    response.json().then(function (data_received) {
                        var list_received = data_received['list_passed'];
                        $("#loader").css({
                            'display': 'none'
                        });

                        if (list_received.length == 0) {
                            $('.no_data_error').css({
                                'display': 'block'
                            })
                        }
                        else {

                            $('.list_display').css({
                                'display': 'block'
                            })
                            console.log(list_received)

                            for (var i = 0; i < list_received.length; i++) {
                                var id = i
                                $('.list_headings_data').append("<div class = single_entry_row id = " + id + "></div>")
                                var id_string = "#" + id.toString()
                                for (var j = 0; j < list_received[i].length; j++) {
                                    var temp = list_received[i][j]

                                    $(id_string).append(
                                        "<div class = single_entry_row_entry>" + temp + "</div>"

                                    )
                                }
                                $('.list_headings_data').append("<div class = clearfix></div>")

                            }
                        }

                    })
                }
            })

        }
        else if (selected_filter == "Gender") {
            $("#loader").css({
                'display': 'block'
            });

            fetch(`${window.origin}/admin`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    selected_filter_sent: selected_filter,
                    gender: selected_gender,
                    query_variable_in_url: myParam

                }),

                cache: 'no-store'
            }).then(function (response) {
                if (response.status == 200) {
                    response.json().then(function (data_received) {
                        var list_received = data_received['list_passed'];
                        $("#loader").css({
                            'display': 'none'
                        });

                        if (list_received.length == 0) {
                            $('.no_data_error').css({
                                'display': 'block'
                            })
                        }
                        else {

                            $('.list_display').css({
                                'display': 'block'
                            })
                            console.log(list_received)

                            for (var i = 0; i < list_received.length; i++) {
                                var id = i
                                $('.list_headings_data').append("<div class = single_entry_row id = " + id + "></div>")
                                var id_string = "#" + id.toString()
                                for (var j = 0; j < list_received[i].length; j++) {
                                    var temp = list_received[i][j]

                                    $(id_string).append(
                                        "<div class = single_entry_row_entry>" + temp + "</div>"

                                    )
                                }
                                $('.list_headings_data').append("<div class = clearfix></div>")

                            }
                        }

                    })
                }
            })
        }
        else if (selected_filter == "Language") {
            $("#loader").css({
                'display': 'block'
            });
            fetch(`${window.origin}/admin`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    selected_filter_sent: selected_filter,
                    language: selected_language,
                    query_variable_in_url: myParam
                }),
                cache: 'no-store'
            }).then(function (response) {
                if (response.status == 200) {
                    response.json().then(function (data_received) {
                        var list_received = data_received['list_passed'];
                        $("#loader").css({
                            'display': 'none'
                        });

                        if (list_received.length == 0) {
                            $('.no_data_error').css({
                                'display': 'block'
                            })
                        }
                        else {

                            $('.list_display').css({
                                'display': 'block'
                            })
                            console.log(list_received)

                            for (var i = 0; i < list_received.length; i++) {
                                var id = i
                                $('.list_headings_data').append("<div class = single_entry_row id = " + id + "></div>")
                                var id_string = "#" + id.toString()
                                for (var j = 0; j < list_received[i].length; j++) {
                                    var temp = list_received[i][j]

                                    $(id_string).append(
                                        "<div class = single_entry_row_entry>" + temp + "</div>"

                                    )
                                }
                                $('.list_headings_data').append("<div class = clearfix></div>")

                            }
                        }

                    })
                }
            })
        }
        else {
            $("#loader").css({
                'display': 'block'
            });

            fetch(`${window.origin}/admin`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    selected_filter_sent: selected_filter,
                    education_level: selected_educational_level,
                    grade: selected_grade,
                    query_variable_in_url: myParam
                }),
                cache: 'no-store'
            }).then(function (response) {
                if (response.status == 200) {
                    response.json().then(function (data_received) {
                        var list_received = data_received['list_passed'];
                        $("#loader").css({
                            'display': 'none'
                        });

                        if (list_received.length == 0) {
                            $('.no_data_error').css({
                                'display': 'block'
                            })
                        }
                        else {

                            $('.list_display').css({
                                'display': 'block'
                            })
                            console.log(list_received)

                            for (var i = 0; i < list_received.length; i++) {
                                var id = i
                                $('.list_headings_data').append("<div class = single_entry_row id = " + id + "></div>")
                                var id_string = "#" + id.toString()
                                for (var j = 0; j < list_received[i].length; j++) {
                                    var temp = list_received[i][j]

                                    $(id_string).append(
                                        "<div class = single_entry_row_entry>" + temp + "</div>"

                                    )
                                }
                                $('.list_headings_data').append("<div class = clearfix></div>")

                            }
                        }

                    })
                }
            })

        }
    })
})(jQuery);

