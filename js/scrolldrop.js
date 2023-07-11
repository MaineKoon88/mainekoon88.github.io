$(document).ready(function() {
    $('.dropbtn').on('scroll', function(e) {
      e.preventDefault();
      $('.dropdown-content').toggleClass('show');
    });
  
    $(document).on('scroll', function(e) {
      if (
        !$('.dropbtn').is(e.target) &&
        !$('.dropbtn ion-icon').is(e.target) &&
        !$('.dropdown-content').is(e.target) &&
        $('.dropdown-content').has(e.target).length === 0
      ) {
        $('.dropdown-content').removeClass('show');
      }
    });
  
    $(window).on('scroll', function() {
      if ($(window).width() <= 990) {
        $('.dropdown-content').removeClass('show');
      }
    });
  });
  