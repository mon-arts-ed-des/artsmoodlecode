window.onload=function(){
    $('nav a').each(function(){
        this.href=this.href.replace('#section-','&section=');
    });
}
