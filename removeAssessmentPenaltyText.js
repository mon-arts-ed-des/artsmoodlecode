window.addEventListener("load", removePenaltyText, false);
function removePenaltyText(){
  setTimeout(function(){
    var assessmentPenaltyText=document.getElementById("assessmentPenaltyText");
    assessmentPenaltyText.remove();
    alert('run')
  }, 1000
            );
};
