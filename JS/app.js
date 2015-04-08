var questions=[{
	"question": "question One",
	"answer1": "answerOne",
	"answer2": "answerTwo",
	"answer3": "answerThree",
	"answer4": "answerFour",
	"correctAnswer": 1
},
{
	"question": "question Two",
	"answer1": "answerOne",
	"answer2": "answerTwo",
	"answer3": "answerThree",
	"answer4": "answerFour",
	"correctAnswer": 1
},
{

}]


var score=0

var currentQuestion=0

var statusElement=document.getElementById('status')

var restartElement=document.getElementById('restartQuiz')

var questionElement=document.getElementById('question')

var answerOneElement=document.getElementById('answerOne')

var answerTwoElement=document.getElementById('answerTwo')

var answerThreeElement=document.getElementById('answerThree')

var answerFourElement=document.getElementById('answerFour')

function init() {
	startQuiz ();
}
function startQuiz()  {
	currentQuestion=0;
	score=0;
	restartElement.style.display="none"
	statusElement.className=" "
	statusElement.innerHTML=""
	nextQuestion();
}
function nextQuestion () {
	questionElement.innerHTML=questions[currentQuestion].question;
	answerOneElement.innerHTML=questions[currentQuestion].answer1;
	answerTwoElement.innerHTML=questions[currentQuestion].answer2;
	answerThreeElement.innerHTML=questions[currentQuestion].answer3;
	answerFourElement.innerHTML=questions[currentQuestion].answer4;
}
function checkQuestion (answer) {
	console.log(statusElement)
	
	if (answer == questions[currentQuestion].correctAnswer) {
		score ++;
		statusElement.className="Correct"
		statusElement.innerHTML="Correct Answer!"
	} else {
		statusElement.className="Incorrect"
		statusElement.innerHTML="Incorrect answer, try next question?"
	} 
	currentQuestion ++; 
		if (currentQuestion>questions.length-1) {

			statusElement.className="Restart"
			statusElement.innerHTML="End of Quiz - Your Score Is : " + score + " Click Ok to Restart"
			restartElement.style.display="block"
		} else {
			nextQuestion ();
		}

}


