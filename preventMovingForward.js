window.addEventListener('load', function buttonChange(){
var feedbackText=$('.specificfeedback').text();
function hideNext(){ 
$('.qnbutton').css('display','none');
$('.submitbtns').css('display','none');
};
function showNext(){
$('.qnbutton').css('display','block');
$('.submitbtns').css('display','block');
};
if(feedbackText.indexOf("Your answer is incorrect") >= 0 || document.querySelector('.specificfeedback') == null) {
hideNext();
}
else{
showNext();
}
});
