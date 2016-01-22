var divisibleBy = function(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    return "ping";
  } else if (number % 5 === 0 && number % 3 !== 0) {
    return "pong";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "pingpong";
  } else {
    return number;
  }
};

var looptyLoo = function(number) {
  var arrayOne = [];
  for (var i = 1; i <= number; i++) {
    arrayOne.push(divisibleBy(i));
  }
    return arrayOne;
};

$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    $("ul").empty();
    var userInput = parseInt($("input#userInput").val());
    var numberList = pingPong(userInput);

    for (var i = 0; i < numberList.length; i++ ) {
        $(".numberList").append("<li>" + numberList[i] + "</li>")
    };
    event.preventDefault();
  });
});
