window.addEventListener('DOMContentLoaded',function(){
	//hide Category wide block that references this script + Arts styles CSS file
	document.getElementById("inst3098311").classList.add("d-none");
});
// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
	//temporarily remove liberate's CSS to fix nav issue until Nigel can help resolve the changes with best practice
	var libLink = $( 'link[href*="https://liberatelms.com/_boot/monash/art/banner/arts_banner.css"]' );
	libLink.remove();
	var newNavCSS =document.createElement('link');
	newNavCSS.rel='stylesheet';
	newNavCSS.href='https://mon-arts-ed-des.github.io/artsmoodlecode/artsAutoNav.css';
	newNavCSS.type="text/css";
	document.getElementsByTagName('head')[0].appendChild(newNavCSS);
	// change all links that have #section- in them which goes to the all sections page, to &section= links that go to the single section instead
	$('nav a, .bookexit').each(function(){
		this.href=this.href.replace('#section-','&section=');
		// opens the atto editor completely on load    
		$('.editor_atto_toolbar div').removeAttr('hidden');
		$('.editor_atto_toolbar div').css('display', 'inline-block');
		// opens the tinyMCE toolbar rows 2 and 3 on load (once a user collapses this again, it stops working)
		$('.mceToolbarRow2').css('display', 'table');
		$('.mceToolbarRow3').css('display', 'table');
	});
	$('#section-0 h3 a').attr('href','#');
	var adminBlock = $('.block_settings').length
	var zeroLinkEquals = document.querySelectorAll('a[href$="section=0"]');
	var zeroLinkHash = document.querySelectorAll('a[href$="section-0"]');
	var changeRoleToStdt = $('p.tree_item').length;
	if (adminBlock == 0 || changeRoleToStdt <= 6){
		//console.log('this is a student - section 0 removed')
		$(zeroLinkEquals,zeroLinkHash).remove();  
	}
	else{
		//console.log('this is a staff member');
		$(zeroLinkEquals,zeroLinkHash).html('<div class="ml-0"><div class="media"><span class="media-left"><i class=\"icon fa fa-list-ol fa-fw\" aria-hidden="true"></i> </span><span class="media-body">All sections page</span></div></div>')
	}
	// style library block to be like the others
	// first remove the existing styles
	$("#inst3127749 ol li a").removeAttr("style");
	// change all links to be styled like the admin block
	$('#inst3127749 .list a').css({"color": "#006DAE","text-decoration": "none !important","font-size": "1.1rem"});
	// add a grey border to the block to be styled the same as the others in our category
	$('#inst3127749 ol').css({"border":"2px solid #f0f0f0", "border-radius":"5px","padding":"12px"});
	//remove unit guide link from all S2 2020 sites
	// check the site header title for S2 2020. If that text is present remove the Unit Guide link.
	$(".header-title:contains(S2 2020)").filter(function(){
		$('#arts-guide').remove();
	});
	// Show Arts Graduate essentials block if the unit code has APG in it
	// make a variable out of the header title of the Moodle site
	var headerTitle = $('.header-title').text();
	//If the header title has APG in the title, display the AGE block
	if(headerTitle.indexOf("APG") >= 1){
		$('#inst3357177').css('display','block');
	}
	/* attendance notification	
	// define expiration duration as 144 hours
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
	*/
	//add material to our FoA category if you are a tutor, lect, non-primary lect, designer or admin
	//check the role level. Tutor and above have access to the recycle bin link. So the material that follows will not display to students.
	//Check the admin block. Check each link in the block.
	$(".block-region .type_course a").each(function(){
		//Look for the text Recycle bin to check it's a tutor or above.
		if($(this).text().match(/Recycle bin/)){
			//link to how to's in the uni wide banner and nav drawer
			var turnEditingOnBtnText = $('.header-button button').text();
			if (turnEditingOnBtnText == "Turn editing off"){
				$('#section-0 .summary .fa-cog').closest('a').hide();
				console.log('editing is on');
			}
			else {
				console.log('editing is off or button does not exist');
			}		
			$( ".header-right" ).prepend('<div class="custom-menus my-auto"><a href="http://bit.ly/artshowtos" target="_blank" class="border border-dark rounded-circle text-dark p-2" role="button" title="Ed Tech how tos"><i class="fa fa-bolt fa-fw" aria-hidden="true"></i></a></div>');
			$( "#nav-drawer .list-group" ).prepend('<a class="list-group-item list-group-item-action" href="http://bit.ly/artshowtos" target="_blank" data-key="coursehome" data-isexpandable="0" data-indent="0" data-showdivider="0" data-type="60" data-nodetype="0" data-collapse="0" data-forceopen="0" data-isactive="0" data-hidden="0" data-preceedwithhr="0"><div class="ml-0"><div class="media"><span class="media-left"><i class="icon fa fa-bolt fa-fw " aria-hidden="true"></i></span><span class="media-body ">Ed Tech how tos</span></div></div></a>');
			$('.section_action_menu .editing_delete').css('display','none');
			$('#inst3407551 .action-menu-trigger').css('display','none');
			$('#inst3407542 .action-menu-trigger').css('display','none');
			$("#nav-drawer .list-group a").each(function(){
				if($(this).text().match(/Staff resources/)){
					//make a variable of the Moodle section name
					var moodleSectionName = $('.sectionname').text();
					//check the variable for the text Staff resources. Make sure the section you are on is the staff resources section.
					if(moodleSectionName.indexOf("Staff resources") > -1){
						if(window.location.href.indexOf('section-0') > -1 || window.location.href.indexOf('section=0') > -1) {
							//If you are on the staff resources section, remove the ability to hide/show the section to students. Ensuring it is not accidentally shown to students.
							//do nothing						      
						}
						else{
							$('.section-actions .editing_showhide').remove();
						}
					}
					//Search the left hand nav for the link to the Staff resources section, and make a variable out of that link.
					var SRSectionLink=$("nav .list-group-item:contains('Staff resources')").attr('href');
					//Create a new button on the end of the nav labelled staff resources.
					$('.arts-banner-nav div').last().after('<div id="arts-staff-resources"><a href="https://lms.monash.edu/course/view.php?id=97270&amp;section=1"><i class="fa fa-user fa-fw" aria-hidden="true"></i> Staff resources</a></div>');
					//Change the link of the new button to match the link of the section Staff resources resides in.
					$('#arts-staff-resources a').attr('href', SRSectionLink);
					//Check the section the staff member is on is the overview section. If so, add the template instructions.
					/*var overviewSection=$("nav .list-group-item:contains('Overview')").attr('href');
					var currentSection=window.location.href;
					var callistaUnitCode = document.querySelector('.block_callista a')
					? document.querySelector('.block_callista a').innerText
					: null;
					if (overviewSection == currentSection && headerTitle.indexOf('Winter') > -1){
					$('#templateInstructions').after('<div class="mt-3 p-2 border-mu-3 rounded mx-3 mb-2" id="staffInstructions"><h3 class="text-center"><i class="fa fa-fw fa-info-circle"></i> Welcome to your Moodle template</h3><p>These instructions are temporary and will disappear in O week. You cannot duplicate or edit this panel. The panel only appear to staff members, not students. Please click the button below to reveal further information on how to populate your Moodle site using this template.</p><div class="mt-3"><a class="btn btn-lg btn-secondary btn-block w-50 mb-2 mx-auto" data-toggle="collapse" href="#moodleTemplateInstructions" role="button" aria-expanded="false" aria-controls="collapseExample">Show/Hide Moodle template FAQs <i class="fa fa-fw fa-eye"></i></a></div><div class="collapse row w-100" id="moodleTemplateInstructions"><div class="col-lg"><h6 class="font-weight-bold">What is the Arts Moodle template?</h6><p>It is a Moodle site with pre-populated headings to support a clear and consistent organisation of content and learning activities.</p><h6 class="font-weight-bold">Why use a template?</h6><p>The template approach establishes a ‘road map’ for student learning. All learning materials and activities are signposted so that students can easily navigate through a logical learning pathway. The template provides a consistent experience for students across all their units in the Faculty.</p><h6 class="font-weight-bold">Can I see examples of a past unit using this template?</h6><p>Yes. The examples linked below contain links to useful instructional guides and educational research for you to consider in your unit design. We have provided two different ‘learning pathways’, or structures, to assist you in organising your material:</p><ul><li>For an example of a unit using a categories (flexible) structure, <a href="https://lms.monash.edu/course/view.php?id=89913&section=1" target="_blank" title="flexible design structure example">please see here</a> (opens in a new window). All UG units not using a template yet have been provided with this structure.</li><li>For an example of a unit using a pre/in/post-class (sequenced) structure for weeks/topics, <a href="https://lms.monash.edu/course/view.php?id=90111&section=1" target="_blank" title="sequenced design structure example">please see here</a> (opens in a new window). All LLCL and PG units are already using this structure.</li></ul><p>If you wish to change the structure you have been provided with, please edit the headings in your weeks/topics pages accordingly, or contact the Teaching Support or Educational Design teams (see below for links).</p><h6 class="font-weight-bold">How do I use the template?</h6><p>Import your content from a previous Moodle site, or build your Moodle site content from scratch. See these guides for further information (all links open in a new window):</p><ul><li><a href="https://sites.google.com/monash.edu/arts-teaching-and-learning-hq/digital-design/arts-moodle-template-guidelines" target="_blank" title="Checklist for the Arts Moodle Template">Checklist for using the Arts Moodle template</a></li><li><a href="https://lms.monash.edu/course/view.php?id=48399&section=11" target="_blank" title="Ed design how to\'s">Ed design how to\'s</a></li><li><a href="https://sites.google.com/monash.edu/arts-teaching-and-learning-hq" target="_blank" title="Arts T&L HQ">Arts T&L HQ site</a></li></ul><p><strong>Remember:</strong> clicking the lightning bolt icon <i class="fa fa-bolt p-2 border border-dark rounded-circle text-center" style="width:32px;"></i> in the white banner at the top right corner of your Moodle site will take you to our full suite of instructional guides.<h6 class="font-weight-bold">Who do I contact for support?</h6><p>the <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=arts-educational-design@monash.edu&su=Ed%20design%20support%20for%20my%20unit" target="_blank" title="email Ed Design team">Educational Design team</a> (opens in a new window) can advise you on how best to organise your material and structure your learning activities. Your local <a href="https://www.intranet.monash/arts/academic-governance-students/teaching-support/contact-us" target="_blank" title="Teaching Support contact list">Teaching Support Officer</a> (opens in a new window) can assist with your Moodle site set up.</p><h6 class="font-weight-bold">Why are these instructions appearing in my Moodle site?</h6><p>This instruction panel is temporary. <strong>It appears here to staff only</strong> via a script written by the Educational Design team and <strong>will be removed before students gain access to the site</strong>.</p></div></div></div>');
					};*/	
					//Close off IF statement relating to checking the role level of the staff member
				};
			});
		};
		//Close off function to check for the recycle bin link		
	});
	//Check the admin block links for the Restore link, which, if present means the staff member is an administrator	
	$(".block-region .type_course a").each(function(){
		if($(this).text().match(/Restore/)){
			$('.section_action_menu .editing_delete').css('display','block');
			$('#inst3407551 .action-menu-trigger').css('display','block');
			$('#inst3407542 .action-menu-trigger').css('display','block');
			var turnEditingOnBtnText = $('.header-button button').text();
			if (turnEditingOnBtnText == "Turn editing off"){
				$('#section-0 .summary .fa-cog').closest('a').show();
				console.log('editing is on');
			}
			else {
				console.log('editing is off or button does not exist');
			}
			//Query the logged in user block and find the user's name
			var userName = document.querySelector('.myprofileitem.fullname')
			? document.querySelector('.myprofileitem.fullname').innerText
			: null;
			//If you are part of the educational designer team, add the BEEST link			
			if(userName == "Tim Scholl" || userName == "Tahlia Birnbaum" || userName == "Carmen Sapsed" || userName == "Josephine Hook" || userName == "Ingrid D'Souza"){
				$(".header-right").prepend('<div class="custom-menus my-auto"><a type="button" target="_blank" class="border border-dark rounded-circle p-2 text-dark" role="button" title="BEEST" style="width:38px; height: 38px;" data-toggle="modal" data-target=".beest-home-modal" id="beestDropdown"><img src="https://mon-arts-ed-des.github.io/BEEST/img/dragon-solid-black.png" width="20px" height="20px" style="margin-bottom: 4px;" /></a>');
				$("#region-main").append('<style>.modal-beest{max-width: 80% !important;}</style><div class="modal fade beest-home-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg modal-beest"><div class="modal-content"><div class="modal-header mb-0 p-2 bg-danger text-white px-5"><h5 class="modal-title text-white my-auto" id="exampleModalLabel">To close this window click the button on the right or anywhere outside this box.</h5><button type="button" class="btn btn-outline-light btn-lg rounded" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Close <i class="fa fa-times"></i></span></button></div><iframe src="https://mon-arts-ed-des.github.io/BEEST/index.html" width="100%" height="900px"></iframe></div></div></div>');
			};
			//If you have asked for the unit search bar to be available to you, add the search bar/Moodle FoA category link into your profile
			if(userName == "Tim Scholl" || userName == "Carmen Sapsed" || userName == "Andrew Williams" || userName == "Anita Cascone" || userName == "Yiou Zhang" || userName == "Melva Renshaw" || userName == "Diana Wong" || userName == "Eleanor Horsburgh" || userName == "Tanya Leznik"){
				$('.header-right').first().after('<div class="fixed-top text-center" style="position:absolute;top:-5px;z-index:1;display: grid;left:25%;right:25%;text-align:center;max-width: 30%;"><form id="coursesearch" action="https://lms.monash.edu/course/search.php" method="get" target="_blank" class="text-center"><fieldset class="coursesearchbox invisiblefieldset"><input type="text" id="coursesearchbox" name="search" placeholder="Unit code/title" class="p-2 h5 text-center mr-2"> <button type="submit" target="_blank" class="btn btn-default text-white bg-dark btn-lg h5 p-2 ml-2"><i class="fa fa-search" aria-hidden="true"></i></button><a class="btn btn-default text-white bg-dark btn-lg h5 p-2 ml-2" href="https://lms.monash.edu/course/index.php?categoryid=23" target="_blank"><i class="fa fa-fw fa-database" aria-hidden="true"></i></a></fieldset></form></div>');
			};
		};
	});
	//make a variable of the section name
	var assessmentSectionName=$('.sectionname').text();
	//check if we are on the assessments section
	if (assessmentSectionName.match(/Assessment/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if the assessment text already exists
		if ($('.label:contains("Please be aware that the following penalties apply if you submit your assessment task after the due date and time without an approved extension or special consideration:")').length!=0){
			console.log('text present')
		}
		else{
			//input the text if it isn't already present, after the section name
			console.log('text NOT present')
			$('.sectionname').after('<div id="assessmentPenaltyText"><p>Please be aware that the following penalties apply if you submit your assessment task after the due date and time without an approved extension or special consideration:</p><p><em>You will receive a penalty of 10 per cent for late submission, and a further 10 per cent penalty will be applied for each additional day (24-hour period), or part thereof, that the assessment task is overdue. Assessment tasks submitted more than seven days late will not be accepted and will receive a zero mark.</em></p></div>')
		}
	}
	else{
		console.log('not Assessment Section or section 0')
	}
	$('#inst3494068 div.card-text div.no-overflow p').remove();
	$('#inst3494068 div.card-text div.no-overflow').prepend('<div class="pb-0 pt-1 px-2 preambleAssessment mt-0"><p>Meet with an adviser for learning and English language support by clicking below.</p><p><a href="https://www.monash.edu/students/study-support/learning" class="btn btn-default btn-block w-50 mx-auto btn-secondary" target="_blank" title="Learning and English Language support">Go <i class="fa fa-arrow-right aria-hidden="true"></i></a></p></div>');
	$('li.activity').on('click',function(){
    setTimeout(function(){
      var popupActive=$('body').find('.moodle-dialogue-base');
      if (popupActive.length != 0){
        $('ul.dragdrop-keyboard-drag li a').first().blur();
        var moodleMoveObjectCSS =document.createElement('link');
        moodleMoveObjectCSS.rel='stylesheet';
        moodleMoveObjectCSS.href='https://mon-arts-ed-des.github.io/artsmoodlecode/moodleMoveObject.css';
        moodleMoveObjectCSS.type="text/css";
        document.getElementsByTagName('head')[0].appendChild(moodleMoveObjectCSS);
        $('html, body').animate({scrollTop: '0px'}, 300);
        $('ul.dragdrop-keyboard-drag li').prepend('&nbsp;&#x2022;'); 
        $('.moodle-dialogue-hd > span').prependTo('.moodle-dialogue-bd');
        $('.moodle-dialogue-bd span button').addClass('text-white h6 p-2 border border-white rounded');
        $('div.moodle-dialogue-hd').text($('div.moodle-dialogue-hd').text().slice(0,70));
        $('div.moodle-dialogue-hd').append('&#8230;');
        $('.moodle-dialogue-bd span button').prepend('Close ');
       // console.log('truncating function worked');
        }
        else{
		//do nothing
        //  console.log('truncating function did not work')
        }
      }, 100);
  });
	if(window.location.href.match(/grader/) != null){
    $('.fa-eye-slash').closest('a').before('<span class="badge badge-warning rounded">hidden</span> ')
    $('.fa-eye').closest('a').before('<span class="badge badge-success rounded">visible</span> ')
    console.log('on the grader page')
  }
  else{
    console.log('not on the grader page')
  }
	//Next Moodle modification needs to start on the line above. Leave this comment in place for future modifications.
	//Setup the BEEST if the correct javascript file is present for lecturers. This is so we can give access in individual units for S1 2021.	
	setup_beest(match_lect,{button:true,iFrame:true});
	/*	var currentURL = window.location.href;
	var blockTitles = $('aside section .card-title').text();
	var returnToSectionLink = $('.breadcrumb-item:nth-last-child(2) > a').attr('href');*/
	//Close load function	
});
