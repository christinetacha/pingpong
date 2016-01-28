var divisibleBy = function(number) {
  if (number % 3 === 0 && number % 5 == 0) {
    return "pingpong";
  } else if (number % 5 === 0) {
    return "pong";
  } else if (number % 3 === 0) {
    return "ping";
  } else {
    return number;
  }
};

var looptyLoo = function(number) {
  var divisibleResult = [];
  for (var i = 1; i <= number; i++) {
    divisibleResult.push(divisibleBy(i));
  }
    return divisibleResult;
};

$(document).ready(function() {
    $("form#pingPong").submit(function(event) {
      $(".result").show();
    });
  });
