let quiz = [
    {
        Question: "Who is the Prime Minister of India?",
        option: ["Narendra Modi", "Amit Shah", "Pappu", "Arvind Kejriwal"],
        correct: "Narendra Modi"
    },
    {
        Question: "Who is the Prime Minister of Pakistan?",
        option: ["Narendra Modi", "Imran Khan", "Pappu", "Arvind Kejriwal"],
        correct: "Imran Khan"
    },
    {
        Question: "Who is the Captain of RCB (Royal Challengers Bangalore)?",
        option: ["Faf du Plessis", "Virat Kohli", "Glenn Maxwell", "Mohammed Siraj"],
        correct: "Faf du Plessis"
    },
    {
        Question: "Who is the Orange Cap holder in IPL 2024?",
        option: ["Gill", "Virat Kohli", "Glenn Maxwell", "Mohammed Siraj"],
        correct: "Virat Kohli"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let finalResult = score
const questionSection = document.querySelector('.Question-section');
const optionSection = document.querySelector('.Option-section');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const resultContainer = document.querySelector('.result');


function displayQuestion(index) {
    questionSection.innerHTML = '';
    optionSection.innerHTML = '';
    resultContainer.innerHTML = '';

    const questionElement = document.createElement('h1');
    questionElement.innerText = quiz[index].Question;
    questionSection.appendChild(questionElement);
    
    let result =  document.createElement('p')
    for (let j = 0; j < quiz[index].option.length; j++) {
        const optionElement = document.createElement('h2');
        optionElement.innerText = quiz[index].option[j];

        optionElement.addEventListener('click', () => {
            if (quiz[index].option[j] === quiz[index].correct) {
                console.log("You selected the right answer");
               result.innerText = "You Selected Right Answer!"
               resultContainer.append(result)
               score++;
               console.log(`Your Score is ${score}`);

               let scoreContainer = document.createElement('p');
               scoreContainer.classList.add('score')
               scoreContainer.innerText = `Your Score is ${score}`
               resultContainer.append(scoreContainer)
            } else {
                console.log('You selected the wrong answer');
                resultContainer.append(result)
                result.innerText = "You Selected Wrong Answer!"
            }
            
        });
        optionSection.append(optionElement);
    }
}

displayQuestion(currentQuestionIndex);

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        questionSection.innerHTML = '<h1>No more questions</h1>';
        optionSection.innerHTML = '';
        resultContainer.innerHTML = '';
        console.log(finalResult);
        nextBtn.disabled = true;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
});




  // if(quiz[i].option[j] == quiz[i].correct){
        //     console.log("You Select Correct answer");
        //     break;
        // }else{
        //     console.log("Not!!");
        //     break;
        // }