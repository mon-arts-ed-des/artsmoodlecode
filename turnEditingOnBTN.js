// JavaScript Document

$(function() {
   moodle_editing_setting();
});
function moodle_editing_setting() {

   var button = $('.context-header-settings-menu a[href*="edit=o"]');

   if (button.length) {
       var html = $(button).html();

       // set different button themes for editing on or off
       if (html.indexOf("Turn editing on") >= 0) {
           var state = "btn-primary";
       } else {
           var state = "btn-success";
       }
       var href = $(button).attr('href');
       var btn = '<a class="btn ' + state + '" id="edit-setting" href="' + href + '"><span>' + html + '</span></a>';

       // Add button before breadcrumbs
       $("#page-navbar").before(btn);
   }
}
// ]]>
