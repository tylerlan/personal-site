(function($) {
  // Remove no-js class
  $('html').removeClass('no-js');

  // Animate to section when nav is clicked
  $('.local-ref').click(function(e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass('no-scroll')) return;

    e.preventDefault();
    var heading = $(this).attr('href');
    var scrollDistance = $(heading).offset().top;

    $('html, body').animate(
      {
        scrollTop: scrollDistance + 'px',
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1,
    );

    // Hide the menu once clicked if mobile
    if ($('header').hasClass('active')) {
      $('header, body').removeClass('active');
    }
  });

  // Scroll to top
  $('#to-top').click(function() {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500,
    );
  });

  // Scroll to first element
  $('#lead-down span').click(function() {
    var scrollDistance = $('#cover').next().offset().top;
    $('html, body').animate(
      {
        scrollTop: scrollDistance + 'px',
      },
      500,
    );
  });

  // Open mobile menu
  $('#mobile-menu-open').click(function() {
    $('header, body').addClass('active');
  });

  // Close mobile menu
  $('#mobile-menu-close').click(function() {
    $('header, body').removeClass('active');
  });
})(jQuery);
