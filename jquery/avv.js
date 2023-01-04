// tạo một thẻ


const $app = $("#app");

const $h1 = $("<h1 class='heading'>hello jquery</h1>");
 
const $p = $("<p />" , {
    id : "time",
    class : "bây giờ là <b>20</b> giờ",
    click : function () {
        console.log("clicked");
    },
});

$app.append($h1,$p);