$('.hamburger').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.navbar').toggleClass('navbar-open');
});

$('.navbar a').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.navbar').toggleClass('navbar-open');
});