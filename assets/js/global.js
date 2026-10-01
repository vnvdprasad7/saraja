//======== Mobile Menu
$('.main-nav-icon,.main-overlay').click(function () {
    $('.main-nav-icon').toggleClass('open');
    $('body').toggleClass('open-menu');
});

//======== Mobile Menu
$('.extra-menu,.extra-menu-overlay').click(function () {
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

        $('nav ul li a.show-sub-menu').on('click', function (e) {
            e.preventDefault();

            const $this = $(this);
            const $submenu = $this.closest('li').children('.sub-nav-main');

            // Close other submenus
            $('.sub-nav-main').not($submenu).stop(true, true).slideUp(300);
            // Remove active from other links
            $('.show-sub-menu').not($this).fadeIn('li').removeClass('active');
            // Toggle current submenu
            $submenu.stop(true, true).slideToggle(300);
            $this.parent('li').toggleClass('active');
        });

        // $('.show-sub-menu').off('click').on('click', function (e) {
        //     e.preventDefault();

        //     $(this)
        //         .closest('li')
        //         .children('.sub-nav-main')
        //         .stop(true, true)
        //         .slideToggle();

        //     $(this).toggleClass('active');
        // });


        // $('nav ul li a.show-sub-menu').on('click', function () {
        //     $(this).closest('li').children('.sub-nav-main').stop(true, true).slideToggle();
        //     $('.sub-nav-main').not($(this).closest('li').children('.sub-nav-main')).slideUp();
        //     $(this).toggleClass('active');
        //     $('.show-sub-menu').not($(this)).removeClass('active');
        // });

    } else {

        // $('.show-sub-menu').off('click');

        // $('.sub-nav-main').removeAttr('style');

        // $('.show-sub-menu').removeClass('active');
    }
}

$(document).ready(function () {
    megaMenu();
});

$(window).on('resize', function () {
    megaMenu();
});
