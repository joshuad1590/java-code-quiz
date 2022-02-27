var quiz = document.getElementById('quiz')
var answers = document.getElementById('.answers')
var questions = document.getElementById('questions')
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var a_btn = document.getElementById('a_btn')
var b_btn = document.getElementById('b_btn')
var c_btn = document.getElementById('c_btn')
var d_btn = document.getElementById('d_btn')
var submitBtn = document.getElementById('submit')
var currentIndex = 0;
var score = 0;
var time = 75;
var maxScore = 5;
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
var questions = [
    {
        question: "JavaScript is a __-side programming language",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "None",
        correct: "c",
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box? does CSS stand for?",
        a: "alertBox(“Hello DataFlair!”);",
        b: "alert(Hello DataFlair!);",
        c: "msgAlert(“Hello DataFlair!”);",
        d: "alert(“Hello DataFlair!”);",
        correct: "d",
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        a: "min(x,y);",
        b: "Math.min(x,y)",
        c: "Math.min(xy)",
        d: "min(xy);",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]
//Start Quiz
btnStart.addEventListener("click", startQuiz);
function startQuiz() {
    document.body.innerHTML = ""

    if (currentIndex > questions.length - 1) {
        endQuiz();
    }
    else {

    var newQuiz = questions[currentIndex]
    document.getElementById("questions").style.fontStyle = "italic";
    
    const questionEl = document.createElement("div");
    questionEl.innerHTML = "<h1>"+newQuiz.question+"</h1>";
    document.body.append(questionEl);

    const answerA = document.createElement("button");
    answerA.innerHTML = "<h2>"+newQuiz.a+"</h2>";
    answerA.addEventListener('click', () => {
        // if ('a' == newQuiz.correct)
        currentIndex += 1;
        startQuiz();
    })
    document.body.append(answerA);

    const answerB = document.createElement("button");
    answerB.innerHTML = "<h2>"+newQuiz.b+"</h2>";
    document.body.append(answerB);
   
    const answerC = document.createElement("button");
    answerC.innerHTML = "<h2>"+newQuiz.c+"</h2>";
    document.body.append(answerC);
    
    const answerD= document.createElement("button");
    answerD.innerHTML = "<h2>"+newQuiz.d+"</h2>";
    document.body.append(answerD);
}
}
//Set Timer


//Question & Answers

//HighScore
function endQuiz() {
    let name = prompt("Please enter name");
        highScore.push({name, score});
}
