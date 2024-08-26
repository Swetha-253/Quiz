const quizData = [
    {
        question: "What is the capital of France?",
        a:"Paris",
        b: "London",
        c: "Berlin",
        d: "Rome",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
           a: "Hyper Text Markup Language",
            b:"Hyperlinks and Text Markup Language",
            c:"Home Tool Markup Language",
            d:"Hyperlinks and Text Management Language",
    
        correct: "a",
    },
    {
        question:'Which programming language is known as "the mother of all languages"?',
        a:"C++", 
        b:"Java", 
        c:"Python", 
        d:"Assembly Language",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
           a: "Cascading Style Sheets",
           b: "Creative Style Sheets",
            c:"Computer Style Sheets",
            d:"Colorful Style Sheets",
        correct: "a",
    },
    {
        question: "What year was JavaScript created?",
        a:"1995",
        b: "1999", 
        c:"2001",
        d: "2005",
        correct: "a",
    },
];
const quiz=document.getElementById('quiz');
const questionlist=document.getElementById('question');

const answerlist=document.querySelectorAll('.answer')
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitbtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionlist.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}

function  deselectAnswers(){
    answerlist.forEach(answerlist => answerlist.checked=false)
}

function getSelected(){
    let answer;
    answerlist.forEach(answerls =>
        {
            if(answerls.checked){
            answer=answerls.id;
        }
})
return answer
}

submitbtn.addEventListener('click',() =>
{
    const answer=getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
    
        else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`;
    }
}  
 }   );