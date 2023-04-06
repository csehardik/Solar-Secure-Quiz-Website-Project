var quizdata = [
    {
        question : 'Which Framework is related to JS ?',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct:'c'
    },
    {
        question : 'Which is not a programming language ?',
        a:'html',
        b:'python',
        c:'JS',
        d:'Java',
        correct:'a'
    },
    {
        question : 'Which is not a framework ?',
        a:'React',
        b:'JavaScript',
        c:'angular',
        d:'django',
        correct:'b'
    },
    {
        question : 'CSS Stands for ?',
        a:'Cascading style state',
        b:'Cascading style sheet',
        c:'Cascading sheet of style',
        d:'none of the above',
        correct:'b'
    }
]

var quiz = document.getElementById('quiz');
var answer = document.querySelectorAll('.answer');
var question = document.getElementById('question');
var option_a = document.getElementById('a_value');
var option_b = document.getElementById('b_value');
var option_c = document.getElementById('c_value');
var option_d = document.getElementById('d_value');

var submitbtn = document.getElementById('submit');

var currentquestion = 0;
var quizscore = 0;

loadquiz();


function loadquiz()
{
    deselect();
    question.innerHTML=quizdata[currentquestion].question;
    option_a.innerText=quizdata[currentquestion].a;
    option_b.innerText=quizdata[currentquestion].b;
    option_c.innerText=quizdata[currentquestion].c;
    option_d.innerText=quizdata[currentquestion].d;
}

function deselect()
{
    answer.forEach(answer=>answer.checked=false);
}

submitbtn.addEventListener('click' , ()=>{
    var selectedoption;

    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id;
        }
    })

    if(selectedoption==quizdata[currentquestion].correct)
    {
        quizscore=quizscore+1;
    }
    currentquestion=currentquestion+1;
  
    if(currentquestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML=`<h1>You Have Answered ${quizscore} Correctly Out Of ${quizdata.length}</h1>`;
    }
    else{
        loadquiz();
    }
})