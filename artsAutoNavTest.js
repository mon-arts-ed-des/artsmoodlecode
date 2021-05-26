var log_this=true;
var orig_array=[];
var nav_array=[];
var home_array=["welcome","overview","home"];
var resources_array=["study resources","resources"];
var assessment_array=["assessment","exam","test"];
var forum_array=["forum","communication","communication/faqs"];
var topics_array=["topic","week","module","day","block"];
var stick_height, navbar;
var start_section;
var dropdownText;

/*window.addEventListener('DOMContentLoaded',function hideCollapsedArea(){
	document.querySelectorAll(".topics").forEach(e => e.parentNode.removeChild(e));
	document.querySelectorAll("#toggle-all").forEach(f => f.parentNode.removeChild(f));
	document.querySelectorAll("#topcoll-display-instructions").forEach(g => g.parentNode.removeChild(g));
console.log("removed topics collapsed complete");
});*/

checkJQuery();
function checkJQuery(){
	if (typeof(jQuery)==='undefined'){
		setTimeout(checkJQuery,100);}
	else{
		get_nav();}
}

//push all the nav items into an array - all we care about is name and URL
function get_nav(){
	if(log_this)console.log("------------------------ get nav ------------------------");
	
	$("#nav-drawer .list-group:first a").one().each(function(){
		var new_obj=new Object();
		new_obj.name=$(this).prop("innerText").trim();
		new_obj.href=$(this).attr("href");
		orig_array.push(new_obj);
		
	});
	if(log_this)console.log(orig_array);
	
	
	//get navbar section so we can apply styles to it
	navbar=document.getElementById("section-0");

	//get the breadcrumb position (is there ever a case where there isn't a breadcrumb?)
	var breadcrumbs=document.getElementById("page-navbar");
	stick_height=breadcrumbs.offsetTop;
	//remove 15 for the padding in the main panel
	stick_height-=15;
	window.onscroll=function(){set_sticky_nav()};

	$(window).resize(function(){
		$(".arts-banner-dropdown-content").width($("#arts-dropdown").width());
		if($(window).width()<1000)$(".arts-banner-dropdown-content").css('width','100%');
	});
	
	set_start();
	get_home();
	get_topics();
	get_assessment();
	get_forum();
	get_resources();
	get_grades();
	build_nav();
	set_click();
	dropdownParent();
	
}



function get_home(){
	if(log_this)console.log("------------------------ get home ------------------------");
	
	$.each(home_array,function(i,word){
		$.each(orig_array,function(x,obj){
			if(word==obj.name.toLowerCase()){
				if(log_this)console.log("FOUND "+word+" AT "+x);
				var tmp='<div id="arts-overview"><a href="'+obj.href+'"><i class="fa fa-map fa-fw" aria-hidden="true"></i> '+obj.name+'</a></div>';
				nav_array.push(tmp);
				if(!start_section)start_section=obj.href;
			}
		});	
	});
	
}



function get_resources(){
	if(log_this)console.log("------------------------ get resources ------------------------");
	
	$.each(resources_array,function(i,word){
		$.each(orig_array,function(x,obj){
			if(word==obj.name.toLowerCase()){
				if(log_this)console.log("FOUND "+word+" AT "+x);
				var tmp='<div id="arts-resources"><a href="'+obj.href+'"><i class="fa fa-folder-open fa-fw" aria-hidden="true"></i> '+obj.name+'</a></div>';
				nav_array.push(tmp);
				if(!start_section)start_section=obj.href;
			}
		});	
	});
	
}

function get_assessment(){
	if(log_this)console.log("------------------------ get assessment ------------------------");
	
	$.each(assessment_array,function(i,word){
		$.each(orig_array,function(x,obj){
			if(word==obj.name.toLowerCase()){
				if(log_this)console.log("FOUND "+word+" AT "+x);
				var tmp='<div id="arts-assessment"><a href="'+obj.href+'"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i> '+obj.name+'</a></div>';
				nav_array.push(tmp);
				if(!start_section)start_section=obj.href;
			}
		});	
	});
	
}

function get_forum(){
	if(log_this)console.log("------------------------ get forum ------------------------");
	
	$.each(forum_array,function(i,word){
		$.each(orig_array,function(x,obj){
			if(word==obj.name.toLowerCase()){
				if(log_this)console.log("FOUND "+word+" AT "+x);
				var tmp='<div id="arts-forum"><a href="'+obj.href+'"><i class="fa fa-comments fa-fw" aria-hidden="true"></i> '+obj.name+'</a></div>';
				nav_array.push(tmp);
				if(!start_section)start_section=obj.href;
			}
		});	
	});
}

function get_topics(){
	if(log_this)console.log("------------------------ get topics ------------------------");
	
	var tmp="";
	$.each(topics_array,function(i,word){
		$.each(orig_array,function(x,obj){
			
			if(obj.name.toLowerCase().indexOf(word)!=-1){
				if(log_this)console.log("FOUND "+word+" AT "+x);
				tmp+='<a href="'+obj.href+'">'+obj.name+'</a>';
				
			}
		});	
	});
	
	var full='<div id="arts-dropdown" class="arts-banner-dropdown"><a href="javascript:void(0);"><i class="fa fa-chevron-circle-down fa-fw" aria-hidden="true"></i> <span class="arts-banner-dropdown-link"> <i class="fa fa-caret-down"></i></span></a><div class="arts-banner-dropdown-content">'+tmp+'</div></div>';

	nav_array.push(full);
}



function get_grades(){
	if(log_this)console.log("------------------------ get grades ------------------------");
	
	$.each(orig_array,function(x,obj){
		if("grades"==obj.name.toLowerCase()){
			if(log_this)console.log("FOUND grades AT "+x);
			var tmp='<div id="arts-grades"><a href="'+obj.href+'"><i class="fa fa-graduation-cap fa-fw" aria-hidden="true"></i> '+obj.name+'</a></div>';
			nav_array.push(tmp);
		}
	});	

}



function build_nav(){
	if(log_this)console.log("------------------------ build nav ------------------------");
	
	var nav_menu='<div><button class="arts-banner-btn">Menu <i class="fa fa-times" aria-hidden="true"></i></button></div><div class="arts-banner-nav">';
	$.each(nav_array,function(i,link){nav_menu+=link;});
	nav_menu+="</div>";
	
	nav_menu=nav_menu.replace(/#section-/g, "&section=");

	$(".summary .no-overflow").first().append(nav_menu);	
	
}

function set_click(){
	if(log_this)console.log("------------------------ set click ------------------------");
	
	$(".arts-banner-dropdown").on("click",function(){
      var obj=$(this).find(".arts-banner-dropdown-content");
		var lengths = $(".arts-banner-dropdown-content a").map(function(i, el) {
    		return $(el).text().length;
		}).get();
		var maxLength = Math.max.apply(this, lengths);
		console.log(maxLength);
		if (maxLength > 8){
			$('.arts-banner-dropdown-content').width('unset');
		}
		else {
			$(".arts-banner-dropdown-content").width($("#arts-dropdown").width());
		}		
		if($(window).width()<1000)$(".arts-banner-dropdown-content").css('width','100%');
	
			var id1=$(this).attr("id");
			
			$(".arts-banner-dropdown-content").each(function(){
				var id2=$(this).parent().attr("id");
				if(id1!=id2){
					if($(this).css("display") == "block"){$(this).stop(true).slideToggle(); }
				}
			});

      obj.stop(true).slideToggle();
    });
	
	$(".arts-banner-btn").on("click",function(){
		$(this).parent().next().stop(true).slideToggle();
		$(this).find("i").toggle();

		// get weeks on second row, if present
		var secondRow=$(this).parent().next().next();
		if(secondRow.hasClass("arts-banner-nav-row"))secondRow.stop(true).slideToggle();

	});
	
}
function dropdownParent(){
var dropdownText = $('.arts-banner-dropdown-content a').text()
		if(dropdownText.indexOf("Topic") != -1){
			$('.arts-banner-dropdown-link').html('Topics <i class="fa fa-caret-down"></i>')
		}
		else if(dropdownText.indexOf("Week") != -1){
			$('.arts-banner-dropdown-link').html('Weeks <i class="fa fa-caret-down"></i>')
       		}
		else if(dropdownText.indexOf("Block") != -1){
			$('.arts-banner-dropdown-link').html('Blocks <i class="fa fa-caret-down"></i>')
            	}
		else if(dropdownText.indexOf("Module") != -1){
			$('.arts-banner-dropdown-link').html('Modules <i class="fa fa-caret-down"></i>')
            	}
		else if(dropdownText.indexOf("Day") != -1){
			$('.arts-banner-dropdown-link').html('Days <i class="fa fa-caret-down"></i>')
	        }
}

/*function resizeWindow(){
	if(log_this)console.log("------------------------ resize window ------------------------");
window.addEventListener('load', function(){
	var titleLengthMax = $('.arts-banner-dropdown-content a:last-child').text().length;
		if (titleLengthMax > 8){
			$('.arts-banner-dropdown-content').width('unset');
		}
		else if (titleLengthMax < 8) {
			$(".arts-banner-dropdown-content").width($("#arts-dropdown").width());
		}		
		else if($(window).width()<1000){
			$(".arts-banner-dropdown-content").css('width','100%');
		}
	console.log(titleLengthMax);
});
}*/

function set_start(){
	
	var sectionNumberRD = window.location.href.indexOf('section')
	var editScreenRD = window.location.href.indexOf('edit')
	var completionRD = window.location.href.indexOf('completion')
	var hashSectionRD = window.location.href.indexOf('#section-')
	var userRD = window.location.href.indexOf('user')
	var enrolRD = window.location.href.indexOf('enrol')
	var groupRD = window.location.href.indexOf('group')
	var rolesRD = window.location.href.indexOf('roles')
	var filterRD = window.location.href.indexOf('filter')
	var reportRD = window.location.href.indexOf('report')
	var gradeRD = window.location.href.indexOf('grade')
	var backupRD = window.location.href.indexOf('backup')
	var resetRD = window.location.href.indexOf('reset')
	var questionRD = window.location.href.indexOf('question')
	var filesRD = window.location.href.indexOf('files')
	var adminRD = window.location.href.indexOf('admin')
	var previewRD = window.location.href.indexOf('preview')
	//section is null so it must be the entry page
	if (sectionNumberRD == -1 && editScreenRD == -1 && completionRD == -1 && userRD == -1 && completionRD == -1 && enrolRD == -1 && groupRD == -1 && rolesRD == -1 && filterRD == -1 && reportRD == -1 && gradeRD == -1 && backupRD == -1 && resetRD == -1 && questionRD == -1 && filesRD == -1 && adminRD == -1 && previewRD == -1 || hashSectionRD > -1) {
		 document.querySelector(".topics").remove();
	document.querySelector("#toggle-all").remove();
	document.querySelector("#topcoll-display-instructions").remove();
		//find the link that has the text Overview or Welcome in it and take its href value and assign it to a variable
		var overviewSection=$("nav a:contains('Overview'), nav a:contains('Welcome'), nav a:contains('Home')").attr('href');
		//change the current window address to the new section
		overviewSection=overviewSection.replace("#section-", "&section=");
		window.location.href = overviewSection;
	}
}
function set_sticky_nav(){
	var nav_drawer=document.getElementById("nav-drawer");

	var nav_drawer_top=nav_drawer.offsetTop;
  if(window.pageYOffset>=stick_height){
    nav_drawer.setAttribute("data-region2","drawer");
    navbar.classList.add("sticky");

  }else{
    nav_drawer.removeAttribute("data-region2");
    nav_drawer.style.top=nav_drawer_top;
    navbar.classList.remove("sticky");
  }
}
