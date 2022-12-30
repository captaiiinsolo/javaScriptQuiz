// Targets the Start Quiz button in the index.html
var startQuizBtn = document.querySelector("#startQuiz");

// Will run the startQuiz function below when the Start Quiz button is clicked by the user.
startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startTimer();
    console.log("Quiz has started!");
}

// Displays 60 second timer in the header
function displayTimer() {
    var seconds = 60;
    var timer = document.getElementsByTagName("p")[0].innerHTML = "Seconds Remaining: " + seconds;
}

// Calls the displayTimer function so that the timer is shown in the pages header upon loading.
displayTimer();

// Starts 60 second timer
function startTimer() {

    var quizTimeRemaining = document.querySelector("timer");
    
    var secondsLeft = 60;

    var quizTimer = setInterval(
        () => {
            if (secondsLeft <= 0) {
                clearInterval(quizTimer);
                document.getElementById("timer").innerHTML = "Finished";
            } else {
                document.getElementById("timer").innerHTML = "Seconds Remaining: " + secondsLeft;
            }
            secondsLeft -= 1;
        
    }, 1000);
}

