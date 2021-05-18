window.addEventListener('DOMContentLoaded', (event) => {
if (window.location.href.indexOf("pageid=-9") > -1) {
link=document.createElement('link');
link.rel='stylesheet';
link.href='https://mon-arts-ed-des.github.io/artsmoodlecode/endOfLessonBlock.css';
link.type="text/css"
document.getElementsByTagName('head')[0].appendChild(link);
}
    else{
link=document.createElement('link');
link.rel='stylesheet';
link.href='https://mon-arts-ed-des.github.io/artsmoodlecode/lessonBlock.css';
link.type="text/css"
document.getElementsByTagName('head')[0].appendChild(link);
    }
});
window.addEventListener('load', function(){
     $('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
    });

if (window.location.href.indexOf("pageid=-9") > -1) {
        $('.boxaligncenter p').css('display','none');
        $('.boxaligncenter .center').css('display','none');
        $('.boxaligncenter a:last-child').attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
        $('.boxaligncenter p').before('<h5>You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
        $('.boxaligncenter .center').before('<h5>You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
        $('.boxaligncenter p').after('<ul style="color:black;"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing (if made available in this lesson)</li><li> Or you can continue onto the next activity (if made available in this lesson) <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
        $('.boxaligncenter .center').after('<ul style="color:black;"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing (if made available in this lesson)</li><li> Or you can continue onto the next activity (if made available in this lesson) <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
        $('.boxaligncenter a.lessonbutton:nth-last-child(4)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i>&nbsp;&nbsp;');
        $('.boxaligncenter a.lessonbutton:nth-last-child(3)').append(' <i class="fa fa-hand-o-right" aria-hidden="true"></i>');
        var linkUrl=$('ol.breadcrumb li:nth-last-child(2) > a').html();
        $('.boxaligncenter a:nth-last-child(2)').html(linkUrl);
        $('.boxaligncenter a:nth-last-child(2)').append('&nbsp;&nbsp;<i class="fa fa-reply"></i>');
        $('.boxaligncenter a:nth-last-child(2)').prepend('Return to ');
    }
    else {
  //do nothing
    };
});
