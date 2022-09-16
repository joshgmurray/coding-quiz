console.log("Hello");
var i = 0; 

var questions = [
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        answers: ["answer a", "answer b", "answer c", "answer d"],
        correctAnswer: 0
    },
    {
        text: "second question:", 
        answers: ["answer a", "answer b", "answer c", "answer d"],
        correctAnswer: 3
    }    
]
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