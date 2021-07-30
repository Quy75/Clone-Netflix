const questionItems = document.querySelectorAll('.question-item');

function displayOrHiddenAnswer() {
    const answerTag = this.querySelector('.answer');
    const expandIcon = this.querySelector('.expand');
    const closeIcon = this.querySelector('.close');
    if(answerTag.classList.contains('display')) {
        closeIcon.classList.remove('display');
        expandIcon.classList.remove('hidden');
        answerTag.classList.remove('display');
    } else {
        expandIcon.classList.add('hidden');
        closeIcon.classList.add('display');
        answerTag.classList.add('display');
    }
}

for (const questionItem of questionItems) {
    questionItem.addEventListener('click', displayOrHiddenAnswer)
}