let pages = new PageGroup("pages", "grid");

id.setupTree();

let answers = document.getElementsByClassName("answer");
let quizzes = {};

function addQuestion() {
    let answerList = id.answers.value.split("\n");
    answerList[id.correctAnswer.value - 1] += "☑";

    quizzes[id.quizTitle.value].push(`${id.question.value}: ${answerList}`);
    console.log(quizzes[id.quizTitle.value]);
    id.questionList.innerHTML = "";

    updateList(answerList);
}

id.createQuiz.onclick = function () {
    if (id.quizTitle.value) {
        pages.changePage('createPage');
        id.titleHeading.innerHTML = id.quizTitle.value;
        quizzes[id.quizTitle.value] = [];
    }
}

id.quizTitle.onkeydown = function (event) {
    if (event.key === "Enter") {
        id.createQuiz.click();
        id.question.focus();
    }
}

function updateList(answerList) {
    for (let i = 0; i < quizzes[id.quizTitle.value].length; i++) {
        let newQuestion = document.createElement("button");
        newQuestion.onclick = function () {
            this.remove();
            quizzes[id.quizTitle.value].splice(quizzes[id.quizTitle.value].indexOf(this.textContent), 1);
        }
        newQuestion.innerHTML = quizzes[id.quizTitle.value][i];
        id.questionList.appendChild(newQuestion);
    }
}