//======== Mobile Menu
$('.main-nav-icon,.main-overlay').click(function () {
    $('.main-nav-icon').toggleClass('open');
    $('body').toggleClass('open-menu');
});

//======== Mobile Menu
$('.extra-menu,.overlay').click(function () {
    $('.extra-menu').toggleClass('open');
    $('body').toggleClass('open-extra-menu');
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

        $('.drop-down-toggle, .more-toggle').off('click').on('click', function (e) {
            e.preventDefault();

            $(this)
                .closest('li')
                .children('.sub-nav-main')
                .stop(true, true)
                .slideToggle();

            $(this).toggleClass('active');
        });

    } else {

        $('.drop-down-toggle, .more-toggle').off('click');

        $('.sub-nav-main').removeAttr('style');

        $('.drop-down-toggle, .more-toggle').removeClass('active');
    }
}

$(document).ready(function () {
    megaMenu();
});

$(window).on('resize', function () {
    megaMenu();
});
