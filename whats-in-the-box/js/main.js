(function ($) {
  $(function () {
    $('#open-button').click(function () {
      $(this).prop('disabled', true).text('Opening...');
      $('#box-image').attr('src', 'img/open.gif?v=0');
    });
  });
})(jQuery);