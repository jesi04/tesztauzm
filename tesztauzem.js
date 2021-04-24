
$(document).ready(function() {
    $.ajax({
        "url": "/api/akcio", 
        "method": "GET",
    }).done(function(msg) {
        $("#akcios-teszta").html(msg.akciosTeszta);
        $("#akcios-ar").html(msg.akciosAr);
    });
});

$("button").click(function() {
    $.ajax({
        "url": "/api/jatek", 
        "method": "POST",
        "data": {
            "uzenet": $("#jatek-valasz").val()
        }
    }).done(function(msg) {
        alert("Köszönjük, hogy részt vett játékunkban");
    });
});