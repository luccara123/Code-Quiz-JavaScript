// Elements from the html
var timerEl = document.querySelector("#timeCountdown");
var questionsEl = document.querySelector("#questions-container")
var startQuizBtn = document.querySelector("#startQuiz");
var choicesEl = document.querySelector("#questionsChoices");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

// Questions 
var listQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: [
          "<js>",
          "<scripting>",
          "<javascript>",
          "<script>"
            ],
      answer: "<script>"
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      choices: [
        "alertBox('Hello World');",
        "msgB('Hello world');",
        "alert('Hello World');",
        "msg('Hello World');"
      ],
      answer: "alert('Hello World');"
    },
    {
      question: "Commonly used data types DO NOT include:",
      choices: [
          "strings", 
          "booleans", 
          "alerts", 
          "numbers"
        ],
      answer: "alerts"
    },
    {
      question: "Which built-in method removes the last element from an array and returns that element?",
      choices: [
        "last()",
        "get()",
        "pop()",
        "None of the above"
      ],
      answer: "pop()"
    },
    {
      question:
        "Which statement cannot be used to declare a variable in JavaScript?",
      choices: [
        "Let",
        "Int",
        "Var",
        "Const"
      ],
      answer: "Int"
    },
    {
      question: "What will be the result of:   let n = '1' + 1; n = n- 1; console.log(n) ?",
      choices: [
        "1",
        "11",
        "10",
        "-1"
      ],
      answer: "10"
    },
    {
      question: "Which one of the following is NOT a falsy value?",
      choices: [
          "error",
          "0",
          "'  '",
          "null"
            ],
      answer: "error"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: [
        "commas",
        "curly brackets",
        "quotes",
        "parentheses"
            ],
      answer: "quotes"
    },
    {
      question:
        "You CAN'T write a variable with:",
      choices: [
        "$",
        "_",
        "numbers",
        "function"
            ],
      answer: "function"
    },
    {
      question: "What is the type of Pop up boxes available in JavaScript?:",
      choices: [
        "Alert",
        "Confirm",
        "Prompt",
        "All the above"
            ],
      answer: "All the above"
    }
  ];


// Quiz initial variables
var currentQuestionIndex = 0;
var time = listQuestions.length * 15;
var timerId;

function startQuiz(){
    // Hide main container
    var startScreenEl = document.querySelector("#main");
    startScreenEl.setAttribute("class", "hidden");

    //Unhide questions
    questionsEl.removeAttribute("class");

    //Start timer
    timerId = setInterval(countdown, 1000);

    //Start Timer
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion (){
    // get current question from array
    var currentQuestion = listQuestions[currentQuestionIndex]; // get the index of the array, 0, 1, 2, 3

    //Update question title with the current question
    var titleEl = document.querySelector(".question-title");
    titleEl.textContent = currentQuestion.question; 

    //Remove any past question
    choicesEl.innerHTML ="";

    // Transforming the choices into buttons, and ordering them using loop
    currentQuestion.choices.forEach(function(choice, i){
        //create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice"); // adding attributes to the new button class = choice
        choiceNode.setAttribute("value", choice); // value = choice

        choiceNode.textContent = i + 1 + ". " + choice; // 01. choice  // 02. choice

        //attach click event for each choice
        choiceNode.onclick = questionOnClick; // On click, the function is executed

        //display on the page
        choicesEl.appendChild(choiceNode);
    });
}


function questionOnClick() {
    // If wrong choice was clicked

    if (this.value !== listQuestions[currentQuestionIndex].answer){ // this refers to the array 
                                                                       // listQuestions.value(choice value not equal to the current answer)
        // less time
            time -= 15; //time = time - 15
        if (time < 0){
            time = 0;
        }

        //display new time on page
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong";
        feedbackEl.style.color = "silver";
        feedbackEl.style.fontSize = "200%";
} else{
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "lightgreen";
    feedbackEl.style.fontSize = "200%";
}

    // wrong feedback time
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function(){
        feedbackEl.setAttribute("class", "feedback hidden")
    }, 1000);

    //To next question
    currentQuestionIndex++; // i = i + 1

    //Checking the time
    if (currentQuestionIndex === listQuestions.length){
        quizEnds();
    } else {
        getQuestion();
    }
}


function quizEnds(){
    //Stop timer
    clearInterval(timerId);

    //Show final container
    var finalContainerEl = document.querySelector("#finalScore");
    finalContainerEl.removeAttribute("class"); // hidden class will be removed

    //Show final score
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;

    //Hide questions section
    questionsEl.setAttribute("class", "hidden");
}

function countdown(){
    // update time
    time--;
    timerEl.textContent = time;

    //if time is 0
    if (time <= 0){
        quizEnds();
    }
}


function saveHighscore(){
    //Get value of input initials
    var initials = initialsEl.value.trim(); //trim removes whitespace of both sides of the string

    if (initials !== ""){
        // get saved scores from localstorage
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        //format new score for current user
        var newScore = {
            score: time,
            initials: initials
        };

        //save to localStorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores)); //make it a string

        //Go to next page
        window.location.href = "score.html";
    }
}

//if user clicks to save highscore
function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();  
    }
}
submitBtn.addEventListener("click", saveHighscore);
startQuizBtn.addEventListener("click", startQuiz)
initialsEl.addEventListener("keyup", checkForEnter)




  