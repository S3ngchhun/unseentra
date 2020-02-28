$('header .ham_icon').click(function () {
    $('.header_menu').toggle(150);

});

$('.search_modal .close_search').click(function () {
    $('.search_modal').removeClass('--active');
    $('.input_search').val('');
});

$('.search').click(function () {
    $('.search_modal').addClass('--active');
    $('.input_search').focus();
});

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
});