window.addEventListener("load", removePenaltyText, false);
function removePenaltyText(){
  setTimeout(function(){
    var assessmentPenaltyText=document.getElementById("assessmentPenaltyText");
    assessmentPenaltyText.remove();
console.log('Penalty text removed')
  }, 1000
            );
};
