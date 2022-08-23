const quizdb = [
    {
        question: "1: Which language is used for styling our content?",
        a: "HTML",
        b: "c",
        c: "javascript",
        d: "CSS",
        correct: "d",
    },
    {
        question: "2: CSS stands for?",
        a: "cascading style sheet",
        b: "car seller shop",
        c: "cascade code set",
        d: "cartoon style sheet",
        correct: "a",
    },
    {
        question: "3: HTML stands for?",
        a: "Hypertext markup language",
        b: "hypertext make up",
        c: "hypertextsymbolic",
        d: "hypertext modern language",
        correct: "a",
    },
    {
        question: "4: Javascript was invented in which year?",
        a: "1995",
        b: "2000",
        c: "2005",
        d: "2010",
        correct: "a",
    },
    {
        question: "5: We can use javascript externally in HTML through which tag?",
        a: "script",
        b: "style",
        c: "font",
        d: "anchor",
        correct: "a",
    },

];

const question = document.querySelector( ".question" );
const option1 = document.querySelector( "#option1" );
const option2 = document.querySelector( "#option2" );
const option3 = document.querySelector( "#option3" );
const option4 = document.querySelector( "#option4" );
const submit = document.querySelector( "#submit" );



const answers = document.querySelectorAll( ".answer" );
const showscore = document.querySelector( "#showscore" );

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionlist = quizdb[questionCount];

    question.innerHTML = questionlist.question;

    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}
loadQuestion();

const getcheckanswer = () => {
    let answer;
    answers.forEach( ( curanselem ) => {
        if ( curanselem.checked ) {
            answer = curanselem.id;
        }
    } );
    return answer;
}

const deselectAll = () => {
    answers.forEach( ( curanselem ) => curanselem.checked = false );
}

submit.addEventListener( "click", () => {
    const checkedanswer = getcheckanswer();

    if ( checkedanswer == quizdb[questionCount].correct ) {
        score++;
    };

    deselectAll();
    questionCount++;
    if ( questionCount < quizdb.length ) {
        loadQuestion();
    } else {
        showscore.innerHTML = `
        <h3> You Scored ${score}/${quizdb.length} <br> Good luck </h3>
          <button class="btn" onclick="location.reload()"> Try Again </button>
       `;
        showscore.classList.remove( "scorearea" );
    }

} );


