// ********* Part 1: Timer function (taken from https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer)
var score = 0;
var count = 5;
function timer() {
  count--;
  if (count <= 0) {
    clearInterval(counter);
    //counter ended, display alert
    alert("Time's up!");
  }
  //Do code for showing the number of seconds here
  document.getElementById("timer").innerHTML = count + " seconds left"; // watch for spelling
}

// This function will be called later to start the timer when the start button is pressed.
function startClock() {
  var counter = setInterval(timer, 1000); // 1000 will run it every 1 second
  timer();
}

// Initial start screen
var twrapper = document.getElementById("title-body");
var titlehead = document.createElement("header");
titlehead.classList.add("title");
twrapper.appendChild(titlehead);

// Creates introduction screen when the quiz loads up
var intro = document.createElement("h1");
intro.innerHTML = "Welcome to the JavaScript Coding Quiz!";
titlehead.appendChild(intro);
var description = document.createElement("p");
description.innerHTML =
  "You will have 2 minutes to answer all 5 questions.  If you get an answer wrong, you lose 10 seconds!  Pace yourself, and Good Luck!";
titlehead.appendChild(description);

var buttonPosition = document.createElement("p");
var startButton = document.createElement("input");
startButton.type = "submit";
startButton.value = "Start";
buttonPosition.setAttribute("id", "start");
titlehead.appendChild(buttonPosition);
buttonPosition.appendChild(startButton);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ********* Part 2: Setting up the quiz questions

startButton.addEventListener("click", function() {
  twrapper.style.visibility = "hidden";
  startClock();

  // Setting up question 1 after clicking the start button
  var qwrapper = document.getElementById("main-body");
  var questionHead = document.createElement("h1");
  questionHead.innerHTML = questions[0].q;
  qwrapper.appendChild(questionHead);

  for (var i = 0; i < 4; i++) {
    var buttonPosition = document.createElement("p");
    var answerButton = document.createElement("input");
    answerButton.type = "button";
    answerButton.value = questions[0].o[i];
    answerButton.classList.add("answer");
    questionHead.appendChild(buttonPosition);
    buttonPosition.appendChild(answerButton);

    answerButtons = document.getElementsByClassName("answer");

    // Setting up question 2 after clicking an answer on question 1
    answerButtons[i].addEventListener("click", function() {
      questionHead.innerHTML = questions[1].q;
      for (var i = 0; i < 4; i++) {
        var buttonPosition = document.createElement("p");
        var answerButton = document.createElement("input");
        answerButton.type = "button";
        answerButton.value = questions[1].o[i];
        answerButton.classList.add("answer");
        questionHead.appendChild(buttonPosition);
        buttonPosition.appendChild(answerButton);

        answerButtons = document.getElementsByClassName("answer");

        // Setting up question 3 after clicking an answer on question 2
        answerButtons[i].addEventListener("click", function() {
          questionHead.innerHTML = questions[2].q;
          for (var i = 0; i < 4; i++) {
            var buttonPosition = document.createElement("p");
            var answerButton = document.createElement("input");
            answerButton.type = "button";
            answerButton.value = questions[2].o[i];
            answerButton.classList.add("answer");
            questionHead.appendChild(buttonPosition);
            buttonPosition.appendChild(answerButton);
    
            answerButtons = document.getElementsByClassName("answer");

            // Setting up question 4 after clicking an answer on question 3
            answerButtons[i].addEventListener("click", function() {
              questionHead.innerHTML = questions[3].q;
              for (var i = 0; i < 4; i++) {
                var buttonPosition = document.createElement("p");
                var answerButton = document.createElement("input");
                answerButton.type = "button";
                answerButton.value = questions[3].o[i];
                answerButton.classList.add("answer");
                questionHead.appendChild(buttonPosition);
                buttonPosition.appendChild(answerButton);
        
                answerButtons = document.getElementsByClassName("answer");

                // Setting up question 5 after clicking an answer on question 4
                answerButtons[i].addEventListener("click", function() {
                  questionHead.innerHTML = questions[4].q;
                  for (var i = 0; i < 4; i++) {
                    var buttonPosition = document.createElement("p");
                    var answerButton = document.createElement("input");
                    answerButton.type = "button";
                    answerButton.value = questions[4].o[i];
                    answerButton.classList.add("answer");
                    questionHead.appendChild(buttonPosition);
                    buttonPosition.appendChild(answerButton);
            
                    answerButtons = document.getElementsByClassName("answer");

                    // Displaying the user's final score and asking for their initials
                    answerButtons[i].addEventListener("click", function() {
                      questionHead.innerHTML = "All done! Your final score is " + score + " out of 5. Enter your initials in the box below.";
                      
                      var buttonPosition = document.createElement("p");
                      var nameForm = document.createElement("input");
                      nameForm.type = "text";
                      nameForm.placeholder = "Player Initials";

                      questionHead.appendChild(buttonPosition);
                      buttonPosition.appendChild(nameForm);

                      nameForm.addEventListener("submit", function(){
                        
                      });

                    })
                  }
                });
              }
            });
          }
        })
      }
    });
  }
});

// checks if the answer clicked is correct
