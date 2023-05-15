$(window).scroll(function(e){
    $el = $('.header');
    $el.toggleClass('header_bar', $(this).scrollTop() > 0); 
}); 