//jQuery Button Demo
//Name: Matthew Nevish
//Date: Feb 16, 2017 - Revised on Feb 23, 2017
//Animal Guess
//Name: Morgan Knowles
//Date: May 6, 2017
$(document).ready(function(){
    var message = $("#message"); //used for updating the animal name message
    var guessMessage = $("#guesses"); //used for updating the message that displays the number of guesses left
    var userPick; //store the src of the users selection
    var randImg; //stores a random object from the array animals
    var guesses = 5; //keeps track of the remaining guesses
    var animals = []; //array to hold all of the animal images
  
/*
    -create an array of all animal objects
*/
$('img').map(function(){
	animals.push($(this));
});

/*
  random Image Generator
    -generates a random number from the array length of animals
    -returns an animal from the array animals
*/
var randomImageGenerator = function() {
  var i = Math.floor(Math.random() * animals.length);
  console.log("The random animal is " + animals[i].attr('alt'));
  return animals[i];
}

/*
  restart game
    -resets guesses back to 5
    -changes the message text to Try again!
    -changes the guessMessage text to Guesses left : 5
    -alert tells the user if they won or lost and what animal should have been selected
    -sets randImg to a new random image
    -empties the past guesses
*/
var restartGame = function(k){
  guesses = 5;
  message.text("Try again!");
  (guessMessage).text("Guesses left : " + guesses);
  alert('It was the ' + randImg.attr('alt') + '! You ' + k + '! Press OK to restart!');
  randImg = randomImageGenerator();
  $("#pastGuesses").empty();
}

randImg = randomImageGenerator();
  
  $('button').each(function(){
    $(this).click(function(){
      if(guesses > 1){ //user hasn't run out of guesses
          guesses--;
          userPick = $(this).find("img").attr("src"); //set userPick to the src of the clicked element
          $("#pastGuesses").append('<img src=\"' + userPick + '\" width=\"50\" height=\"50\">'); //add the most recently selected animal to the bottom of the page 
          message.text($(this).find("img").attr("alt")); //set the message text to the alt attribute of the clicked image
          (guessMessage).text("Guesses left : " + guesses); //update the remaining guesses
        if(userPick === randImg.attr('src')){ //if the user's selection is equal to the src of randImg
          message.text($(this).find("img").attr("alt"));
          restartGame("win");
        }
      }else{//ran out of guesses
        message.text("That was unwise");
        restartGame("lose");       
      }             
   });   
 });           
});