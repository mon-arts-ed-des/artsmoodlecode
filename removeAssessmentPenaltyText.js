//Wait until the window loads, then run the function removePenaltyText, and if it has run, stop running it
window.addEventListener("load", removePenaltyText, false);
//function to remove the text
function removePenaltyText(){
  //Set timeout means to run a function on a delay. This one waits until 1000ms after the loading of the page then runs the function to remove the penalty text.
  setTimeout(function(){
    //find the assessmentPenaltyText ID
    var assessmentPenaltyText=document.getElementById("assessmentPenaltyText");
    //remove the text
    assessmentPenaltyText.remove();
    //log that the text is removed to the console
console.log('Penalty text removed')
    //delay this function by 1000ms
  }, 1000
            );
};
