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
var choiceA = document.querySelector(".choiceA");
var choiceB = document.querySelector(".choiceB");
var choiceC = document.querySelector(".choiceC");
var choiceD = document.querySelector(".choiceD");

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
            
        }
    }, 1000 * 1);
}

// Quiz Questions, Options, and Answers
var quizQuestions = [
    ["1.)", 
    {"question": "Is this question 1?" + "\n",
        "options": ["a: Yes" + "\n", ["b: no" + "\n"], ["c: Idk" + "\n"], ["d: Maybe"]]
    }]
];

// Console log question title, question, and options
console.log(quizQuestions[0][0]);

console.log(quizQuestions[0][1].question);

console.log(quizQuestions[0][1].options[0] + quizQuestions[0][1].options[1][0] + quizQuestions[0][1].options[2][0] + quizQuestions[0][1].options[3][0]);

startQuizTimer();