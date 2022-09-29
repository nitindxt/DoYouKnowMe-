import readline from 'readline-sync'
import chalk from 'chalk'

const log = console.log;
let score = 0;


const userName = readline.question(chalk.bgRed.bold.black("Hi there, What's your good name?\n"));

log(chalk.blue.bold.italic("\nGlad to have you here '" + userName + "'."));

log(chalk.greenBright.bold("\nLet's see how well you know me 😉\n"))

log(chalk.inverse('\nEnter 1, 2, 3 or 4 to answer\n'))

const questions = [
  {
    question: `\n${chalk.underline("Question 1")} : ${chalk.magentaBright.bold("What's my hometown?")}  
    \n 1. Mumbai 
    \n 2. Akola 
    \n 3. Bhopal 
    \n 4. Kanpur 
    \n`,
    answer: 4
  },
  {
    question: `\n${chalk.underline("Question 2")} : ${chalk.yellowBright.bold("What nickname does my mom use to call me?")}
    \n 1. Raja 
    \n 2. Betu 
    \n 3. Pappu 
    \n 4. Golu 
    \n`,
    answer: 2
  },
  {
    question: `\n${chalk.underline("Question 3")} : ${chalk.greenBright.bold('Which of these is my high school?')} 
    \n 1. Jawahar Navodaya Vidyalaya   
    \n 2. School Of Scholars 
    \n 3. Prabhat Kids School 
    \n 4. Podar International School 
    \n`,
    answer: 3
  },
  {
    question: `\n${chalk.underline("Question 4")} : ${chalk.cyanBright.bold("From which College I graduated?")} 
    \n 1. SCOE, pune 
    \n 2. VIT, pune 
    \n 3. PCCOE, pune 
    \n 4. PICT, pune 
    \n`,
    answer: 1
  },
  {
    question: `\n${chalk.underline("Question 5")} : ${chalk.blackBright.bold("What's my favorite fruit?")} 
    \n 1. Kiwi 
    \n 2. Apple 
    \n 3. Mango 
    \n 4. Lychee 
    \n`,
    answer: 3
  }
]

const play = (question, answer) => {
  let userAnswer = readline.question(question);

  if (userAnswer == answer) {
    log(chalk.green.bold("\n✨✨✨ Hurray! you got it right 🎉🎉🎉."));
    score = score + 1;
  } else {
    log(chalk.red("\n❌❌❌ OOPS! try harder next time 🙂🙂🙂."));
    log("\nCorrect answer is: " + chalk.bgBlack.greenBright.bold(answer));
    score = score - 1;
  }
  log("\nCurrent score: " + chalk.bgBlack.blue.bold(score));
  log("--------------------------------------");
}



const main = () => {
  for (let i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}

main();
log(chalk.bgGreen.black.bold("\nYour total score is: " + score))