$(document).ready(function() {
    $('.js-like').on('click', function(e) {
        e.preventDefault();
        
        $(this).text('Liked').closest('.news__item').addClass('is-liked');
    });

    $('.js-add').on('click', function(e) {
        e.preventDefault();

        $('.js-form').slideToggle();
    });

    $('.js-show-modal').on('click', function(e) {
        e.preventDefault();

        $('.js-modal, .js-modal-overlay').fadeToggle();
    });

    $('.js-modal-overlay').on('click', function(e) {
        e.preventDefault();

        $('.js-modal, .js-modal-overlay').fadeOut();
    });
})