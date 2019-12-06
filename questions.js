var questions = [
    //QUESTION 1------------------
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    //QUESTION 2------------------
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    //QUESTION 3------------------
    {
      title: "Bloopity Blop blip zip doop goop",
      choices: ["jum", "jim", "jam", "jem"],
      answer: "jum"
    },
    //QUESTION 4------------------
    {
      title: "libba labba limmy jimmy doober moober.",
      choices: ["zip", "zap", "zup", "zop"],
      answer: "zop"
    },
    //QUESTION 5------------------
    {
      title: "humba jo gagga lo wibble fo erbuh go.",
      choices: ["wab", "wub", "wob", "wib"],
      answer: "wub"
    }
    ///etc.
  ];

$("#start").on("click", function(){
  $("#start").remove();
});

//game
var quiz = {
  questions:questions,
  currentQuestion:0,
  counter:75,
  correct:0,
  incorrect:0,
  countdown: function(){
      quiz.counter--;
      $("#counter").html(game.counter);
      if(game.counter<=0){
        console.log("TIME UP!");
        game.timeUp();
      }
  },
  loadQuestion: function(){
      timer = setInterval(game.countdown,1000);
      $("#subWrapper").html("<h2>"+question[game.currentQuestion].question+"</h2>");
  },
  nextQuestion: function(){

  },
  timeUp: function(){

  },
  results: function(){

  },
  clicked: function(){

  },
  answeredCorrectly: function(){

  },
  answeredIncorrectly: function(){

  },
  reset: function(){

  },
} 
  