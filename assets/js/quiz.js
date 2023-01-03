// Document Selectors
var startButton = document.querySelector("#startQuizButton");
var tryAgainButton = document.querySelector("#tryAgain");
var quizTimer = document.querySelector("#timer");
var highscores = document.querySelector("#highscores");
var quizTitle = document.querySelector(".quizTitle");
var quizInstructions = document.querySelector(".quizInstructions");
var quizSection = document.querySelector("#quizContainer");
var questionText = document.querySelector(".questionText");
var questionOptions = document.querySelector(".questionOptions");
var choice0 = document.querySelector("#choice0");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");

// Global Variables
var timeRemaining;
var penalty;
var reward;
var timerInterval;
var userScore;
var userInitials;

// Starts quiz timer
function startQuizTimer() {
        // Makes sure multiple instances are not allowed.
        clearInterval(timerInterval); 

        // Initial time for quiz. Increase start time by to account for delay in display.
        timeRemaining = 6;

        // Countdown interval function
        timerInterval = setInterval(function() {
        timeRemaining--;
        quizTimer.textContent = "Time: " + timeRemaining;

        // When timer ends 
        if(timeRemaining === 0) {
            clearInterval(timerInterval);
            quizTimer.textContent = "TIME'S UP!";
            tryAgainButton.style.visibility = "visible";
            highscores.style.visibility = "visible";
            
        }
    }, 1000 * 1);
}

// Quiz Questions, Options, and Answers
var quizQuestions = [
    {
        question: "Is this question 1?",
        choices: ["Yes", "No", "Maybe", "Nah"], 
        answer: "Yes"
    },

    {
        question: "Is this question 2?",
        choices: ["Yes", "No", "Maybe", "Nah"], 
        answer: "No"
    },

    {
        question: "Is this question 3?",
        choices: ["Maybe", "No", "Yes", "Nah"], 
        answer: "Yes"
    },

    {
        question: "Is this question 4?",
        choices: ["Yes", "No", "Maybe", "Nah"], 
        answer: "Yes"
    },

    {
        question: "Is this question 5?",
        choices: ["Nah", "No", "Maybe", "Yes"], 
        answer: "Yes"
    }
];

window.onload = function() {
    highscores.style.visibility = "hidden";
    tryAgainButton.style.visibility = "hidden";
}

function startQuiz () {
    startQuizTimer();

    getQuestion();
}

function getQuestion() {
   var questionText = setInterval(function() {

    $(".questionText").append(quizQuestions[0].question);
   }, 1000 * 1);

   setTimeout(function() {
    clearInterval(questionText)
   }, 1000 * 1);

   getOptions();

   for (var i = 0; i < quizQuestions[0].question.length; i++) {
        
   }

}

function getOptions() {
    getOption0();
    getOption1();
    getOption2();
    getOption3();
}

function getOption0() {
    var choice0 = setInterval(function() {

        $("#choice0").append(quizQuestions[0].choices[0])
    }, 1000 * 1);

    setTimeout(function() {
        clearInterval(choice0)
       }, 1000 * 1);
}

function getOption1() {
    var choice1 = setInterval(function() {

        $("#choice1").append(quizQuestions[0].choices[1])
    }, 1000 * 1);

    setTimeout(function() {
        clearInterval(choice1)
       }, 1000 * 1);
}

function getOption2() {
    var choice2 = setInterval(function() {

        $("#choice2").append(quizQuestions[0].choices[2])
    }, 1000 * 1);

    setTimeout(function() {
        clearInterval(choice2)
       }, 1000 * 1);
}

function getOption3() {
    var choice3 = setInterval(function() {

        $("#choice3").append(quizQuestions[0].choices[3])
    }, 1000 * 1);

    setTimeout(function() {
        clearInterval(choice3)
       }, 1000 * 1);
}


startQuiz();