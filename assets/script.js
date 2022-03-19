// Elements from the html
var timerEl = document.querySelector("#timeCountdown");
var questionsEl = document.querySelector("#questions-container")
var startQuizBtn = document.querySelector("#startQuiz");
var choicesEl = document.querySelector("#questionsChoices");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

// Questions 
var list = [
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
          "''",
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