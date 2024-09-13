let count = 0;
const quizData = { questions: [] };

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    count++;
    const question = document.getElementById('question').value;
    const options = {
        A: document.getElementById('option-a').value,
        B: document.getElementById('option-b').value,
        C: document.getElementById('option-c').value,
        D: document.getElementById('option-d').value
    };
    const correctOption = document.getElementById('correct-option').value;

    const questionData = {
        number: count,
        question: question,
        options: options,
        correctOption: correctOption
    };

    quizData.questions.push(questionData);

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    questionContainer.innerHTML = `
        <div style="margin-left:30px;">${count}.&nbsp;${question}</div>
        <div class="box" style="display: grid; grid-template-columns: 1fr 1fr;margin-left:30px; ">
            <div>
                <ul style='list-style:none;'>
                    <li>A: ${options.A}</li>
                    <li>B: ${options.B}</li>
                </ul>
            </div>
            <div>
                <ul style='list-style:none;'>
                    <li>C: ${options.C}</li>
                    <li>D: ${options.D}</li>
                </ul>
            </div>
        </div>
        <div class="correct-option" style="margin-bottom:10px;margin-left:30px;">Correct Option: ${correctOption}</div>
    `;

    document.getElementById('questions-container').appendChild(questionContainer);

    document.getElementById('quiz-form').reset();
});

document.getElementById('publish-btn').addEventListener('click', function() {
    const subjectName = document.getElementById('subject').value;
    const difficulty = document.getElementById('difficulty').value;
    const timeLimit = document.getElementById('time-limit').value;

    localStorage.setItem('quizData', JSON.stringify({
        subject: subjectName,
        difficulty: difficulty,
        timeLimit: parseInt(timeLimit, 10),
        questions: quizData.questions
    }));

    window.location.href = 'take_quiz.html';
});

document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'Index.html';
});
