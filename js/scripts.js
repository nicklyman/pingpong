//business logic
    var valid = function(validNumber) {
      if ((validNumber >= 1) && (validNumber !== NaN)) {
        return true;
      } else {
        return false;
        alert("Please enter a number greater than 0.");
      }
    };

    var pingPong = function(userNumber) {
      // if (true);
      for (var index = 0; index < userNumber; index += 1) {
        if (userNumber % 15 === 0) {
          $(".output").append("<li>" + "PINGPONG!" + "</li>");
      } if (userNumber % 5 === 0) {
          $(".output").append("<li>" + "PONG!" + "</li>");
      } if (userNumber % 3 === 0) {
          $(".output").append("<li>" + "PING!" + "</li>");
      } else {
          $(".output").append("<li>" + (index + 1) + "</li>");
        }
      }
    }


//user interface logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();

    var validNumber = parseInt($("input#value").val());
    var ouput = pingPong(validNumber);

    $(".output").show();
    // $("#value").text(validNumber)
    // $(".result").text(pingPong);
  });
});
