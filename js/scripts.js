//business logic
    var valid = function(validNumber) {
      if ((number >= 1) && (number !== NaN)) {
      return true;
      alert("That is a valid number.");
      } else {
      return alert("Please enter a number greater than 0.");
      }
    };

    var pingPong = function(number) {
      for (var index = 0; index <= userNumber; index += userNumber) {
        if (userNumber % 15 === 0) {
          $(".output").append("<li>" + "PINGPONG!" + "</li>");
      } if (userNumber % 5 === 0) {
          $(".output").append("<li>" + "PONG!" + "</li>");
      } if (userNumber % 3 === 0) {
          $(".output").append("<li>" + "PING!" + "</li>");
      } else {
          $(".output").append("<li>" + userNumber + "</li>");
        }
      }
    }


//user interface logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefalit();

    var userNumber = $(parseInt("#value").val());
    console.log(userNumber);

    $("#result").show();
    $(".result").text(pingPong);
  });
});
