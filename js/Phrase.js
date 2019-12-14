/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // create Phrase Class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    // Display phrase on game board
    
    addPhraseToDisplay() {
        var div = document.getElementById("phrase");
        
        //create ul
        var ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i=0; i<this.phrase.length; i+=1) {
             //create li for each letter
             var li = document.createElement('li');
             
             let clsname = '';
             if(this.phrase[i] == ' ') clsname = 'space'; //?
             else
                 clsname = 'hide letter ' + this.phrase[i];
             
             li.setAttribute('class', clsname);
             li.innerHTML = this.phrase[i];
             ul.appendChild(li);		   
         }	  
    };
    
    
    /* Checks if passed letter is in phrase
      @param (string) letter - Letter to check */
    
    checkLetter(letter) {
        var inPhrase = false;
        for (let i=0; i<this.phrase.length; i+=1) {
            if(letter == this.phrase[i]){
                inPhrase = true;
                break;
            }
        }
        return inPhrase;
    };
    
    
    /* Displays passed letter on screen after a match is found
     @param (string) letter - Letter to display*/
    
     showMatchedLetter(letter) {	  	  
        var allSelectedLetters = document.getElementsByClassName(letter);
        console.log(allSelectedLetters.length);
        let clsname1 = 'show letter ' + letter;
        for (let i=0; i<allSelectedLetters.length; i+=1){
            console.log(i);
          //replace each selected element's `hide` CSS class with the `show` CSS class.
            allSelectedLetters[i].setAttribute('class', clsname1);
            console.log(i + "====" + clsname1);  //?
        }
          
    };
  }
  
  