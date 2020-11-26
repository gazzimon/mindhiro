const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


// create our questions
let questionnaire = [
  {
    question: "¿Probaría usted esta vacuna?",
    qImg: "https://cdn.glitch.com/e593a5a8-2021-42a1-a662-cb2f88bef2fd%2FimgA.jpg?v=1605366737512",
    choiceA: "Si",
    choiceB: "No",
    choiceC: "Si, pero no ahora",
    correct: "A"
  },
  {
    question: "¿El VAR es una herramienta segura?",
    qImg: "https://cdn.glitch.com/e593a5a8-2021-42a1-a662-cb2f88bef2fd%2FimgB.jpg?v=1605366737547",
    choiceA: "Si",
    choiceB: "No",
    choiceC: "Los arbitros son una mafia",
    correct: "B"
  },
  {
    question: "Who will be the next U.S. president?",
    qImg: "https://cdn.glitch.com/e593a5a8-2021-42a1-a662-cb2f88bef2fd%2FimgC.jpg?v=1605366737075",
    choiceA: "Biden",
    choiceB: "Trump",
    choiceC: "Who cares?",
    correct: "C"
  }
];
// create some variables

const lastQuestion = questionnaire.length - 1;
let runningQuestion = 0;
let count = null;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questionnaire[markerId];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}



// start quiz
function startQuiz() {
  start.style.display = "none";
  A.style.display = "inline";
  B.style.display = "inline";
  C.style.display = "inline";
  renderQuestion();
  quiz.style.display = "block";
  renderCounter();
  TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// counter render

function renderCounter(){
  if(count <= questionTime){
      count++;
  }else{
      count = 0;

      if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
        }else{
        // end the quiz and show the score
        clearInterval(TIMER);
    }
}
}