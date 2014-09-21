//Array of correct answers.

var correctList = ["California", 
                   "Texas", 
                   "New York", 
                   "Florida", 
                   "Illinois", 
                   "Pennsylvania", 
                   "Ohio", 
                   "Georgia", 
                   "Michigan", 
                   "North Carolina"];

//Function for checking if an answer is in the array.

var checkGuess = function(str) {
	if (correctList.indexOf(str) > -1) {
		return true;
	}
	else {
		return false;
	}
};

//JQuery for clicking the button.

$(document).ready(function() {
	$("#guessbutton").click(function() {

    //Check the answer using the above function and reveal them as they are guessed.

  	var thisGuess = $('input[name=guessfield]').val();

  	if (checkGuess(thisGuess)) {   

  		if (thisGuess == "California") {
  			$("#california").css("opacity", "100")
  		}

  		else if (thisGuess == "Texas") {
  			$("#texas").css("opacity", "100")
  		}

  		else if (thisGuess == "New York") {
  			$("#newyork").css("opacity", "100")
  		}

  		else if (thisGuess == "Florida") {
  			$("#florida").css("opacity", "100")
  		}

  		else if (thisGuess == "Illinois") {
  			$("#illinois").css("opacity", "100")
  		}

  		else if (thisGuess == "Pennsylvania") {
  			$("#pennsylvania").css("opacity", "100")
  		}

  		else if (thisGuess == "Ohio") {
  			$("#ohio").css("opacity", "100")
  		}

  		else if (thisGuess == "Georgia") {
  			$("#georgia").css("opacity", "100")
  		}

  		else if (thisGuess == "Michigan") {
  			$("#michigan").css("opacity", "100")
  		}

  		else if (thisGuess == "North Carolina") {
  			$("#northcarolina").css("opacity", "100")
  		}

  	}

    //Display incorrect guesses in the appropriate div.

  	else {
  		$(".incorrect").append('<div class="incorrectitem">' + thisGuess + '</div>');
  	}

    //Clear the text box upon click.

  	$('input[name=guessfield]').val(''); 

  });

});