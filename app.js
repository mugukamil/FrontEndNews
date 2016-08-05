$(document).ready(function() {
    $('.js-like').on('click', function(e) {
        e.preventDefault();
        
        $(this).text('Liked').closest('.news__item').addClass('is-liked');
    });

    $('.js-add').on('click', function(e) {
        e.preventDefault();

        $('.js-form').slideToggle();
    });
})