var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
s.integrity = "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN";
s.crossorigin = "anonymous";
$("head").append(s);
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
