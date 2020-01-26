window.onload=function(){
    $('nav a, .bookexit').each(function(){
        this.href=this.href.replace('#section-','&section=');
    $('.editor_atto_toolbar div').removeAttr('hidden');
    });
};
