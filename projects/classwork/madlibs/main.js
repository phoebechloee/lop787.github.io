$(function(){

$.get('
https://phoebechloee.github.io/api.json', function(data) {
  console.log(data);
  var adjective1 = data.adjective1;

$('.word-adjective-1').html(data.adjective1);
$('.art-supply').html(data.artSupply);

}).fail(function() {
  console.log('Error in GET request. Handle the error gracefully.');
});
}
