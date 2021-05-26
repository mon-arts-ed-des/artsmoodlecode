//When the window loads carry out the following script
window.addEventListener('load', (event) => {
	//get the text of each lesson button and store it
  var lessonButtonText = $('a.lessonbutton').text();
	//get the number of lesson buttons on the page and store it
  var numberOfButtons = $('a.lessonbutton').length;
	//store the review button
  var reviewButton = $(".lessonbutton:contains('Review')").get();
	//get the link of the section that the lesson sits in from the breadcrumbs (second last link)
  var linkUrl=$('ol.breadcrumb li:nth-last-child(2) > a').html();
	//get the return to section link and store it
  var returnToSectionLink = $(".lessonbutton:contains('Return to')").get()
    //check that we are on the end of lesson page (url has unique identifier of pageid=-9)
  if (window.location.href.indexOf("pageid=-9") > -1) {
	  //double the height of the progress bar
	  $('div.progress').css({'height':'2.5rem','line-height':'2.3rem'});
	  //round the edges and add a margin space between the text on the page and the progress bar
	  $('.progress').addClass('rounded mt-3');
	  //change the progress bar from orange to green
	  $('.progress-bar').addClass('bg-success');
	  //ensure the text inside the progress bar is on one line
	  $('.progress-bar').css('display','block');
	  //add text so that the text in the progress bar says 'xxx% Complete [checkered flag icon]
	  $('.progress-bar').append(' <span>Complete <i class="fa fa-fw fa-flag-checkered"></i></span>');
	  //add a rounded border box that goes around all the end of lesson text and buttons
	  $('.boxaligncenter').addClass('border border-dark px-3 rounded');
	  //make the links on the page into secondary buttons - this can be altered to be Monash coloured buttons (btn-mu instead of secondary) or any colour in the Bootstrap catalogue (danger, warning, success, info, primary, dark, light, or any combination of these + -outline to make ghost buttons e.g. btn-dark-outline)
	  $('.boxaligncenter a.lessonbutton').addClass('btn btn-secondary btn-block p-2 mt-3 text-center');
	  //change the return to unit button so that the link has the name of the section it is returning users to
	  $(returnToSectionLink).html(linkUrl);
	  //change the return to unit button so that the link returns to the section the lesson is in, not the overview page
	  $(returnToSectionLink).attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
	  //change the return to unit button so that it says Return to [section-name]
	  $(returnToSectionLink).prepend('Return to ');
	  //change the return to unit button so that it says has an icon after it
	  $(returnToSectionLink).append('&nbsp;&nbsp;<i class="fa fa-reply fa-fw"></i>');
	  //check the automated links and see if view grades is activated
	  if (lessonButtonText.indexOf('grades') != -1){
		  //grades present and student has gone from a content page to the end of lesson page
		  //place text that indicates completion
		  $('.boxaligncenter p').before('<h5 class="mb-3">You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
		 //get the link that links to the gradebook
		  var viewGradesLink = $(".lessonbutton:contains('View grades')").get();
		  //add an icon after the link to the gradebook
		  $(viewGradesLink).append('&nbsp;&nbsp;<i class="fa fa-check-square-o fa-fw"></i>');
		  //in this case, if there are 2 buttons, they are return to unit and view grades
		  if(numberOfButtons == 2){
			  //tell the user what they can choose to do on this screen
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li>Return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li><li>Or view your grades for this activity <i class="fa fa-check-square-o fa-fw" aria-hidden="true"></i></li></ul>');
			  //remove the well done text in the box as it doubles up the message unnecessarily
			  $('.boxaligncenter p:contains("Well done!")').remove();
		  }
		   //in this case, if there are 3 buttons, they are go to the next activity (review button not present), return to unit, view grades
		  else if(numberOfButtons == 3 && reviewButton.length == 0){
			  //add an icon to the go to next activity button
			  $('.boxaligncenter a.lessonbutton:nth-last-child(3)').append('&nbsp;&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i>');
			  //tell the user what they can choose to do on this screen
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li>Continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li><li>Or view your grades for this activity <i class="fa fa-check-square-o fa-fw" aria-hidden="true"></i></li></ul>');
			  //remove the well done text in the box as it doubles up the message unnecessarily
			  $('.boxaligncenter p:contains("Well done!")').remove();
		  }
		  //in this case, if there are 3 buttons, they are review (review button is present), return to unit, view grades
		  else if (numberOfButtons == 3 && reviewButton.length == 1){
			  //add an icon to the review button
			  $('.boxaligncenter a.lessonbutton:nth-last-child(3)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i>&nbsp;&nbsp;');
			  //tell the user what they can choose to do on this screen
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li><li>Or view your grades for this activity <i class="fa fa-check-square-o fa-fw" aria-hidden="true"></i></li></ul>');
			  //remove the well done text in the box as it doubles up the message unnecessarily
			  $('.boxaligncenter p:contains("Well done!")').remove();
		  }
		  //in this case, if there are 4 buttons, all autolinks are activated. They are review, go to next activity, return to unit, view grades
		  else if (numberOfButtons == 4){
			  //add an icon to the review button and go to next activity button
			  $('.boxaligncenter a.lessonbutton:nth-last-child(4)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i>&nbsp;&nbsp;');
			  $('.boxaligncenter a.lessonbutton:nth-last-child(3)').append('&nbsp;&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i>');
			  //tell the user what they can choose to do on this screen
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li><li>Or view your grades for this activity <i class="fa fa-check-square-o fa-fw" aria-hidden="true"></i></li></ul>');
			  //remove the well done text in the box as it doubles up the message unnecessarily
			  $('.boxaligncenter p:contains("Well done!")').remove();    
		  }
	  }
	  else{
		  //grades absent and user has gone from either a content page OR question page. In this instance, we can combine the approaches without doubling up injected text/buttons/links.
		  //remove the well done text in the box as it doubles up the message unnecessarily
		  $('.boxaligncenter p:contains("Well done!")').remove();   
		  //place text that indicates completion if they have come from a content page
		  $('.boxaligncenter p').before('<h5 class="mb-3">You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
		  //place text that indicates completion if they have come from a question page
		  $('.boxaligncenter div').first().before('<h5 class="mb-3">You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
		  if(numberOfButtons == 1){
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li>Return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
            $('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li>Return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
		  }
		  //in this case, if there are 2 buttons, they are go to next activity (review button is not present), return to unit
		  else if(numberOfButtons == 2 && reviewButton.length == 0){
			  //add an icon to the go to next activty button
			  $('.boxaligncenter a.lessonbutton:nth-last-child(2)').append('&nbsp;&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i>');
			  //place text that indicates completion if they have come from a content page
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li> You can continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
			  //place text that indicates completion if they have come from a question page
			  $('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li> You can continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
		  }
		  //in this case, if there are 2 buttons, they are review (review button is present) and return to unit
		  else if (numberOfButtons == 2 && reviewButton.length == 1){
			  //add an icon to the review button
			  $('.boxaligncenter a.lessonbutton:nth-last-child(2)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i>&nbsp;&nbsp;');
			  //place text that indicates completion if they have come from a content page
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
			  //place text that indicates completion if they have come from a question page
			  $('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
		  }
		  //in this case, if there are 3 buttons, all autolinks besides grades are activated. They are review, go to next activity and return to unit
		  else if (numberOfButtons == 3){
			  //add an icon to the review button
			  $('.boxaligncenter a.lessonbutton:nth-last-child(3)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i>&nbsp;&nbsp;');
			  //add an icon to the go to next activity button
			  $('.boxaligncenter a.lessonbutton:nth-last-child(2)').append('&nbsp;&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i>');
			  //place text that indicates completion if they have come from a question page
			  $('.boxaligncenter p').after('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>')
			  //place text that indicates completion if they have come from a question page
			  $('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>')
		  }
	  }
  }
  });
