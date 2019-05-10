$(document).ready(function() {
  $.get('https://api.adviceslip.com/advice', function(data) {

    console.log(data);

    var weather = data.weather[0];

    // $('body').html('The weather is ' + weather.description);
  });
});
