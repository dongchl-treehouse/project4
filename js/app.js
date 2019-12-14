/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game=new Game();
// add a click event listerner to the"Start Game" button
document.getElementById("btn__reset").addEventListener("click", ()=>{
    game.createPhrases(); 
    game.startGame();//start new game
});

//add a click event listerner to each of onscreen keyboard button
  const userSelection=document.getElementsByClassName("key");
    
    for(let i = 0; i < userSelection.length; i++) {
        userSelection[i].addEventListener("click", (event)=> {
           game.handleInteraction(event);
        });
      
 };

 
//const phrase = new Phrase('Life is like a box of chocolate');
//console.log(`Phrase-phrase:  ${phrase.phrase}`);

