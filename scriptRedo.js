// ********* Part 1: Timer function (taken from https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer)
var score = 0;
var count = 3;
var qwrapper = document.getElementById("main-body");
var questionHead = document.createElement("h1");

// sets initial parameters for usernames and score entries
if (localStorage.getItem("usernameList") === null && localStorage.getItem("scoreList") === null){
var usernames = [];
var scores = [];
localStorage.setItem("usernameList", JSON.stringify(usernames));
localStorage.setItem("scoreList", JSON.stringify(scores));
}

// --------------------------------------------------------------------------------------------------------------------------------------

// This function will be called later to start the timer when the start button is pressed.
function startClock() {
  counter = setInterval(timer, 1000); // 1000 will run it every 1 second
  timer();
}

function timer() {
  count--;
  if (count <= 0) {
    clearInterval(counter);
    //counter ended, display alert
    alert("Time's up!");
    questionHead.innerHTML =
      "All done! Your final score is " +
      score +
      " out of 5. Enter your initials in the box below.";

    var buttonPosition = document.createElement("p");
    var nameForm = document.createElement("input");
    var submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.value = "Submit";
    nameForm.type = "text";
    nameForm.placeholder = "Player Initials";

    questionHead.appendChild(buttonPosition);
    buttonPosition.appendChild(nameForm);
    buttonPosition.appendChild(submitButton);

    submitButton.addEventListener("click", function() {
      event.preventDefault();
      questionHead.innerHTML = "High Scores";

      // *** joins together the user's entry and the localStorage values to create the leaderboard
      var leaders = JSON.parse(localStorage.getItem("usernameList"));
      usernames = leaders.concat(nameForm.value);
      localStorage.setItem("usernameList", JSON.stringify(usernames));
      var topScores = JSON.parse(localStorage.getItem("scoreList"));
      scores = topScores.concat(score);
      localStorage.setItem("scoreList", JSON.stringify(scores));

      // display all names and their scores
      var leaderboard = JSON.parse(localStorage.getItem("usernameList"));
      var scoreboard = JSON.parse(localStorage.getItem("scoreList"));
      for (var i = 0; i < leaderboard.length; i++) {
        var usernameRow = document.createElement("row");
        var usernameDisplay = document.createElement("p");
        usernameRow.appendChild(usernameDisplay);
        questionHead.appendChild(usernameRow);
        usernameDisplay.innerHTML = leaderboard[i] + ", " + scoreboard[i];
      }
    });
  }
  // Do code for showing the number of seconds here
  document.getElementById("timer").innerHTML = count + " seconds left"; // watch for spelling
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
  "You will have 1 minute to answer all 5 questions.  If you get an answer wrong, you lose 10 seconds!  Pace yourself, and Good Luck!";
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

  questionHead.innerHTML = questions[0].q;
  qwrapper.appendChild(questionHead);

  for (var i = 0; i < 4; i++) {
    var buttonPosition = document.createElement("p");
    var answerButton = document.createElement("input");
    answerButton.type = "button";
    answerButton.value = questions[0].o[i];
    answerButton.classList.add("answer");
    answerButton.setAttribute("id", i);
    questionHead.appendChild(buttonPosition);
    buttonPosition.appendChild(answerButton);

    answerButtons = document.getElementsByClassName("answer");

    // Setting up question 2 after clicking an answer on question 1
    answerButtons[i].addEventListener("click", function() {
      var choice = this.id;
      console.log(choice);
      if (choice == questions[0].a) {
        score++;
      } else {
        count = count - 10;
      }
      questionHead.innerHTML = questions[1].q;
      for (var i = 0; i < 4; i++) {
        var buttonPosition = document.createElement("p");
        var answerButton = document.createElement("input");
        answerButton.type = "button";
        answerButton.value = questions[1].o[i];
        answerButton.classList.add("answer");
        answerButton.setAttribute("id", i);
        questionHead.appendChild(buttonPosition);
        buttonPosition.appendChild(answerButton);

        answerButtons = document.getElementsByClassName("answer");

        // Setting up question 3 after clicking an answer on question 2
        answerButtons[i].addEventListener("click", function() {
          var choice2 = this.id;
          console.log(choice2);
          if (choice2 == questions[1].a) {
            score++;
          } else {
            count = count - 10;
          }
          questionHead.innerHTML = questions[2].q;
          for (var i = 0; i < 4; i++) {
            var buttonPosition = document.createElement("p");
            var answerButton = document.createElement("input");
            answerButton.type = "button";
            answerButton.value = questions[2].o[i];
            answerButton.classList.add("answer");
            answerButton.setAttribute("id", i);
            questionHead.appendChild(buttonPosition);
            buttonPosition.appendChild(answerButton);

            answerButtons = document.getElementsByClassName("answer");

            // Setting up question 4 after clicking an answer on question 3
            answerButtons[i].addEventListener("click", function() {
              var choice3 = this.id;
              if (choice3 == questions[2].a) {
                score++;
              } else {
                count = count - 10;
              }
              questionHead.innerHTML = questions[3].q;
              for (var i = 0; i < 4; i++) {
                var buttonPosition = document.createElement("p");
                var answerButton = document.createElement("input");
                answerButton.type = "button";
                answerButton.value = questions[3].o[i];
                answerButton.classList.add("answer");
                answerButton.setAttribute("id", i);
                questionHead.appendChild(buttonPosition);
                buttonPosition.appendChild(answerButton);

                answerButtons = document.getElementsByClassName("answer");

                // Setting up question 5 after clicking an answer on question 4
                answerButtons[i].addEventListener("click", function() {
                  var choice4 = this.id;
                  if (choice4 == questions[3].a) {
                    score++;
                  } else {
                    count = count - 10;
                  }
                  questionHead.innerHTML = questions[4].q;
                  for (var i = 0; i < 4; i++) {
                    var buttonPosition = document.createElement("p");
                    var answerButton = document.createElement("input");
                    answerButton.type = "button";
                    answerButton.value = questions[4].o[i];
                    answerButton.classList.add("answer");
                    answerButton.setAttribute("id", i);
                    questionHead.appendChild(buttonPosition);
                    buttonPosition.appendChild(answerButton);

                    answerButtons = document.getElementsByClassName("answer");

                    // Displaying the user's final score and asking for their initials
                    answerButtons[i].addEventListener("click", function() {
                      clearInterval(counter);
                      var choice5 = this.id;
                      if (choice5 == questions[4].a) {
                        score++;
                      } else {
                        count = count - 10;
                      }
                      questionHead.innerHTML =
                        "All done! Your final score is " +
                        score +
                        " out of 5. Enter your initials in the box below.";

                      var buttonPosition = document.createElement("p");
                      var nameForm = document.createElement("input");
                      var submitButton = document.createElement("input");
                      submitButton.type = "button";
                      submitButton.value = "Submit";
                      nameForm.type = "text";
                      nameForm.placeholder = "Player Initials";

                      questionHead.appendChild(buttonPosition);
                      buttonPosition.appendChild(nameForm);
                      buttonPosition.appendChild(submitButton);

                      questionHead.appendChild(buttonPosition);
                      buttonPosition.appendChild(nameForm);

                      submitButton.addEventListener("click", function() {
                        event.preventDefault();
                        questionHead.innerHTML = "High Scores";
                        // *** joins together the user's entry and the localStorage values to create the leaderboard
                      var leaders = JSON.parse(localStorage.getItem("usernameList"));
                      usernames = leaders.concat(nameForm.value);
                      localStorage.setItem("usernameList", JSON.stringify(usernames));
                      var topScores = JSON.parse(localStorage.getItem("scoreList"));
                      scores = topScores.concat(score);
                      localStorage.setItem("scoreList", JSON.stringify(scores));

                      // display all names and their scores
                      var leaderboard = JSON.parse(localStorage.getItem("usernameList"));
                      var scoreboard = JSON.parse(localStorage.getItem("scoreList"));
                      for (var i = 0; i < leaderboard.length; i++) {
                        var usernameRow = document.createElement("row");
                        var usernameDisplay = document.createElement("p");
                        usernameRow.appendChild(usernameDisplay);
                        questionHead.appendChild(usernameRow);
                        usernameDisplay.innerHTML = leaderboard[i] + ", " + scoreboard[i];
                      }
                      });
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

// checks if the answer clicked is correct
