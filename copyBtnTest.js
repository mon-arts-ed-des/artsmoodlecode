window.addEventListener("load", function(){
        $('.copybutton').on('click', function(event) {
        var btn = $(this);
        var snippet = '<div><button class="arts-banner-btn">Menu <i class="fa fa-times" aria-hidden="true"></i></button></div><nav class="arts-banner-nav" role="navigation"><div id="arts-overview"><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=1"><i class="fa fa-map fa-fw" aria-hidden="true"></i> Overview</a></div><div id="arts-dropdown" class="arts-banner-dropdown"><a href="javascript:void(0);"><i class="fa fa-chevron-circle-down fa-fw" aria-hidden="true"></i> <span class="arts-banner-dropdown-link">Topics <i class="fa fa-caret-down" aria-hidden="true"></i></span></a><div class="arts-banner-dropdown-content"><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=2">Topic 1</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=3">Topic 2</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=4">Topic 3</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=5">Topic 4</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=6">Topic 5</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=7">Topic 6</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=8">Topic 7</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=9">Topic 8</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=10">Topic 9</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=11">Topic 10</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=12">Topic 11</a><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=13">Topic 12</a></div></div><div id="arts-assessment"><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=14"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i> Assessment</a></div><div id="arts-forum"><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=15"><i class="fa fa-comments fa-fw" aria-hidden="true"></i> Communication</a></div><div id="arts-resources"><a href="https://lms.monash.edu/course/view.php?id=000&amp;section=16"><i class="fa fa-folder-open fa-fw" aria-hidden="true"></i> Study Resources</a></div><div id="arts-grades"><a href="https://lms.monash.edu/grade/report/index.php?id=000"><i class="fa fa-graduation-cap fa-fw" aria-hidden="true"></i> Grades</a></div></nav><script type="text/javascript">    // <![CDATA[    function loadjscssfile(filename, filetype){if (filetype == "js"){ var fileref = document.createElement('script')fileref.setAttribute("type", "text/javascript")fileref.setAttribute("src", filename)}else if(filetype == "css"){var fileref = document.createElement("link")fileref.setAttribute("rel", "stylesheet")fileref.setAttribute("type", "text/css")fileref.setAttribute("href", filename)}if (typeof fileref != "undefined")document.getElementsByTagName("head")[0].appendChild(fileref)}loadjscssfile("https://mon-arts-ed-des.github.io/artsmoodlecode/globalRedirectToOverview.js", "js");loadjscssfile("https://liberatelms.com/_boot/monash/art/banner/arts_banner.js", "js");loadjscssfile("https://liberatelms.com/_boot/monash/art/banner/arts_banner.css", "css");// ]]></script>'
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
