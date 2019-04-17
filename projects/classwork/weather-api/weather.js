$(function()) {
  console.log('hello')
  $.get('http://api.openweathermap.org/data/2.5/weather?q=New+York&appid=79d02e1bba751df3b11a36fd92b57e42', function(data) {
  // The get request fires a callback function when the API request finishes
  console.log(data);
  // The data object contains all the information returned in the API
  var weather = data.weather[0];
  // In this case, the most interesting bit of data is in the weather key
  // Now do something interesting with the data!
  $('body').html('The weather is ' + weather.description);
});
}
