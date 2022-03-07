const startPage = document.getElementById("startpage");
var questionDiv = document.getElementById("question-div");
var yourScore = document.getElementById("your-score");
var highScore = document.getElementById("highscore");
var resultDiv = document.getElementById("result-div");
var resultText = document.getElementById("result"); 
var questions = [
    {
        question: "JavaScript is a __-side programming language?",
        answers: ["Client", "Server", "Both", "None"],
        correct: 2,
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box? does CSS stand for?",
        answers: ["alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);"],
        correct: 2,
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: ["min(x,y);", "Math.min(x,y)", "Math.min(xy)","min(xy);"],
        correct: 1,
    },
    {
        question: "What year was JavaScript launched?",
        answers: ["1996", "1995", "1994", "none of the above"],
        correct: 1,
    },
]
function hide() {
  startPage.setAttribute("hidden", true);
  questionDiv.setAttribute("hidden", true);
  yourScore.setAttribute("hidden", true );
  highScore.setAttribute("hidden", true);
}

function hideResult() {
  resultDiv.style.display = "none";
}

//var for time function
var intervalID;
var time;
var currentQuestion;

document.getElementById("btn-start").addEventListener("click", startQuiz);

 //start quiz function
function startQuiz() {
  hide();
  questionDiv.removeAttribute("hidden");
  currentQuestion = 0;
  displayQuestions();
  time = questions.length * 10;
  intervalID = setInterval(countdown, 1000);
  displayTime();
}


//reduce time by 1 unitl 0 then end quiz
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

//display time 
var timeDisplay = document.getElementById("time");
function displayTime() {
  timeDisplay.textContent = time;
}

//shows question and  the answers
function displayQuestions() {
  let question = questions[currentQuestion];
  let answers = question.answers;

  let questionTitle = document.getElementById("question-text");
  questionTitle.textContent = question.question;
  for (let i = 0; questions.length; i++) {
    let answer = answers[i];
    let answerButton = document.getElementById("answer" + (i+1));
    console.log(answerButton);
    
    answerButton.innerText = answer;
  }
 }


document.getElementById("answers").addEventListener("click", checkAnswer);

function answerCorrect(answerButton) {
  return answerButton.textContent === questions[currentQuestion].answer;
}

//check to see if answer is incorrect
function checkAnswer(eventObject) {
  let answerButton = eventObject.target;
  resultDiv.style.display = "block";
  if (answerCorrect(answerButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResult, 1000);
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResult, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      time = 0;
      displayTime();
      endQuiz();
    }
  }



  //next question
  currentQuestion++;
  //if no more question end quiz
  if (currentQuestion < questions.length) {
    questionDiv.removeAttribute("hidden");
    displayQuestions();
  } else {
    endQuiz();
  }
}

//display scorecard and hide  divs
var score = document.getElementById("score");

function endQuiz() {
  clearInterval(intervalID);
  hide();
  highScore.removeAttribute("hidden");
  score.textContent = time;
}

var submitBtn = document.getElementById("submit-btn");
var inputIt = document.getElementById("initials");

submitBtn.addEventListener("click", storeScore);

function storeScore(event) {
  event.preventDefault();
  if (!inputElement.value) {
    alert("Please enter your initials before pressing submit!");
    return;
  }
  let leaderboardItem = {
    initials: inputElement.value,
    score: time,
  };

  updateStoredLeaderboard(leaderboardItem);
  hideCards();
  highScore.removeAttribute("hidden");

  renderLeaderboard();
}

