(function ($) {
  var anything = {
    formSubmit: function(e){
      e.preventDefault();

      console.log($('#form').serializeArray());
    }
  };

  $(document).ready(function () {
    $('#form').on('submit', anything.formSubmit);
  });
}(jQuery));