checkJQuery();
function checkJQuery(){if (typeof(jQuery)==='undefined'){setTimeout(checkJQuery,100);}else{startJS();}}

var timeout=null;



function startJS(){
	$(document).ready(function() {
		$(".arts-dropdown").on("click",function(){$(this).find(".arts-dropdown-content").stop(true).slideToggle();});
		$(".arts-banner-btn").on("click",function(){$(this).parent().next().stop(true).slideToggle();$(this).find("i").toggle();});
		changeLinks();
		checkEndOfLesson();


		$('.icc-acc-toggle').click(function(e){
			e.preventDefault();
			var $this = $(this);

			if ($this.hasClass('icc-accordion-show')) {
				$this.removeClass('icc-accordion-show');
			}else{
				$this.toggleClass('icc-accordion-show');
			}


			if ($this.next().hasClass('icc-accordion-show')) {
				$this.next().removeClass('icc-accordion-show');
				$this.next().slideUp(350);
			}else{
				$this.parent().parent().find('div .inner').removeClass('icc-accordion-show');
				$this.parent().parent().find('div .inner').slideUp(350);
				$this.next().toggleClass('icc-accordion-show');
				$this.next().slideToggle(350);
			}
		});


		$('a[data-toggle="tab"]').on('shown.bs.tab',function(e){
			//e.target // newly activated tab
			//e.relatedTarget // previous active tab

			try{

				//console.log(e.target);
				//console.log(e.relatedTarget);
				var prevId="#"+$(e.relatedTarget).attr('id')+"-content";
				var prevFrm=$(prevId).find("iframe");
				var prevSrc=$(prevFrm).attr("src");
				$(prevFrm).attr("src",prevSrc);

			}catch(ex){
				console.log(ex);
			}

		});

		/* CQ Scores */
		$(".CQ_scores_btn").on("click",function(){
			var clsArr=this.className.split(' ');
			$(".CQ_scores_fb").hide();
			var clsNum=clsArr.length;
			var clsName=clsArr[clsNum-1];
			$("#"+clsName).fadeIn();
		});

	});
}


function highlight(obj,num){
	$(".slider-text").eq(num).find("span").removeClass("slider-highlight");
	if(obj>0)$(".slider-text").eq(num).find("span:eq("+obj+")").addClass("slider-highlight");
}


function changeLinks(){
  	
	var sec=getParameterByName("section");
	var id=getParameterByName("id");
  	var alist=$(".arts-nav a[href]");
	var menunum=$(".arts-nav").attr("data-menu-num");
	var url=window.location.href.split('?')[0];
	
	

	//if(sec==null&&menunum==undefined){location.href=url+"?id="+id+"&section=1";}
	
 	if(menunum==undefined){
		$(".arts-nav a[href]").each(function(i){if(sec==(i+1))$(this).addClass("arts-nav-active");});
	}else{
		$(".arts-nav a[href]").eq(menunum-1).addClass("arts-nav-active");
	}

}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function checkEndOfLesson(){
	console.log("checkEndOfLesson");
	if($("h3").text().indexOf("end of lesson")>0){
		console.log("checkEndOfLesson h3 "+$("h3").text().indexOf("end of lesson"));
		showEndOfLesson();
	}
}


