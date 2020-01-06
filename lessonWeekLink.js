$(document).ready(function(){
    $('a').each(function(){
        this.href = this.href.replace('#section-', '&section=');
    });
});
$('.generalbox a:last-child').attr('href', $('ol.breadcrumb li:nth-last-child(2) > a').attr('href'));
