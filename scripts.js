$(document).ready(function(){
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var groceries = ['produce', 'bread', 'animal', 'snack'];

    var someThings = groceries.map(function(grocery) {
      return $('input#' + grocery).val().toUpperCase();
    });

    $('form').hide();

    someThings.sort();
    console.log(someThings);
    groceries.forEach(function(ele,index) {
      $("ul").append(someThings[index]);
    });

    $('#story').show();
  });
});
