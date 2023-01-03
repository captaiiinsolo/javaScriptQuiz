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





// Quiz timer starts on button click
function startQuizTimer() {
        // Makes sure multiple instances are not allowed.
        clearInterval(timerInterval); 

        // Initial time for quiz. Increase start time by to account for delay in display.
        timeRemaining = 6;

        // Countdown interval function
        timerInterval = setInterval(function() {
        timeRemaining--;
        quizTimer.textContent = "Time: " + timeRemaining;
        quizInstructions.style.visibility = "hidden";
        startButton.style.display = "none"; // Hides start quiz button so quiz cannot be restarted until time runs out
        

        // When timer ends 
        if(timeRemaining === 0) {
            clearInterval(timerInterval);
            quizTimer.textContent = "TIME'S UP!";
            tryAgainButton.style.display = "";
            // remove quiz questions from page
            $("#quizContainer").empty();

            
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


function hideTryAgain() {
    tryAgainButton.style.display = "none";
}



// Console log question title, question, and options
console.log(quizQuestions[0][0]);

console.log(quizQuestions[0][1].question);

console.log(quizQuestions[0][1].options[0] + quizQuestions[0][1].options[1][0] + quizQuestions[0][1].options[2][0] + quizQuestions[0][1].options[3][0]);

startButton.addEventListener("click", startQuizTimer);

questionText.append(quizQuestions[0][0] + " " + quizQuestions[0][1].question);
choiceA.append(quizQuestions[0][1].options[0]);
choiceB.append(quizQuestions[0][1].options[1]);
choiceC.append(quizQuestions[0][1].options[2]);
choiceD.append(quizQuestions[0][1].options[3]);

// Create function that builds homepage so quiz can be rerun from beginning upon clicking try again button
window.onload = function buildPage() {
highscores.textContent = "View Highscores";
quizTitle.textContent = "JavaScript Coding Quiz Challenge";
quizInstructions.textContent = "Try to answer the following JavaScript related questions within the time limit. Keep in mind that all incorrect answers will penalize your score/time by 15 seconds.";
hideTryAgain();

}

window.onload;