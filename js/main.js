$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.navbar').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 501) {
            $('.navbar').removeClass('fixed-top');
        }
    })
});

$(".navbar-dark .navbar-collapse ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
});

$("#section-parallax .col-sm-8 a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
});

$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
});


$('.js-wp-1').waypoint(function (direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-wp-2').waypoint(function (direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function (direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function (direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});