/* global $ */
var comment;
function math(naut){
    var meters = naut * 1852;
    var smoot = meters / 1.7;
}
$( "#commentBttn" ).click(function() {
    comment = $("#commentInput").val();
    $("#commentsP").append(comment);
});