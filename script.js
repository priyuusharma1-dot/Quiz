const questions = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine",
            "Hyper Tool Multi Language"
        ],
        answer: 0
    },
    {
        question: "CSS is used for?",
        options: [
            "Styling",
            "Programming",
            "Database"
        ],
        answer: 0
    },
    {
        question: "JavaScript is?",
        options: [
            "Programming Language",
            "Database",
            "Browser"
        ],
        answer: 0
    },
    {
        question: "Which tag is used for heading?",
        options: [
            "<h1>",
            "<p>",
            "<div>"
        ],
        answer: 0
    },
    {
        question: "Which is not a programming language?",
        options: [
            "Python",
            "HTML",
            "Java"
        ],
        answer: 1
    },
    {
        question: "Which property is used in CSS for color?",
        options: [
            "background-color",
            "color",
            "font-color"
        ],
        answer: 1
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google"
        ],
        answer: 1
    },
    {
        question: "Which symbol is used for comments in JS?",
        options: [
            "//",
            "#",
            "<!-- -->"
        ],
        answer: 0
    }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
    const q = questions[currentQ];

    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.innerText = "";

    progressEl.style.width = ((currentQ / questions.length) * 100) + "%";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(btn, index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(button, index) {
    const correctIndex = questions[currentQ].answer;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (index === correctIndex) {
        button.classList.add("correct");
        feedbackEl.innerText = "✅ Correct!";
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
        feedbackEl.innerText = "❌ Wrong!";
    }

    scoreEl.innerText = "Score: " + score;
}

nextBtn.onclick = () => {
    currentQ++;

    if (currentQ < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "🎉 Quiz Finished!";
        optionsEl.innerHTML = "";
        feedbackEl.innerText = "Final Score: " + score;

        progressEl.style.width = "100%";
        nextBtn.style.display = "none";
        restartBtn.style.display = "block";
    }
};

restartBtn.onclick = () => {
    currentQ = 0;
    score = 0;

    scoreEl.innerText = "Score: 0";
    nextBtn.style.display = "block";
    restartBtn.style.display = "none";

    loadQuestion();
};

loadQuestion();