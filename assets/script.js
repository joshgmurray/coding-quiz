var i = 0;
var rightAnswers = 0;
var TIME_VALUE = 60;
var time = TIME_VALUE;

var scores = JSON.parse(localStorage.getItem('score')) || [];
var high = scores.length ? Math.max(...scores.map(o => o.score)) : 'no score'
console.log('hi ===',high, scores)

var questions = [
  {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. console.log",
    ],
    correctAnswer: 3,
  },
  {
    text: "Commonly used data types DO NOT include:",
    answers: [
        "1. Strings", 
        "2. Booleans", 
        "3. Alerts", 
        "4. Numbers",
    ],
    correctAnswer: 2,
  },
  {
    text: "Arrays in JavaScript can be used to store:",
    answers: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    correctAnswer: 3,
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
    answers: [
        "1. Commas", 
        "2. Curly Brackets", 
        "3. Quotes", 
        "4. Parenthesis",
    ],
    correctAnswer: 1,
  },
];

var generateBtn = document.getElementById("submit");
var historyBtn = document.getElementById("history");

var score = 0;

var updateQuestion = () => {
  if (i == 0) {
    var id = setInterval(function () {
      if (time > 0) {
        time--;
        console.log("time ===", time);
        document.getElementById("timer").innerHTML = time;
        if (time == 0 || i == questions.length) {
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
          document.getElementById("response").innerHTML = "Correct!";
          score++;
        } else {
          console.log("incorrect");
          score;
          document.getElementById("response").innerHTML = "Wrong!";
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
    if (high < score || high == 'no score') {
        document.getElementById("scoreSave").innerHTML =
            "<input id='scorename' type='text'/>" +
            "<p><button onClick='saveScore()'>save</button></p>"
    }
  document.getElementById("result").innerHTML =
    "<h2>You finished. Your score is <strong>" +
    score +
    "/" +
    questions.length +
    "</strong>.</h2>" +
    "<p><button onClick='restart()' id='restart'>restart</button></p>";
}

function saveScore() {
    var scorename = document.getElementById("scorename").value;
    document.getElementById("scoreSave").innerHTML = "";
    scores.push({label: scorename, score: score});
    high = score;
    document.getElementById("high").innerHTML = "high score: " + high
    localStorage.setItem('score', JSON.stringify(scores))
}

function restart() {
  i = 0;
  score = 0;
  time = TIME_VALUE;
  document.getElementById("display").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("response").innerHTML = "";

  document.getElementById("high").innerHTML = "high score: " + high;
}

document.getElementById("high").innerHTML = "high score: " + high;
generateBtn.addEventListener("click", updateQuestion);

historyBtn.addEventListener("click", function() {
    scores = JSON.parse(localStorage.getItem('score')) || []
    console.log("testing", scores)
    var scoreHistory = document.getElementById("scoreHistory");
    var outputString = '';
    if (scores.length) {
        for (let index = 0; index < scores.length; index++) {
            const element = scores[index];
            outputString += '<p>' + element.label +
                ' ' + element.score + '</p>';
        }
    } else {
        outputString = "<p>no history</p>"
    }
    scoreHistory.innerHTML = outputString;
});
