$('.showcase__slider').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1
});

$('.showcase_prev').click(function(){
    $('.showcase__slider').slick('slickPrev');
});

$('.showcase_next').click(function(){
    $('.showcase__slider').slick('slickNext');
});


// menu --------

$(document).ready(function() {
// Указываем переменные
    var accordion_head = $('.sidenav  li > a'),
        accordion_body = $('.sidenav li > .sub-menu');

// Функция клика
    accordion_head.on('click', function(event) {
// Скрывает открытый раздел по повторному клику
        event.preventDefault();
        if ($(this).attr('class') == 'active'){
            accordion_body.slideUp('normal')
            $(this).removeClass('active');
            return false;
        }
// Открывает следующий, скрывая открытый
        if ($(this).attr('class') != 'active'){
            accordion_body.slideUp('normal');
            $(this).next().stop(true,true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }
    });
});


$(".sidenav_open").click(function(){
    $(".sidenav").animate({left:'0'},500);
    $(".wrapper").animate({left:'0'},500);
    $(".sidenav_open").hide();
    $(".sidenav_close").show();
});


$(".sidenav_close").click(function(){
    $(".sidenav").animate({left:'-240'},500);
    $(".wrapper").animate({left:'-240'},500);
    $(".sidenav_close").hide();
    $(".sidenav_open").show();
});


$(function(){
    var navHeight = $('.sidenav_inner').height();
    var browserHeight = $(window).height();
    console.log(navHeight);
    console.log(browserHeight);

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > (navHeight - browserHeight)) $('.sidenav_inner').addClass('sidenav_fixed');
        else $('.sidenav_inner').removeClass('sidenav_fixed');
    })
});

