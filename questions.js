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

//QUIZ ---------------------------
var quiz = {
  questions:questions,
  currentQuestion:0,
  counter:75,
  correct:0,
  incorrect:0,
  countdown: function(){
      quiz.counter--;
      $("#counter").html(quiz.counter);
      if(quiz.counter<=0){
        console.log("TIME UP!");
        quiz.timeUp();
      }
  },
  loadQuestion: function(){
      timer = setInterval(quiz.countdown,1000);
      $('#subwrapper').html('<h2>'+questions[quiz.currentQuestion].question+'</h2>');
      for(var i=0;i<questions[quiz.currentQuestion].answers.length;i++){
        $('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[quiz.currentQuestion].answers[i]+'">'+questions[quiz.currentQuestion].answers[i]+'</button>');
      }
  },
  nextQuestion: function(){
    quiz.counter = 75;
    $('#counter').html(quiz.counter);
    quiz.currentQuestion++;
    quiz.loadQuiestion();

  },
  timeUp: function(){

  },
  results: function(){

  },
  clicked: function(e){
    clearInterval(timer);
    if($(e.target).data("name")==questions[quiz.currentQuestion].correctAnswer){
      quiz.answeredCorrectly();//correctAnswer should be correct instead?
    }
    else {
      quiz.answeredIncorrectly();
    }

  },
  answeredCorrectly: function(){
    console.log("YOU ARE CORRECT");
    clearInterval(timer);
    quiz.correct++;
    $('#subWrapper').html('<h2> YOU GOT IT RIGHT</h2>');
    if(quiz.currentQuestion==questions.length-1){
      setTimeout(quiz.results,3*1000);
    }
    else{
      setTimeout(quiz.nextQuestion,3*1000);
    }

  },
  answeredIncorrectly: function(){
    console.log("YOU ARE WRONG");
    console.log("YOU ARE CORRECT");
    clearInterval(timer);
    quiz.incorrect++;
    $('#subWrapper').html('<h2> YOU GOT IT WRONG</h2>');
    if(quiz.currentQuestion==questions.length-1){
      setTimeout(quiz.results,3*1000);
    }
    else{
      setTimeout(quiz.nextQuestion,3*1000);
    }

  },
  reset: function(){

  },
} 
  