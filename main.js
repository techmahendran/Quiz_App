// the question
const quizData = [
  {
    question: "What does HTML stands for?",
    a: "Cascading Style Sheet",
    b: "Jason Object Notation",
    c: "HyperText MarkUp Language",
    d: "Extensible Hypertext Markup Language",
    correct: "c",
  },
  {
    question: "Which year was CSS launched?",
    a: "1994",
    b: "1995",
    c: "1996",
    d: "1997",
    correct: "a",
  },
  {
    question: "JavaScript was invented by?",
    a: "Brendan Eich",
    b: "Larry Page",
    c: "Tim berners lee",
    d: "Hokon wium lie",
    correct: "a",
  },
  {
    question: "Which year was JavaScript launched?",
    a: "1990",
    b: "1992",
    c: "1995",
    d: "1997",
    correct: "c",
  },
];

// Select DOM Elements
const quiz_container = document.querySelector(".quiz_container");
const question = document.querySelector(".question");
const error = document.querySelector("span");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.querySelector(".a_text");
const b_text = document.querySelector(".b_text");
const c_text = document.querySelector(".c_text");
const d_text = document.querySelector(".d_text");
const submitBtn = document.querySelector("#btn");

// submit event
submitBtn.addEventListener("click", submitAnswer);

let currentQuiz = 0;
let score = 0;

// loadQuiz the next question
loadQuiz();

function loadQuiz() {
  let currentQuizData = quizData[currentQuiz];

  question.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

// getAnswer for the correct redio id
function getAnswer() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// submitAnswer btn for give the correct answer
function submitAnswer() {
  let answer = getAnswer();
  if (answer == quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz_container.innerHTML = `
           <h2>your answers correctly at ${score}/${quizData.length} questions.</h2>
           <button id="reload">Reload</button>
           `;
    const reload = document.querySelector("#reload");
    reload.addEventListener("click", () => location.reload());
  }

  // answerEl checked is empty for another question
  answerEls.forEach((answerEl) =>
    answerEl ? (answerEl.checked = "") : answerEl.checked
  );
}
