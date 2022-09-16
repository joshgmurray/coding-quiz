var i = 0;
var rightAnswers = 0;
var TIME_VALUE = 10;
var time = TIME_VALUE;

var questions = [
  {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. console.log",
    ],
    correctAnswer: 0,
  },
  {
    text: "Commonly used data types DO NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: 3,
  },
  {
    text: "Arrays in JavaScript can be used to store:",
    answers: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    correctAnswer: 0,
  },
  {
    text: "The condition if an if/else statement is enclosed with:",
    answers: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parenthesis",
      "4. Square Brackets",
    ],
    correctAnswer: 1,
  },
  {
    text: "String values must be enclosed within  _____ when being assigned to variables.",
    answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
    correctAnswer: 2,
  },
];

var generateBtn = document.getElementById("submit");

var score = 0;

var updateQuestion = () => {
  if (i == 0) {
    var id = setInterval(function () {
      if (time > 0) {
        time--;
        console.log("time ===", time);
        document.getElementById("timer").innerHTML = time;
        if (time == 0) {
          clearInterval(id);
          end();
        }
      }
    }, 1000);
  }
  console.log("start button clicked ===");

  if (time <= 0) {
    end();
  } else {
    document.getElementById("display").innerHTML = "";
    const para = document.createElement("p");
    para.innerHTML = questions[i].text;
    document.getElementById("display").appendChild(para);
    for (let j = 0; j < questions[i].answers.length; j++) {
      const answerEl = document.createElement("button");
      answerEl.addEventListener("click", () => {
        console.log("answer clicked");
        if (questions[i].correctAnswer === j) {
          console.log("correct");
          score++;
        } else {
          console.log("incorrect");
          score--;
          time -= 10;
        }
        i++;
        if (i < questions.length) {
          updateQuestion();
        } else {
          end();
        }
      });
      answerEl.innerHTML = questions[i].answers[j];
      document.getElementById("display").appendChild(answerEl);
    }
  }
};

function end() {
  document.getElementById("result").innerHTML =
    "<h2>You finished. Your score is <strong>" +
    score +
    "/" +
    questions.length +
    "</strong>. Thank you.</h2>" +
    "<p><button onClick='restart()' id='restart'>restart</button></p>";
}

function restart() {
  i = 0;
  score = 0;
  time = TIME_VALUE;
  document.getElementById("display").innerHTML = "";
  document.getElementById("result").innerHTML = "";
}

generateBtn.addEventListener("click", updateQuestion);
