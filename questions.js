var questions = [
    //QUESTION 1------------------
    {
      question: "Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      correctAnswer: "alerts"
    },
    //QUESTION 2------------------
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
      correctAnswer: "parentheses"
    },
    //QUESTION 3------------------
    {
      question: "Bloopity Blop blip zip doop goop",
      answers: ["jum", "jim", "jam", "jem"],
      correctAnswer: "jum"
    },
    //QUESTION 4------------------
    {
      question: "libba labba limmy jimmy doober moober.",
      answers: ["zip", "zap", "zup", "zop"],
      correctAnswer: "zop"
    },
    //QUESTION 5------------------
    {
      question: "humba jo gagga lo wibble fo erbuh go.",
      answers: ["wab", "wub", "wob", "wib"],
      correctAnswer: "wub"
    }
    ///etc.
  ];
//START BUTTON-------------------
$("#start").on("click", function(){
  $("#start").remove();
  quiz.loadQuestion();
})

$(document).on('click','.answer-button',function(e){
  quiz.clicked(e);
})

//RESET BUTTON------------------
$(document).on('click','#reset',function(){
  quiz.reset();
})

//NEXT STEP!!! Make button to see high score, and enter it

//QUIZ ---------------------------
var quiz = {
  questions:questions,
  currentQuestion:0,
  counter:15,
  correct:0,
  incorrect:0,
  unanswered:0,
  totaltime:0,
  //---------------countdown---------------
  countdown: function(){
      quiz.counter--;
      $("#counter").html(quiz.counter);
      if(quiz.counter<=0){
        console.log("TIME UP!");
        quiz.timeUp();
      }
  },
  //---------------load question---------------
  loadQuestion: function(){
      timer = setInterval(quiz.countdown,1000);
      $('#subwrapper').html("<h2 id='counter'>15</h2>");
      $('#subwrapper').append('<h2>'+questions[quiz.currentQuestion].question+'</h2>');
      for(var i=0;i<questions[quiz.currentQuestion].answers.length;i++){
        $('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[quiz.currentQuestion].answers[i]+'">'+questions[quiz.currentQuestion].answers[i]+'</button>');
      }
  },
  //---------------next question---------------
  nextQuestion: function(){
    quiz.counter = 15;
    $('#counter').html(quiz.counter);
    quiz.currentQuestion++;
    quiz.loadQuestion();

  },
  //---------------time up---------------
  timeUp: function(){
    clearInterval(timer);
    quiz.unanswered++;
    $('#subwrapper').html('<h2>TIMES UP!</h2>');
    $('#subwrapper').append('<h3>Correct answer: '+questions[quiz.currentQuestion].correctAnswer+'</h3>');
    if(quiz.currentQuestion==questions.length-1){
      setTimeout(quiz.results,2*1000);
    }
    else{
      setTimeout(quiz.nextQuestion,1000);//--maybe fix this bit. not sure if it's the right count on questions.length
    }
  },
  //---------------results---------------
  results: function(){
    clearInterval(timer);
    $('#subwrapper').html("<h2>COMPLETE!</h2>");
    $('#subwrapper').append("<h3>Correct: "+quiz.correct+"</h3>");
    $('#subwrapper').append("<h3>Incorrect: "+quiz.incorrect+"</h3>");
    $('#subwrapper').append("<h3>Unanswered: "+quiz.unanswered+"</h3>");
    $('#subwrapper').append("<h3>Time: </h3>");
    $('#subwrapper').append("<p>Submit your high score!</p>");
    $('#subwrapper').append('<input type="text" name="FirstName" value="Initials" id="userInitials">');
    $('#subwrapper').append('<input type="submit" id="userInitialButton"><br>');
    $('#subwrapper').append("<button id='reset'>RESET</button>");

   
      localStorage.setItem("UserScore", quiz.correct);
      localStorage.setItem("userInitials", userInitials.value);
   



  },
  //---------------clicked---------------
  clicked: function(e){
    clearInterval(timer);
    if($(e.target).data("name")==questions[quiz.currentQuestion].correctAnswer){
      quiz.answeredCorrectly();
    }
    else {
      quiz.answeredIncorrectly();
    }

  },
  //---------------answered correctly---------------
  answeredCorrectly: function(){
    console.log("YOU ARE CORRECT");
    clearInterval(timer);
    quiz.correct++;
    $('#subwrapper').html('<h2>CORRECT</h2>');
    if(quiz.currentQuestion==questions.length-1){
      setTimeout(quiz.results,1000);
    }
    else{
      setTimeout(quiz.nextQuestion,1000);
    }

  },
  //---------------answered incorrectly---------------
  answeredIncorrectly: function(){
    console.log("YOU ARE WRONG");
    clearInterval(timer);
    quiz.incorrect++;
    $('#subwrapper').html('<h2>Incorrect</h2>');
    $('#subwrapper').append('<h3>Correct answer: '+questions[quiz.currentQuestion].correctAnswer+'</h3>');
    if(quiz.currentQuestion==questions.length-1){
      setTimeout(quiz.results,1000);
    }
    else{
      setTimeout(quiz.nextQuestion,1000);
    }

  },
  //---------------reset---------------
  reset: function(){
    quiz.currentQuestion = 0;
    quiz.counter = 0;
    quiz.correct = 0;
    quiz.incorrect = 0;
    quiz.unanswered = 0;
    quiz.loadQuestion();

  },
} 
  