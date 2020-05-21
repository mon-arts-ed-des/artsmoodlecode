window.onload=function(){
    $('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
    $('.editor_atto_toolbar div').removeAttr('hidden');
    $('.editor_atto_toolbar div').css('display', 'inline-block');
    $('.mceToolbarRow2').css('display', 'table');
    $('.mceToolbarRow3').css('display', 'table');
   
    });
}
