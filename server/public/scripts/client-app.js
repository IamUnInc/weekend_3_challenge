$(document).ready(function(){
console.log("im working");
$('#calc-form').on('click', '#restart', function () {
location.reload();
});
//adding numbers
$('#calc-form').on('click', '#add', function () {
    event.preventDefault();
    console.log("trying to add");
  var numbers = {};

  $.each($('#calc-form').serializeArray(), function (i, field) {
      numbers[field.name] = field.value;
      numbers['type'] = 'add';
    });
  console.log('Numbers submitted are ', numbers);
$.ajax({
  type: 'POST',
  url: '/number',
  data: numbers,
  success: function (response) {
    console.log('POST /Calculator works!');
    getNumbers();
  },

  error: function (response) {
    console.log('Attempted POST /songs, did not work');
    alert("Please Check Your Entry");
  }
  });
});
//subtracting numbers
$('#calc-form').on('click', '#subtract', function () {
    event.preventDefault();
    console.log("trying to subtract");
  var numbers = {};

  $.each($('#calc-form').serializeArray(), function (i, field) {
      numbers[field.name] = field.value;
      numbers['type'] = 'subtract';
    });
  console.log('Numbers submitted are ', numbers);

$.ajax({
  type: 'POST',
  url: '/number',
  data: numbers,
  success: function (response) {
    console.log('POST /Calculator works!');
    getNumbers();
  },

  error: function (response) {
    console.log('Attempted POST /songs, did not work');
    alert("Please Check Your Entry");
  }
  });
});
//multipyling numbers
$('#calc-form').on('click', '#multiply', function () {
    event.preventDefault();
    console.log("trying to multiply");
  var numbers = {};

  $.each($('#calc-form').serializeArray(), function (i, field) {
      numbers[field.name] = field.value;
      numbers['type'] = 'multiply';
    });
  console.log('Numbers submitted are ', numbers);

$.ajax({
  type: 'POST',
  url: '/number',
  data: numbers,
  success: function (response) {
    console.log('POST /Calculator works!');
    getNumbers();
  },

  error: function (response) {
    console.log('Attempted POST /songs, did not work');
    alert("Please Check Your Entry");
  }
  });
});
//dividing numbers
$('#calc-form').on('click', '#divide', function () {
    event.preventDefault();
    console.log("trying to divide");
  var numbers = {};

  $.each($('#calc-form').serializeArray(), function (i, field) {
      numbers[field.name] = field.value;
      numbers['type'] = 'divide';
    });
  console.log('Numbers submitted are ', numbers);

$.ajax({
  type: 'POST',
  url: '/number',
  data: numbers,
  success: function (response) {
    console.log('POST /Calculator works!');
    getNumbers();
  },

  error: function (response) {
    console.log('Attempted POST /songs, did not work');
    alert("Please Check Your Entry");
  }
  });
});

function getNumbers() {
  $.ajax({
    type: 'GET',
    url: '/number',
    success: function (answer) {
      console.log(answer);
        $('#result').append('<div id="answer">' + answer + '</div>');
      },

    error: function () {
    console.log('GET /number did not work');
    }
  });
}
});
