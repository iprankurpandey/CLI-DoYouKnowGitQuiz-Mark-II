const readlineSync = require('readline-sync'),
userInput = readlineSync.question("Pleas enter your name ")
console.log("Welcome"+" "+ userInput + " "+ "Lets Play the Quiz")
let score = 0
function play(quizQuestion,quizAnswer){
    let userAnswer = readlineSync.question(quizQuestion)

    if (userAnswer===quizAnswer)
    {
        console.log("you are right")
        score++
    } else{
        console.log("you are wrong")
        score--
    }
    console.log("final score is :"+  score)
}

let questionOne = {
      question: "What is Git? \na.A programming Language \nb.Version Control System \nc.Nickname of Github",
      answer:"b"
};
let questionTwo = {
    question: "What is the command to get the installed version of Git?\na.Git --version \nb.Git-v \nc.GitVersion",
    answer:"a"
}
let questionThree = {
    question: "What is the command to set the user email for the current repository? \na.git email \nb.git user-email \nc.git config --global user.email",
    answer: "c"
}
let questionFour = {
    question: "What is the command to set the user name for the current repository? \na.git username \nb.git config --global user.name \nc. git user-email",
    answer: "b"
}
let questionFive = {
    question: "What is the command to get  the user name and email for the current repository? \na.git config --list  \nb.git user-list \nc.git list",
    answer: "a"
}

let questionBank = [questionOne,questionTwo,questionThree,questionFour,questionFive]
for(i=0;i<questionBank.length;i++){
    play(questionBank[i].question,questionBank[i].answer)
}

