$(document).ready(function(){
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var groceries = ['produce', 'bread', 'animal', 'snack'];

    var someThings = groceries.map(function(grocery) {
      return $('input#' + grocery).val().toUpperCase();
    });

    someThings.sort();
    console.log(someThings);

    groceries.forEach(function(ele,ind) {
      $("." + ele).text(someThings[ind]);
    });
    
    $('form').hide();
    $('#story').show();
  });
});
