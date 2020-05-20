window.onload=function(){
    $('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
    $('.editor_atto_toolbar div').removeAttr('hidden');
    $('.editor_atto_toolbar div').css('display', 'inline-block');
    $('.mceToolbarRow2').css('display', 'table');
    $('.mceToolbarRow3').css('display', 'table');
    $(".block-region a").each(function(){
    if($(this).text().match(/Turn editing/)){
    $( ".header-right" ).prepend('<div class="custom-menus my-auto"><a href="https://lms.monash.edu/course/view.php?id=48399&section=11"    target="_blank" class="border border-dark rounded-circle text-dark p-2" role="button" title="Ed Tech support"><i class="fa fa-bolt fa-fw" aria-hidden="true"></i></a></div>');
$( ".list-group" ).prepend('<a class="list-group-item list-group-item-action" href="https://lms.monash.edu/course/view.php?id=48399&section=11" target="_blank" data-key="coursehome" data-isexpandable="0" data-indent="0" data-showdivider="0" data-type="60" data-nodetype="0" data-collapse="0" data-forceopen="0" data-isactive="0" data-hidden="0" data-preceedwithhr="0"><div class="ml-0"><div class="media"><span class="media-left"><i class="icon fa fa-bolt fa-fw " aria-hidden="true"></i></span><span class="media-body ">Ed Tech support</span></div></div></a>');
    }   
});
    });
}
