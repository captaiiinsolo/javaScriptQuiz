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
var allChoices = document.querySelector(".choice");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var userInput = document.get

// Global Variables
var penalty;
var reward;
var timerInterval;
var userScore;
var userInitials;
var timeRemaining;




// Quiz Questions, Options, and Answers
var quizQuestions = [
    {
        question: "Is this question 1?",
        choiceA: "Yes",  
        choiceB: "No", 
        choiceC: "Maybe", 
        choiceD: "Nah",
        answer: "A"
    },

    {
        question: "Is this question 2?",
        choiceA: "No",  
        choiceB: "Maybe", 
        choiceC: "Yes", 
        choiceD: "Nah",
        answer: "C"
    },

    {
        question: "Is this question 3?",
        choiceA: "No",  
        choiceB: "Maybe", 
        choiceC: "Yes", 
        choiceD: "Nah",
        answer: "C"
    },

    {
        question: "Is this question 4?",
        choiceA: "No",  
        choiceB: "Maybe", 
        choiceC: "Yes", 
        choiceD: "Nah",
        answer: "C"
    },

    {
        question: "Is this question 5?",
        choiceA: "No",  
        choiceB: "Maybe", 
        choiceC: "Yes", 
        choiceD: "Nah",
        answer: "C"
    }

];

window.onload = function() {
    highscores.style.visibility = "hidden";
    tryAgainButton.style.visibility = "hidden";
}

function startQuiz() {
    startQuizTimer();

    getQuestion();
}

var lastQuestion = quizQuestions.length - 1;
var question = 0;

function getQuestion() {
    var q = quizQuestions[question];

    questionText.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}

// Starts quiz timer
function startQuizTimer() {
    // Makes sure multiple instances are not allowed.
    clearInterval(timerInterval); 

    // Starting count for timer
    timeRemaining = 31;

    // Countdown interval function
    timerInterval = setInterval(function() {
    timeRemaining--;
    quizTimer.textContent = "Time: " + timeRemaining;

    // When timer ends 
    if(timeRemaining <= 0 || timerInterval === 0) {
        clearInterval(timerInterval);
        quizTimer.textContent = "TIME'S UP!";
        tryAgainButton.style.visibility = "visible";
        highscores.style.visibility = "visible";
        quizTimeOut();
        
    }

    }, 1000 * 1);

}
// When user finishes the quiz they will be prompted to enter their in order to save their score
function enterName() {
    clearInterval(timerInterval);
    var username = prompt("Congrats on finishing the quiz! Please enter your name to save your score.");

    if (username != null) {
        window.location.href = "../pages/highscores.html";
    } else {
        window.location.href = "../../index.html";
    }
}

function quizTimeOut() {
    var studyMore = alert("You have answered incorrectly too many times or your time has run out!. Study more and try again soon!");

    return;
}

function checkAnswer(answer) {
    if (answer == quizQuestions[question].answer) {
        timeRemaining += 10;
    } else {
        timeRemaining -=15;
    }

    if (question < lastQuestion) {
        question++;
        getQuestion();
    } else {
        enterName();
    }
}


startQuiz();


// Next to do items
// change enterName from prompt to new page with form, add local storage feature, style high score page