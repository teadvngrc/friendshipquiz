// questions to be randomly asked on page load
var questionsList = ["What are your/ your friend's favorite foods?", "What are your/ your friend's favorite animals?", "Who is your/your friend's favorite fictional character?", "Who is your/ your friend's favorite Pixar character?", "What is the title of your/ your friend's favorite book?"];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty

/* ADD YOUR CODE BELOW */

//adds user-submitted answer to answerList
function submitAnswer() {
  var answer = document.getElementById('answerInput').value;
               document.getElementById("answerInput").value='';
  var answer2 = document.getElementById('guessInput').value;
    console.log(answer)
    answerList.push(answer)

}


//checks if user-submitted guess is in answerList
function checkGuess() {
  var answer2 = document.getElementById('guessInput').value
  for (var i=0; i<answerList.length;i++){
    if (answer2==answerList[i]){
      console.log("Wooow! You guys really are best friends! (:");
    }

    else {
      console.log("Yikes! Looks like you need to have a talk with your best friend.  ):")

    }

  }

}
