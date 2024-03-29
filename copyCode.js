window.addEventListener("load", function(){
        $('.copyHTML').on('click', function(event) {
        var htmlBtn = $(this);
        var htmlSnippet = htmlBtn.prev('span').html();
        copyTextToClipboard(htmlSnippet);
        var originalHtmlBtn = $('.copyHTML').clone().html()        
        htmlBtn.html('<i class="fa fa-check" aria-hidden="true"></i> HTML copied');
        htmlBtn.toggleClass('btn-success btn-primary');
        window.setTimeout(function() {
                htmlBtn.html(originalHtmlBtn);
                htmlBtn.toggleClass('btn-success btn-primary');
        }, 1500);
        /* Act on the event */
    });
  $('.copyMoodle').on('click', function(event) {
        var moodleBtn = $(this);
        var moodleSnippet = moodleBtn.prev('span').text();
        copyTextToClipboard(moodleSnippet);
        var originalMoodleBtn = $('.copyMoodle').clone().html()        
        moodleBtn.html('<i class="fa fa-check" aria-hidden="true"></i> Moodle code copied');
        moodleBtn.toggleClass('btn-success btn-info');
        window.setTimeout(function() {
                moodleBtn.html(originalMoodleBtn);
                moodleBtn.toggleClass('btn-success btn-info');
        }, 1500);
        /* Act on the event */
    });
        function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
 
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';

    } catch (err) {

    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {

    }, function(err) {

    });
}
});


