window.addEventListener("load", function(){
        $('.copybutton').on('click', function(event) {
        var btn = $(this);
        var snippet = btn.next('div').html();
        console.log("@GB: snippet = ", snippet);
        copyTextToClipboard(snippet);
        // btn.addClass('btn-danger');
        btn.toggleClass('btn-success btn-light');
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Instructions have been copied to clipboard');
        window.setTimeout(function() {
            btn.html('<i class="fa fa-clipboard" aria-hidden="true"></i> Copy instructions');
            // btn.removeClass('btn-danger');
            btn.toggleClass('btn-success btn-light');
        }, 3000);
        /* Act on the event */
    });
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
