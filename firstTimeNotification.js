// define expiration duration as 144 hours/7 days
	const expirationDuration = 1000 * 60 * 60 * 144;
// save the time of the current login to localStorage
	const savedTime = localStorage.getItem('savedTime');
// get the time of the current login
	const currentTime = new Date().getTime();
// make a constant that refers to when there is no record of a login
	const notAccepted = savedTime == undefined;
// make a constant that refers to when the login has a history, and meets the requirements to display the notification again
	const AcceptedExpired = savedTime != undefined && currentTime - savedTime > expirationDuration;
// Australian attendance requirements notification
	$('.sectionname').before('<div class="container"><div class="modal fade" id="attNotification" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Attendance expectations</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><p>The Arts Faculty has an expectation that you attend all scheduled workshops and tutorials, and participate in all learning activities. All the evidence suggests that student success is greatly impacted by class attendance and participation.</p><p>If you are unable to attend a scheduled workshop or tutorial, please contact your tutor or unit coordinator, and ensure you have strategies in place to catch up on any missed work.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div>');
// Malaysian attendance requirements notification
	$('.sectionname').before('<div class="container"><div class="modal fade" id="attNotificationMalaysia" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Attendance expectations</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><p>The Monash Arts Faculty, and within that your School \'SASS\', have an expectation that you attend all scheduled workshops and tutorials, and participate in all learning activities. All the evidence suggests that student success is greatly impacted by class attendance and participation. This is true of online and face-to-face learning.</p><p>If you are unable to attend a scheduled workshop or tutorial, please contact your tutor or unit coordinator, and work with them to ensure you have strategies in place to catch up on any missed work.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div>');
// if the unit is a Malaysia unit, display the Malaysia modal
	if(headerTitle.indexOf("AMU") >= 1 || headerTitle.indexOf("AMG") >= 1){
  		if(notAccepted || AcceptedExpired){
  			$('#attNotificationMalaysia').modal('show');
  			localStorage.setItem("savedTime", currentTime);
  		}
   		else{
      //Do nothing
    		}
	}
// if the unit is an Australian unit, display the Australian modal
	else if (headerTitle.indexOf("APG") >= 1 || headerTitle.indexOf("ATS") >= 1){
 		if(notAccepted || AcceptedExpired){
  		$('#attNotification').modal('show');
  		localStorage.setItem("savedTime", currentTime);
 		}
    		else{
      		//Do nothing
    		}
	}
