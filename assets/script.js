var i = 0; 
var rightAnswers = 0;

var questions = [
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        answers: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. console.log"],
        correctAnswer: 0
    },
    {
        text: "Commonly used data types DO NOT include:", 
        answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correctAnswer: 3
    },
    {
        text: "Arrays in JavaScript can be used to store:", 
        answers: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        correctAnswer: 0
    },
    {
        text: "The condition if an if/else statement is enclosed with:", 
        answers: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        correctAnswer: 1
    },
    {
        text: "String values must be enclosed within  _____ when being assigned to variables.", 
        answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        correctAnswer: 2
    }                
];

var generateBtn = document.getElementById("submit")


var updateQuestion = () => {
    console.log("button clicked")
    document.getElementById("display").innerHTML = ""
    const para = document.createElement("p");
    para.innerHTML = questions[i].text;
    document.getElementById("display").appendChild(para);
    for (let j = 0; j < questions[i].answers.length; j++){
        const answerEl = document.createElement("button");
        answerEl.addEventListener("click", () => {
            console.log("answer clicked")
            if (questions[i].correctAnswer === j){
                console.log("correct")
            }
            else {
            console.log("incorrect")
            }
            i++;
            updateQuestion();
        })
        answerEl.innerHTML = questions[i].answers[j];
        document.getElementById("display").appendChild(answerEl); 
        
    }
    

}

generateBtn.addEventListener("click", updateQuestion)