  //wait for window to load
window.addEventListener('load', function(){
  //run function to check if jQuery has loaded
      checkJQuery();
      function checkJQuery(){
  //if jQuery hasn't loaded, wait 100ms and check again, once loaded run the function runTooltipJS to initialise tooltips
        if (typeof(jQuery)==='undefined'){
          setTimeout(checkJQuery,100);
        }
        else{
          runTooltipJS();
        }
      }
  //function to initialise and style tooltips on the page
      function runTooltipJS(){
  //use Liberate's loadjscssfile function to append a CSS file that styles tooltips to the head element
        loadjscssfile("https://mon-arts-ed-des.github.io/artsmoodlecode/tooltipStyle.css", "css");
  //create a script element
        var t = document.createElement("script");
  //create a text attribute
        t.type = "text/javascript";
  //create a src attribute
        t.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
  //create an integrity attribute
        t.integrity = "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q";
  //create a crossorigin attribute
        t.crossorigin = "anonymous";
  //append the popperJS script to the body
        $("body").append(t);
  //once page has loaded run the checkPopper function
        t.onload=checkPopper();
      }
  //checkPopper function to initialise tooltips on the page according to Bootstrap specs
     function checkPopper(){
        try{$('[data-toggle="tooltip"]').tooltip();}catch(ex){setTimeout(checkPopper,100)};
       }
});
