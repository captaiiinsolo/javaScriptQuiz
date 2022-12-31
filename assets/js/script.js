// Document Selectors
var startButton = document.querySelector("#startQuizButton");
var quizTimer = document.querySelector("#timer");
var highscores = document.querySelector("#highscores");
var quizSection = document.querySelector("#quizContainer");

// Declared Variables
var timeRemaining = 30;
var penalty = 15;
var reward = 20;

// Displays Timer on page
quizTimer.textContent = "Time: " + timeRemaining;

function startQuizTimer() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        quizTimer.textContent = "Time: " + timeRemaining;
        
        if(timeRemaining === 0 || timeRemaining <=0) {
            clearInterval(timerInterval);
            quizTimer.textContent = "TIME'S UP!";
        }
    }, 1000);
}

// Quiz Questions, Options, and Answers
var quizQuestions = [
    {
        questionNumb: 1,
        question:"Is this question number 1?",
        options: [{
            a: 'no',
            b: 'maybe',
            c: 'yes',
            d: 'idk',
        }],
        answer:"c"
    },

];

startButton.addEventListener("click", startQuizTimer);