let pages = new PageGroup("pages", "grid");

id.setupTree();

let answers = document.getElementsByClassName("answer");

for (let i = 0; i < answers.length; i++) {
    for (let i = 0; i < answers.length; i++) {
        answers[i].dataset.correct = false;
    }
    answers[i].onkeydown = function (event) { 
        if (event.key === "Enter") {
            for (let i = 0; i < answers.length; i++) {
                answers[i].dataset.correct = false;
            }
            answers[i].dataset.correct = true;
        }
    }
}

let quizzes = {
    
}

function addQuestion() {
    let newQuestion = document.createElement("button");
    newQuestion.textContent = `${id.question.value}: ${id.ans1.value}, ${id.ans2.value}, ${id.ans3.value}, ${id.ans4.value}`;
    newQuestion.id = newQuestion.textContent;
    id.questions.appendChild(newQuestion);
}

id.createQuiz.onclick = function (){
    pages.changePage('createPage');
    id.titleHeading.innerHTML = id.quizTitle.value;
    quizzes[id.quizTitle.value] = []
}