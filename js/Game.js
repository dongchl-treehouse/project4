/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    
    }
    
    /* Creates phrases for use in game
      @return {array} An array of phrases that could be used in the game */

     createPhrases() {
         let phraseObjs = [];
         
  	  let phrase_strs = ['Life is like a box of chocolates',
  		  'there is no trying',
  		  'May the force be with you',
  		  'You have to see the matrix by yourself',
  		  'You talk to me'];
        
         for (let i=0; i<phrase_strs.length; i+=1) {
             phraseObjs.push(new Phrase(phrase_strs[i]));
         }
         this.phrases = phraseObjs; 	  
     };
     /* Selects random phrase from phrases property
        @return {Object} Phrase object chosen to be used */

     getRandomPhrase() {
        var rnd = Math.floor(Math.random() * this.phrases.length) ;
        return this.phrases[rnd];
     };
     
     
     /* Begins game by selecting a random phrase and displaying it to user */
    
     startGame() {	   
         var div_overlay = document.getElementById("overlay");	   
         div_overlay.style.display = 'none';
         
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay(); 
         console.log(this.activePhrase);
         console.log(this.activePhrase.length);
         
     };
     
     
     /* Checks for winning move
         @return {boolean} True if game has been won, false if game wasn't won  */
     
         checkForWin() {
         let clsname = 'hide letter ';
         var allHideLetters = document.getElementsByClassName(clsname);
         
         console.log(allHideLetters.length);
         
         
         if( allHideLetters.length == 0 ) return true;
         else return false;
         
     };
     
     /* Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out */
    
     removeLife() {	   
         if (this.missed >= 4) {
             this.gameOver(false);
             return;
         }
         var lives = document.getElementsByClassName('tries');
         console.log(lives.length);
         if(lives.length > 0){
             //replace lose life image 
             lives[this.missed].firstChild.src = "images/lostHeart.png";
             this.missed += 1;
         }		   
         
     };
     
     
     /* Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game  */
     
     gameOver(gameWon) {
         //displays the original start screen overlay
         var div_overlay = document.getElementById("overlay");	   
         div_overlay.style.display = 'block';
         //updates the overlay `h1` element with a friendly win or loss message,
         var mesg = document.getElementById("game-over-message"); 
         if(gameWon){
             mesg.innerHTML = "Winner. You are great!";
             div_overlay.setAttribute('class','win');
         }
         else{
             mesg.innerHTML = "Sorry!  Better luck next time.";
             div_overlay.setAttribute('class','lose');
         }
         
         this.resetGame();
     };
    
     /* Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element */
     
     handleInteraction(button) {	  
         console.log("Clicked", button.target.textContent);
         var letter = button.target.textContent;
         var find = this.activePhrase.checkLetter(letter) ;
         if(find){ //?
             //letter is in phrase
             button.target.setAttribute('class','chosen');
             //Disable the selected letter’s onscreen keyboard button.
             button.target.setAttribute("disabled", "disabled");
             this.activePhrase.showMatchedLetter(letter);
             var isWinner = this.checkForWin();
             console.log(isWinner);
             if(isWinner) this.gameOver(true);
             
         }else{
             //letter is not in phrase 
             button.target.setAttribute('class','wrong');
             //Disable the selected letter’s onscreen keyboard button.
             button.target.setAttribute("disabled", "disabled");
             this.removeLife();		   
         }
             
     };
     /* reset gameboard */
     
     resetGame(){
         //Remove all `li` elements from the Phrase `ul` element.
         var div = document.getElementById("phrase");
         div.innerHTML = '';
         while(true){
         //Enable all of the onscreen keyboard buttons and update each to use the `key` CSS class,
         //and not use the `chosen` or `wrong` CSS classes.
         var chosen_buttons = document.getElementsByClassName('chosen');
         for(let i=0; i<chosen_buttons.length; i++){
             chosen_buttons[i].removeAttribute("disabled");	
             chosen_buttons[i].className ='key';	
         }
         var wrong_buttons = document.getElementsByClassName('wrong');
         console.log( "wrong button number : " + wrong_buttons.length );
         for(let i=0; i<wrong_buttons.length; i++){
             wrong_buttons[i].removeAttribute("disabled");	
             wrong_buttons[i].className ='key';	
         }
         
             if( chosen_buttons.length == 0 && wrong_buttons.length ==0 ) break;
         }
         //Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of
         //the gameboard to display the `liveHeart.png` image
         var lives = document.getElementsByClassName('tries');	   
         for(let i=0; i<lives.length; i++){
             lives[i].firstChild.src = "images/liveHeart.png";
         }
         
         this.missed = 0;
         this.activePhrase = null;
     } 
     
  }