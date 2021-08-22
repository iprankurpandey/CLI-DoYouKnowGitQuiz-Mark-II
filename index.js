// const readlineSync = require('readline-sync'),
// userInput = readlineSync.question("Pleas enter your name ")
// console.log("Welcome"+" "+ userInput + " "+ "Lets Play the Quiz")
const chalk =require('chalk')
const readlineSync = require('readline-sync')

console.log(chalk.green.bgBlue.bold("Lets find out how well do you know me!!! 🙈"))

const inputName = readlineSync.question(chalk.cyanBright("❤ Please enter your name❤" +" :"))
console.log("Hi"+" " + chalk.yellowBright(inputName) + " ,"+ "How well do you know Git? Lets get it.")

const gameRules = readlineSync.question(chalk.magentaBright("Would you like to read the Game rules,Press 1 to read it OR press ENTER to directly play the game."))
let userInput = gameRules
if (userInput == 1){

console.log(chalk.magentaBright("Game Rules"))

  console.log("(a) for every right answer you will get "+ (chalk.green("2 Marks."))) 
  console.log("(b) for every wrong answer you will get "+ (chalk.red("1 Mark."))) 
  console.log(chalk.yellow("(c) this is just a game, I dont get offended you don't know me, cheers❤ !!"))
  console.log("(d)Enter a/ b/ c for each question to answer")
  console.log("\t")
}

let scoreCard = 0
function play(quizQuestion,quizAnswer){
    console.log("\t")
    let userAnswer = readlineSync.question(quizQuestion)
    console.log("\t")
    console.log(chalk.cyan("you have selected :")+ userAnswer)
    if (userAnswer===quizAnswer)
    {
      console.log(chalk.green("you are right"))
       scoreCard= scoreCard+2
    } else{
     
      console.log(chalk.red("you are wrong"))
       scoreCard= scoreCard-1
    }
    console.log(chalk.yellow("your score is")+":"+chalk.white(scoreCard))
}

let questionOne = {
      question:"(1) What is Git? \na.A programming Language \nb.Version Control System \nc.Nickname of github",
      answer:"b"
};

let questionTwo = {
    question:"(2) What is the command to get the installed version of git?\na.git --version \nb.git-v \nc.gitVersion",
    answer:"a"
}

let questionThree = {
    question:"(3) What is the command to set the user email for the current repository? \na.git email \nb.git user-email \nc.git config --global user.email",
    answer: "c"
}

let questionFour = {
    question:"(4) What is the command to set the user name for the current repository? \na.git username \nb.git config --global user.name \nc.git user-email",
    answer: "b"
}

let questionFive = {
    question:"(5) What is the command to get  the user name and email for the current repository? \na.git config --list  \nb.git user-list \nc.git list",
    answer: "a"
}
let questionBank = [questionOne,questionTwo,questionThree,questionFour,questionFive]
for(i=0;i<questionBank.length;i++){
    play(questionBank[i].question,questionBank[i].answer)
}

if (scoreCard == 10 ){
  console.log("you know Git very well")
}
else if (scoreCard < 0){
console.log("you have scored"+""+ chalk.red("zero") +" because your socre is in negative values")
}
else if (scoreCard <10)
{
  console.log("you know  git ")
}
else {
  console.log("invalid")
}
console.log("\t")
console.log(chalk.green("thanks for taking the quiz ,your final score is : ") + chalk.yellow(scoreCard))