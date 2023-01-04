const ROW = 3 ;
const CELL = 3;

function createCell() {
    return $("<div class='cell' />");

}
function createRow(num0fCols){
    const $row = $("<div class='row' />");

    $row.append(Array(num0fCols).fill(createCell()));
    console.log($row,Array(num0fCols).map)
}