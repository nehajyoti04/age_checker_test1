//select country
(function($) {
  $('document').ready(function() {
    $('#edit-list-of-countries').change(function() {
      //alert($(this).find('option:selected').html());
      var selected_country = $(this).find('option:selected').val();
      //create a cookies
      var cookie_name = "country_selected=" + selected_country + "; path=/";
      document.cookie = cookie_name;
      location.reload();

    });
  });
})(jQuery);