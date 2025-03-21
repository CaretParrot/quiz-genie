let pages = new PageGroup("pages", "grid");

id.setupTree();

let answers = document.getElementsByClassName("answer");
let quizzes = {};

function addQuestion() {
    let newQuestion = document.createElement("button");
    let answerList = id.answers.value.split("\n");
    answerList[id.correctAnswer.value - 1] += "☑";
    newQuestion.textContent = `${id.question.value}: ${answerList}`;
    newQuestion.id = newQuestion.textContent;
    newQuestion.onclick = function () {
        this.remove(); 
        quizzes[id.quizTitle.value].splice(quizzes[id.quizTitle.value].indexOf(this.textContent), quizzes[id.quizTitle.value].indexOf(this.textContent));
        console.log(quizzes[id.quizTitle.value].indexOf(this.textContent));
    };
    id.questionList.appendChild(newQuestion);

    quizzes[id.quizTitle.value].push(newQuestion.textContent);
}

id.createQuiz.onclick = function () {
    if (id.quizTitle.value) {
        pages.changePage('createPage');
        id.titleHeading.innerHTML = id.quizTitle.value;
        quizzes[id.quizTitle.value] = [];
    }
}