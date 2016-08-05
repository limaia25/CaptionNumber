function autoFigureNumber() {
var n="1"
var textRef ="Fig."

$('.caption').each(function () {
    var alt = $(this).attr("id");
    var text = $(this).html();
    $(this).text(textRef + n + " - " + text);
    $("[href='" + alt + "']").each(function () {
        $(this).text(textRef + n);
    })
    n++;
})


}









