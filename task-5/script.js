const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "None of the above",
    ],
    answer: "Hyper Text Markup Language",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(option, currentQuestion.answer);
    optionsElement.appendChild(li);
  });

  nextBtn.classList.add("hidden");
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
  }

  document.querySelectorAll(".options li").forEach((li) => {
    li.style.pointerEvents = "none"; // Disable further selection
    if (li.textContent === correct) {
      li.style.background = "lightgreen";
    } else if (li.textContent === selected) {
      li.style.background = "lightcoral";
    }
  });

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  nextBtn.classList.add("hidden");
  resultElement.textContent = `Your score: ${score} / ${quizData.length}`;
  resultElement.classList.remove("hidden");
}

// Load the first question when the page loads
loadQuestion();
