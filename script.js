let pages = new PageGroup("pages", "grid");

id.setupTree();

let answers = document.getElementsByClassName("answer");
let quizzes = {};

id.createQuiz.onclick = function () {
    if (id.quizTitle.value) {
        pages.changePage('createPage');
        id.titleHeading.innerHTML = id.quizTitle.value;
        quizzes[id.quizTitle.value] = {
            questions: []
        };
    }
}

function addQuestion() {
    let answerList = id.answers.value.split("\n");
    answerList[id.correctAnswer.value - 1] += "☑";
    quizzes[id.quizTitle.value].questions.push(`${id.question.value}: ${answerList}`);
    console.log(quizzes[id.quizTitle.value]);

    updateList(answerList);
}

id.quizTitle.onkeydown = function (event) {
    if (event.key === "Enter") {
        id.createQuiz.click();
        id.question.focus();
    }
}

function updateList(answerList) {
    id.questionList.innerHTML = "";
    for (let i = 0; i < quizzes[id.quizTitle.value].questions.length; i++) {
        let newQuestion = document.createElement("button");
        newQuestion.onclick = function () {
            this.remove();
            quizzes[id.quizTitle.value].questions.splice(quizzes[id.quizTitle.value].questions.indexOf(this.textContent), 1);
            console.log(quizzes[id.quizTitle.value]);
        }
        newQuestion.innerHTML = quizzes[id.quizTitle.value].questions[i];
        id.questionList.appendChild(newQuestion);
    }

    localStorage.setItem("quizzes", JSON.stringify(quizzes))
}