<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
    $(document).ready(function(){
    $('a').each(function(){
        this.href = this.href.replace('#section-', '&section=');
    });
});
