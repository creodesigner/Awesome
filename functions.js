(function ($) {
  var anything = {
    formSubmit: function(e){
      var url = 'https://spreadsheets.google.com/feeds/list/1DD7CJGb7Hd0YcvgYP7TFjUD35WYYjrG9iaf2CQOcSgI/';
      e.preventDefault();

      $.post(url, $('#form').serialize(), function(){
        alert('Success!');
      }).fail(function(data){
        alert('FAILED. ' + data.statusText);
      });
    }
  };

  $(document).ready(function () {
    $('#form').on('submit', anything.formSubmit);
  });
}(jQuery));