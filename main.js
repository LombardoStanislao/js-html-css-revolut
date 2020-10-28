$(document).ready(function () {

    $('.menu-title').mouseenter(function() {
        $('.dropdown-menu.active').removeClass('active');
        $(this).next().addClass('active');
    });

    $('.dropdown-menu').mouseleave(function() {
        $(this).removeClass('active')
    });
});
