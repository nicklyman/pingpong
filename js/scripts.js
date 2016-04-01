//business logic
    var valid = function(validUserNumber) {
      if ((validNumber >= 1) && (validNumber !== NaN)) {
        return true;
      } else {
        return false;
        alert("Please enter a number greater than 0.");
      }
    };

    var pingPong = function(userNumber) {
      // if (true);
      for (var index = 0; index <= userNumber; index += 1) {
        if ((index > 0) && (index % 15 === 0)) {
          $(".output").append("<li>" + "PINGPONG!" + "</li>");
      } else if ((index >0) && (index % 5 === 0)) {
          $(".output").append("<li>" + "PONG!" + "</li>");
      } else if ((index >0) && (index % 3 === 0)) {
          $(".output").append("<li>" + "PING!" + "</li>");
      } else if (index > 0) {
          $(".output").append("<li>" + (index) + "</li>");
        }
      }
    }


//user interface logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();

    var validNumber = parseInt($("input#value").val());
    var output = pingPong(validNumber);

    $(".output").show();
    // $("#value").text(validNumber)
    // $(".result").text(pingPong);
  });
});
