// Targets the Start Quiz button in the index.html
var startQuizBtn = document.querySelector("#startQuiz");

// Will run the startQuiz function below when the Start Quiz button is clicked by the user.
startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    timer();
    console.log("Quiz has started!");
}

// Creates 60 second timer in the header of index.html
function timer() {

    var quizTimeRemaining = document.querySelector("#timer");
    
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