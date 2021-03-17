window.addEventListener('load', function(){
checkJQuery();
function checkJQuery(){
if (typeof(jQuery)==='undefined'){setTimeout(checkJQuery,100);}else{runTooltipJS();}
}
function runTooltipJS(){
loadjscssfile("https://mon-arts-ed-des.github.io/artsmoodlecode/tooltipStyle.css", "css");
var t = document.createElement("script");
t.type = "text/javascript";
t.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
t.integrity = "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q";
t.crossorigin = "anonymous";
$("body").append(t);
t.onload=checkPopper();
}
function checkPopper(){
try{$('[data-toggle="tooltip"]').tooltip();}catch(ex){setTimeout(checkPopper,100);
}
});
/*var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
s.integrity = "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN";
s.crossorigin = "anonymous";
var t = document.createElement("script");
t.type = "text/javascript";
t.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
t.integrity = "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q";
t.crossorigin = "anonymous";
$("head").append(s);
$("head").append(t);
$('head').append('<script>$(document).ready(function(){ $(\'[data-toggle="tooltip"]\').tooltip();});</script>');*/
