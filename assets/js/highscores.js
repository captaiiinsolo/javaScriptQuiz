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
var highscoreList = document.querySelector(".highscoreList");
var userScore = [];

function storeNameandScore() {
    var scores = JSON.parse(localStorage.getItem("userScore"));

    for (var i = 0; i < scores.length; i++) {
        var hsList = document.createElement("li");
        hsList.setAttribute("class", "hsList");
        hsList.textContent = scores[i].name + " " + scores[i].score;
        hsList.setAttribute("data-index", i);
        highscoreList.appendChild(hsList);
    }

    console.log(scores);
}

storeNameandScore();