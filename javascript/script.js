$(document).ready(function() {
    var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzaq064cUrTd4nvURJyl2TxQoUEKSDv59tDdxqZ5ND-yq93j1Et/exec'


$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    
  );
})


    });