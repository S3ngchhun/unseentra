$('header .ham_icon').click(function() {
    $('.header_menu').toggle(150);

});

$('.search_modal .close_search').click(function() {
    $('.search_modal').removeClass('--active');
    $('.input_search').val('');
});

$('.search').click(function() {
    $('.search_modal').addClass('--active');
    $('.input_search').focus();
});

$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
});

$('.tab_items.overview_tab').click(function() {
    if (!$('.tab_items.overview').hasClass('.active')) {
        for (i = 0; i < $('.tab_items').length; i++) {
            $('.tab_items').removeClass('active')
        }
        $('.tab_items.overview').addClass('active');
        for (i = 0; i < $('.tab_content').length; i++) {
            $('.tab_content').removeClass('active');
        }
        $('.tab_content.overview').addClass('active');
    }
});
$('.tab_items.attractions_tab').click(function() {
    if (!$('.tab_items.attractions_tab').hasClass('.active')) {
        for (i = 0; i < $('.tab_items').length; i++) {
            $('.tab_items').removeClass('active')
        }
        $('.tab_items.attractions_tab').addClass('active');
        for (i = 0; i < $('.tab_content').length; i++) {
            $('.tab_content').removeClass('active');
        }
        $('.tab_content.attractions_and_shows').addClass('active');
    }
});
$('.tab_items.tour_tab').click(function() {
    if (!$('.tab_items.tour_tab').hasClass('.active')) {
        for (i = 0; i < $('.tab_items').length; i++) {
            $('.tab_items').removeClass('active')
        }
        $('.tab_items.tour_tab').addClass('active');
        for (i = 0; i < $('.tab_content').length; i++) {
            $('.tab_content').removeClass('active');
        }
        $('.tab_content.tour').addClass('active');
    }
});