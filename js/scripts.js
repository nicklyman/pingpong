//business logic
    var pingPong = function(userNumber) {
      for (var index = 1; index <= userNumber; index += 1) {
        if (index <= 0) {
          alert("Please enter a valid number greater than 0.");
        } else if ((index > 0) && (index % 15 === 0)) {
            $(".output").append("<li>" + "PINGPONG!" + "</li>")
        } else if ((index > 0) && (index % 5 === 0)) {
            $(".output").append("<li>" + "PONG!" + "</li>")
        } else if ((index > 0) && (index % 3 === 0)) {
            $(".output").append("<li>" + "PING!" + "</li>")
        } else if (index > 0) {
            $(".output").append("<li>" + (index) + "</li>")
        }
      }
    };

//user interface logic
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("input#value").val());
    var output = pingPong(userNumber);

    $(".output").show();
  });
});

// I think this is what I need but can't get it to work... document.getElementById(".output").reset();
