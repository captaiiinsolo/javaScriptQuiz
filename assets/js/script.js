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
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 3,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 4,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 5,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 6,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 7,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 8,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 9,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

    {
        questionNumb: 10,
        question:"",
        options: [{
            a: '',
            b: '',
            c: '',
            d: '',
        }],
        answer:""
    },

];

var score = 0;

// Questions answered incorrectly will incur a 15sec deduction
var penalty = 15;

// Questions answered correctly will add 10sec to the timer
var reward = 10;

// Quiz timer is 25seconds per question
var quizTimer = 250;

// Targets the id=timer in html
var timeRemaining = document.querySelector("#timer");

// Adds Quiz Timer to heading section
timeRemaining.textContent = "Time: " + quizTimer;