//directs the function to work once the page has loaded.
window.onload=function(){
        //change all links that have #section- in them which goes to the all sections page, to &section= links that go to the single section instead
$('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
      //opens the atto editor completely on load    
    $('.editor_atto_toolbar div').removeAttr('hidden');
    $('.editor_atto_toolbar div').css('display', 'inline-block');
//opens the tinyMCE toolbar rows 2 and 3 on load (once a user collapses this again, it stops working)
    $('.mceToolbarRow2').css('display', 'table');
    $('.mceToolbarRow3').css('display', 'table');
    });
        //style library block to be like the others
    $("#inst3127749 ol li a").removeAttr("style");
    $('#inst3127749 .list a').css({"color": "#006DAE","text-decoration": "none !important","font-size": "1.1rem"});
    $('#inst3127749 ol').css({"border":"2px solid #f0f0f0", "border-radius":"5px","padding":"12px"});
        //make + icons change to - on click
    $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
        //remove unit guide link from all S2 2020 sites
        $(".header-title:contains(S2 2020)").filter(function(){
    $('#arts-guide').remove();
        });
        //add how to's link to the nav banner if you are a tutor, lect, non-primary lect, designer or admin
$(".block-region .type_course a").each(function(){
    if($(this).text().match(/Recycle bin/)){
$( ".header-right" ).prepend('<div class="custom-menus my-auto"><a href="https://lms.monash.edu/course/view.php?id=48399&section=14" target="_blank" class="border border-dark rounded-circle text-dark p-2" role="button" title="Ed Tech how tos"><i class="fa fa-bolt fa-fw" aria-hidden="true"></i></a></div>');
$( "#nav-drawer .list-group" ).prepend('<a class="list-group-item list-group-item-action" href="https://lms.monash.edu/course/view.php?id=48399&section=14" target="_blank" data-key="coursehome" data-isexpandable="0" data-indent="0" data-showdivider="0" data-type="60" data-nodetype="0" data-collapse="0" data-forceopen="0" data-isactive="0" data-hidden="0" data-preceedwithhr="0"><div class="ml-0"><div class="media"><span class="media-left"><i class="icon fa fa-bolt fa-fw " aria-hidden="true"></i></span><span class="media-body ">Ed Tech how tos</span></div></div></a>');
    };
});
	$(".block-region .type_course a").each(function(){
		if($(this).text().match(/Restore/)){
var userName = document.querySelector('.myprofileitem.fullname')
? document.querySelector('.myprofileitem.fullname').innerText
: null;
	if(userName == "Tim Scholl" || userName == "Sneha Mohandas" || userName == "Tahlia Birnbaum" || userName == "Carmen Sapsed" || userName == "Josephine Hook"){
		$(".header-right").prepend('<div class="custom-menus my-auto dropdown"><button type="button" target="_blank" class="border border-dark rounded-circle p-2 text-dark" role="button" title="BEEST" style="width:38px; height: 38px;" data-toggle="modal" data-target=".beest-home-modal" id="beestDropdown"><img src="https://mon-arts-ed-des.github.io/BEEST/img/dragon-solid-black.png" width="20px" height="20px" style="margin-bottom: 4px;" /></button>');
		$("#region-main").append('<style>.modal-beest{max-width: 80% !important;}</style><div class="modal fade beest-home-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg modal-beest"><div class="modal-content"><div class="modal-header mb-0 p-2 bg-danger text-white px-5"><h5 class="modal-title text-white my-auto" id="exampleModalLabel">To close this window click the button on the right or anywhere outside this box.</h5><button type="button" class="btn btn-outline-light btn-lg rounded" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Close <i class="fa fa-times"></i></span></button></div><iframe src="https://mon-arts-ed-des.github.io/BEEST/index.html" width="100%" height="900px"></iframe></div></div></div>');
	};
		};
	});
};
