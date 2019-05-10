$(document).ready(function() {
  $.get('https://api.adviceslip.com/advice', function(data) {

    data = JSON.parse(data);
    console.log(data.slip.advice);

    const advice = data.slip.advice;

    $('#advice1').html(advice);
  });

  $.get('https://api.adviceslip.com/advice', function(data) {

    data = JSON.parse(data);
    console.log(data.slip.advice);

    const advice = data.slip.advice;

    $('#advice2').html(advice);
  });

  $.get('https://api.adviceslip.com/advice', function(data) {

    data = JSON.parse(data);
    console.log(data.slip.advice);

    const advice = data.slip.advice;

    $('#advice3').html(advice);
  });

  $.get('https://api.adviceslip.com/advice', function(data) {

    data = JSON.parse(data);
    console.log(data.slip.advice);

    const advice = data.slip.advice;

    $('#advice4').html(advice);
  });

  $.get('https://api.adviceslip.com/advice', function(data) {

    data = JSON.parse(data);
    console.log(data.slip.advice);

    const advice = data.slip.advice;

    $('#advice5').html(advice);
  });

  $.get('https://api.adviceslip.com/advice', function(data) {

    data = JSON.parse(data);
    console.log(data.slip.advice);

    const advice = data.slip.advice;

    $('#advice6').html(advice);
  });
});
