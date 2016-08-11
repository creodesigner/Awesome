(function ($) {
  var anything = {
    formSubmit: function(e){
      e.preventDefault();

      alert('Form submitted yo!!!!!! Brosky.');
    }
  };

  $(document).ready(function () {
    $('#form').on('submit', anything.formSubmit);
  });
}(jQuery));