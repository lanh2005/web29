/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
    
}

/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
    let sum = 0 ;
    for (i = 1 ; i < n ;i++){
    sum +=i;}
    console.log(sum);
}
sumOfNumbers(10)

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
    let sum =0;
    for ( let i = start ; i < end ;i++) {
    if ( i % 2 !=0) sum +=i;}
    return sum ;
}
console.log(sumOfOddNumbers(5,10));//5 7 9

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {
    // i từ 1 đến number
    // kiểm tra number có chia hết cho i không thì in ra
    


}

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
    let count =0; // đếm số lần 
    let paper= 0.1; // độ dày ban đầu 
    let think = 1000 * thickness; // độ dày mong muốn
    while (paper < thick) {
        paper *= 2; // gấp 1 lần , thì độ dyaf tăng 2 lần 
        count++; // đếm 
    }
    return count;
}
console.log ("so lan can gap la", countFolding(100));

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
   let count=0;
   while (dad > son *2 ) {
    count++;
    dad++;
    son++;
   }
   return count


}
console.log (countYears(30,4));
// tìm số chân gà và chó
// vùa gà vùa chó bps lại cho tròn 36 con , 100 chân
function countLegs(){
    let dog = 0;
    const doglegs = 4;
    const 

}