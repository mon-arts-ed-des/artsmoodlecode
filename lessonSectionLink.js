window.onload=function(){
  $('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
    });
  $('.generalbox a:last-child').attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
  $('.generalbox a.lessonbutton:nth-child(3)').prepend('<i class="fa fa-hand-o-left" aria-hidden="true"></i> ');
};
