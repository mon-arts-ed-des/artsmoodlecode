window.addEventListener('load', function(){
    $('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
    });
    if (window.location.href.indexOf("pageid=-9") > -1) {
        $('head').append('<link rel="stylesheet" href="https://mon-arts-ed-des.github.io/artsmoodlecode/endOfLessonBlock.css" />')
        $('.boxaligncenter a:last-child').attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
        $('.boxaligncenter p').prepend('<h5>You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
        $('.boxaligncenter p').append('<ul style="color:black;"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li> Or you can continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the section this lesson is part of <i class="fa fa-reply" aria-hidden="true"></i></li></ul>');
        $('.boxaligncenter a.lessonbutton:nth-child(3)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i> ');
        $('.boxaligncenter a.lessonbutton:nth-child(4)').append(' <i class="fa fa-hand-o-right" aria-hidden="true"></i>');
        var linkUrl=$('ol.breadcrumb li:nth-last-child(2) > a').html();
        $('.boxaligncenter a:last-child').html(linkUrl);
        $('.boxaligncenter a:last-child').append(' <i class="fa fa-reply"></i>');
        $('.boxaligncenter a:last-child').prepend('Return to ');
        $('.progress-bar').append(' <span>Complete! <i class="fa fa-flag-checkered" aria-hidden="true"></i></span>');
    }
    else {
        $('head').append('<link rel="stylesheet" href="https://mon-arts-ed-des.github.io/artsmoodlecode/lessonBlock.css" />')
    };
});
