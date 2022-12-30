// Targets the Start Quiz button in the index.html
var startQuizBtn = document.querySelector("#startQuiz");

// Will run the startQuiz function below when the Start Quiz button is clicked by the user.
startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startTimer();
    console.log("Quiz has started!");
}

// Sets Quiz Timer Length in seconds
var quizTime = document.getElementById("timer");
var quizSeconds = 120;

// Calls on function to display time
displayQuizTimer(quizSeconds)



// Timer Countdown function
var secondsLeft = quizSeconds;

function startTimer() {
    var quizTimer = setInterval(
        () => {
            secondsLeft--;
            displayQuizTimer(secondsLeft);
            // quizTime.innerHTML = `Time Remaining: 00:${secondsLeft}`;
            if (secondsLeft <= 0 || secondsLeft < 1) {
                clearInterval(quizTimer);
            } 
            
    }, 1000);

}

// Displays quiz timer in min:sec format
function displayQuizTimer(second) {
    var min = Math.floor(second / 60);
    var sec = Math.floor(second % 60);
    quizTime.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`;
}