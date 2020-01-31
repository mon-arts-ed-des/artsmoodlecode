window.onload=function(){
  $('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
    });
  $('.generalbox a:nth-last-child(2)').attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
  $('.generalbox p').prepend('<h5>You have completed the activity <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>, Where to next?</h5>');
  $('.generalbox p').append('<ul style="color:black;"><li><i class="fa fa-hand-o-left" aria-hidden="true"></i> You can review this lesson material again before continuing</li><li> Or you can continue onto the next activity <i class="fa fa-hand-o-right" aria-hidden="true"></i></li><li>Or return to the week this lesson is part of <i class="fa fa-calendar" aria-hidden="true"></i></li></ul>');
  $('.generalbox a.lessonbutton:nth-child(3)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i> ');
  $('.generalbox a.lessonbutton:nth-child(4)').append(' <i class="fa fa-hand-o-right" aria-hidden="true"></i>');
  $('.generalbox a.lessonbutton:nth-child(5)').append(' <i class="fa fa-calendar" aria-hidden="true"></i>');
  $('.progress-bar').append(' <span>Complete! <i class="fa fa-flag-checkered" aria-hidden="true"></i></span>');
};
