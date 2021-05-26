//When the window loads carry out the following script
window.addEventListener('load', (event) => {
	//get the last 9 digits of the URL to confirm it is the unique URL for the end of lesson page and that you have come from a content page
	var urlLastNine = window.location.href.slice(-9);
	//make sure the text for the end of lesson is present
	var checkEndOfLesson = $("div h3:contains('Congratulations - end of lesson reached')").get();
	//get the text of each lesson button and store it
	var lessonButtonText = $('a.lessonbutton').text();
	//get the number of lesson buttons on the page and store it
	var numberOfButtons = $('a.lessonbutton').length;
	//store the review button
	var reviewButton = $(".lessonbutton:contains('Review')").get();
	//get the link of the section that the lesson sits in from the breadcrumbs (second last link)
	var linkUrl=$('ol.breadcrumb li:nth-last-child(2) > a').html();
	//get the return to section link and store it
	var returnToSectionLink = $(".lessonbutton:contains('Return to')").get();
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
	//check that we are on the end of lesson page (url has unique identifier of pageid=-9) + text is present + grades are present
	//OR check that you have come from a question page (/view.php) + text is present + grades are present
	if (urlLastNine == "pageid=-9" && $(checkEndOfLesson).text() == 'Congratulations - end of lesson reached' && lessonButtonText.indexOf('grades') != -1 || urlLastNine == "/view.php" && $(checkEndOfLesson).text() == 'Congratulations - end of lesson reached' && lessonButtonText.indexOf('grades') != -1){
		//add a rounded border box that goes around all the end of lesson text and buttons
		$('.boxaligncenter').addClass('border border-dark px-3 rounded');
		//make the links on the page into bootstrap buttons
		$('.boxaligncenter a.lessonbutton').addClass('btn btn-secondary btn-block p-2 mt-3 text-center');
		//grades present and student has gone from a content page to the end of lesson page
		//change the return to unit button so that the link has the name of the section it is returning users to
		$(returnToSectionLink).html(linkUrl);
		//change the return to unit button so that the link returns to the section the lesson is in, not the overview page
		$(returnToSectionLink).attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
		//change the return to unit button so that it says Return to [section-name]
		$(returnToSectionLink).prepend('Return to ');
		//change the return to unit button so that it says has an icon after it
		$(returnToSectionLink).append('&nbsp;&nbsp;<i class="fa fa-reply fa-fw"></i>');
		//place text that indicates completion
		$('.boxaligncenter div').first().before('<h5 class="mb-3">You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
		//get the link that links to the gradebook
		var viewGradesLink = $(".lessonbutton:contains('View grades')").get();
		//add an icon after the link to the gradebook
		$(viewGradesLink).append('&nbsp;&nbsp;<i class="fa fa-check-square-o fa-fw"></i>');
		//in this case, if there are 2 buttons, they are return to unit and view grades
		if(numberOfButtons == 2){
			//tell the user what they can choose to do on this screen
			$('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li>Return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li><li>Or view your grades for this activity <i class="fa fa-check-square-o fa-fw" aria-hidden="true"></i></li></ul>');
			//remove the well done text in the box as it doubles up the message unnecessarily
			$('.boxaligncenter p:contains("Well done!")').remove();
		}
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
			$('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li><li>Or view your grades for this activity <i class="fa fa-check-square-o fa-fw" aria-hidden="true"></i></li></ul>');
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
	else if (urlLastNine == "pageid=-9" && $(checkEndOfLesson).text() == 'Congratulations - end of lesson reached' && lessonButtonText.indexOf('grades') == -1 || urlLastNine == "/view.php" && $(checkEndOfLesson).text() == 'Congratulations - end of lesson reached' && lessonButtonText.indexOf('grades') == -1){
		//remove the well done text in the box as it doubles up the message unnecessarily
		$('.boxaligncenter p:contains("Well done!")').remove();   
		//add a rounded border box that goes around all the end of lesson text and buttons
		$('.boxaligncenter').addClass('border border-dark px-3 rounded');
		//make the links on the page into bootstrap buttons
		$('.boxaligncenter a.lessonbutton').addClass('btn btn-secondary btn-block p-2 mt-3 text-center');
		//grades present and student has gone from a content page to the end of lesson page
		//change the return to unit button so that the link has the name of the section it is returning users to
		$(returnToSectionLink).html(linkUrl);
		//change the return to unit button so that the link returns to the section the lesson is in, not the overview page
		$(returnToSectionLink).attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
		//change the return to unit button so that it says Return to [section-name]
		$(returnToSectionLink).prepend('Return to ');
		//change the return to unit button so that it says has an icon after it
		$(returnToSectionLink).append('&nbsp;&nbsp;<i class="fa fa-reply fa-fw"></i>');
		//place text that indicates completion
		$('.boxaligncenter div').first().before('<h5 class="mb-3">You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
		if(numberOfButtons == 1){
			$('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li>Return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
		}
		else if(numberOfButtons == 2 && reviewButton.length == 0){
			//add an icon to the go to next activty button
			$('.boxaligncenter a.lessonbutton:nth-last-child(2)').append('&nbsp;&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i>');
			//place text that indicates completion if they have come from a question page
			$('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li> You can continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
		}
		//in this case, if there are 2 buttons, they are review (review button is present) and return to unit
		else if (numberOfButtons == 2 && reviewButton.length == 1){
			//add an icon to the review button
			$('.boxaligncenter a.lessonbutton:nth-last-child(2)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i>&nbsp;&nbsp;');
			//place text that indicates completion if they have come from a question page
			$('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
		}
		//in this case, if there are 3 buttons, all autolinks besides grades are activated. They are review, go to next activity and return to unit
		else if (numberOfButtons == 3){
			//add an icon to the review button
			$('.boxaligncenter a.lessonbutton:nth-last-child(3)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i>&nbsp;&nbsp;');
			//add an icon to the go to next activity button
			$('.boxaligncenter a.lessonbutton:nth-last-child(2)').append('&nbsp;&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i>');
			$('.boxaligncenter div').first().before('<ul style="color:black;" id="returnToSectionDescription"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li>Or continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>')
		}
	}
});
