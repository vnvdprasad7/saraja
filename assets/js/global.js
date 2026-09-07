//======== Mobile Menu
$('.nav-icon,.overlay').click(function () {
    $('.nav-icon').toggleClass('open');
    $('body').toggleClass('open-menu');
});

//======== Auto Year update
$('#yearUpdate').html(new Date().getFullYear());

//======== Scroll Top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        $('header').addClass('sickIt');
    } else {
        $('.back-to-top').fadeOut('slow');
        $('header').removeClass('sickIt');
    }
});

//======== Mega Drop Down
function megaMenu() {
    if ($(window).width() < 1100) {
        $('.drop-down-toggle').off('click').on('click', function () {
            $(this).next('.sub-nav-main').stop(true, true).slideToggle();
            $(this).toggleClass('active');
        });

    } else {

        $('.mega-drop-down').off('click');
        $('.sub-nav-main').removeAttr('style');
        $('.mega-drop-down').removeClass('active');
    }
}

$(document).ready(function () {
    megaMenu();
});

$(window).on('resize', function () {
    megaMenu();
});