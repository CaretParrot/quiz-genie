let pages = new PageGroup("pages", "grid");

id.setupTree();

let answers = document.getElementsByClassName("answer");
let quizzes = {}

window.onload = function () {
    if (localStorage.getItem("quizzes")) {
        quizzes = JSON.parse(localStorage.getItem("quizzes"));
    }

    for (let i = 0; i < Object.keys(quizzes).length; i++) {
        let newButton = document.createElement("button");
        newButton.innerHTML = Object.keys(quizzes)[i];
        newButton.onclick = function () {
            loadQuiz(this.innerHTML);
        }
        id.quizList.appendChild(newButton);
    }
}

id.createQuiz.onclick = function () {
    if (id.quizTitle.value) {
        pages.changePage('createPage');
        id.titleHeading.innerHTML = id.quizTitle.value;
        quizzes[id.quizTitle.value] = {
            questions: []
        };
    }
    updateList();
}

id.titleHeading.oninput = function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
    quizzes[id.quizTitle.value] = {
        questions: []
    };
    updateList();
}

function loadQuiz(quizTitle) {
    pages.changePage('createPage');
    id.titleHeading.innerHTML = quizTitle;
    updateList();
}

function addQuestion() {
    let answerList = id.answers.value.split("\n");
    answerList[id.correctAnswer.value - 1] += "☑";
    quizzes[id.quizTitle.value].questions.push(`${id.question.value}: ${answerList}`);
    updateList();
}

id.quizTitle.onkeydown = function (event) {
    if (event.key === "Enter") {
        id.createQuiz.click();
        id.question.focus();
    }
}

function updateList() {
    id.questionList.innerHTML = "";
    for (let i = 0; i < quizzes[id.titleHeading.innerHTML].questions.length; i++) {
        let newQuestion = document.createElement("button");
        newQuestion.onclick = function () {
            this.remove();
            quizzes[id.titleHeading.innerHTML].questions.splice(quizzes[id.titleHeading.innerHTML].questions.indexOf(this.textContent), 1);
            localStorage.setItem("quizzes", JSON.stringify(quizzes));
        }
        newQuestion.innerHTML = quizzes[id.titleHeading.innerHTML].questions[i];
        id.questionList.appendChild(newQuestion);
    }

    localStorage.setItem("quizzes", JSON.stringify(quizzes));
}