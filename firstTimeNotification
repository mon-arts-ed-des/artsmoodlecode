window.onload=function(){
// define expiration duration as 12 hours. Change the 12 to be the number of hours required.
const expirationDuration = 1000 * 60 * 60 * 12;
// Look in the local storage of the browser to get the last time the user was on this page.
const savedTime = localStorage.getItem('savedTime');
// Store the current time of the user's log in to the local storage of the browser.
const currentTime = new Date().getTime();
// Make a constant of when a user is logging in for the first time.
const notAccepted = savedTime == undefined;
// Make a constant of all the contexts where a user has logged in, and calculate the time difference from their last login.
const AcceptedExpired = savedTime != undefined && currentTime - savedTime > expirationDuration;
//Modal needs to be placed at the top of the Moodle page. The sectionname class relates to the name of the Moodle section which is between line 20-30 of the html on the page.
$('.sectionname').before('<div class="container"><div class="modal fade" id="attNotification" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Attendance expectations</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><p>The Arts Faculty has an expectation that you attend all scheduled workshops and tutorials, and participate in all learning activities. All the evidence suggests that student success is greatly impacted by class attendance and participation.</p><p>If you are unable to attend a scheduled workshop or tutorial, please contact your tutor, and ensure you have strategies in place to catch up on any missed work.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div>');
if (notAccepted || AcceptedExpired) {
  $('#attNotification').modal('show');
  localStorage.setItem("savedTime", currentTime);
}
else{
}
};
