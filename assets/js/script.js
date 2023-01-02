// Document Selectors
var startButton = document.querySelector("#startQuizButton");
var quizTimer = document.querySelector("#timer");
var highscores = document.querySelector("#highscores");
var quizSection = document.querySelector("#quizContainer");

// Global Variables
var timeRemaining;
var penalty;
var reward;
var timerInterval;

// Displays Timer on page
// quizTimer.textContent = "Time: " + timeRemaining;

function startQuizTimer() {
        // Makes sure multiple instances are not allowed.
        clearInterval(timerInterval); 
        timeRemaining = 6;
        timerInterval = setInterval(function() {
        timeRemaining--;
        quizTimer.textContent = "Time: " + timeRemaining;
        startButton.style.visibility = "hidden"; // Hides start quiz button so quiz cannot be restarted until time runs out

        
        if(timeRemaining === 0) {
            clearInterval(timerInterval);
            quizTimer.textContent = "TIME'S UP!";
            startButton.innerHTML = "Try Again?" // Changes startButton text to Try Again
            startButton.style.visibility = "visible"; // Brings back startButton
        }
    }, 1000 * 1);
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

    {
        questionNumb: 2,
        question:"Is this question number 2?",
        options: [{
            a: 'no',
            b: 'maybe',
            c: 'yes',
            d: 'idk',
        }],
        answer:"c"
    },

    {
        questionNumb: 3,
        question:"Is this question number 3?",
        options: [{
            a: 'no',
            b: 'maybe',
            c: 'yes',
            d: 'idk',
        }],
        answer:"c"
    },

    {
        questionNumb: 4,
        question:"Is this question number 4?",
        options: [{
            a: 'no',
            b: 'maybe',
            c: 'yes',
            d: 'idk',
        }],
        answer:"c"
    },

    {
        questionNumb: 5,
        question:"Is this question number 5?",
        options: [{
            a: 'no',
            b: 'maybe',
            c: 'yes',
            d: 'idk',
        }],
        answer:"c"
    }

];

function iterateQuizQuestions(arrOfQuestions) {
for (var i = 0; i < arrOfQuestions.length; i++) {
console.log("Question #: " + arrOfQuestions[i].questionNumb);
console.log(arrOfQuestions[i].question);
console.log(arrOfQuestions[i].options[0]);
    }
}

iterateQuizQuestions(quizQuestions);

startButton.addEventListener("click", startQuizTimer);
