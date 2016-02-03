var divisibleBy = function(number) {
  var divisibleResult = [];
  for (var i = 1; i <= number; i++) {
    if (i% 3 === 0 && i % 5 == 0) {
      divisibleResult.push("pingpong");
    } else if (i % 5 === 0) {
      divisibleResult.push("pong");
    } else if (i % 3 === 0) {
      divisibleResult.push("ping");
    } else {
      divisibleResult.push(i);
    }
  }
  return divisibleResult;
};

$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    $(".numberList").empty();
    var numberToCountTo = parseInt($("input#userInput").val());
    var countArray = divisibleBy(numberToCountTo);
    for (var i = 0; i < countArray.length; i++) {
      $(".numberList").append("<li>" + countArray[i] + "</li>");
    }
    event.preventDefault();
  });
});



// $(document).ready(function() {
//     $("form#pingPong").submit(function(event) {
//       var userInput = parseInt($("input#userInput").val());
//       looptyLoo(userInput);
//       event.preventDefault();
//     });
//   });
