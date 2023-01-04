// bấm vào cốc
// nếu cốC chưa uống 
// lấy index của cốc , fill tất cả các cốc truóc đó , cập nhậT , goal

// nếu cốc đã uống 
//--- cốc hiện tại là index cao nhất
//---- bỏ fill cốc này , cập nhật , goal
//---cốc hiện tại có index thấp hơn index cao nhất thì bỏ các cốc phía sau
 
const glasses = document.querySelectorAll(".glass");

const remained = document.querySelector(".remained");
const drank = document.querySelector(".drank");
let current = 0 ;


const fill= function (index) {
    for ( let i = from ; i <= ito ; i++) {
        glasses[i].classList.add("has-drank");
    }
};
const Update = function (total){
    remained.innerText = 2 - total * 0.25 + "L";
    drank.style.flexBasis = (total/8) * 100 + "%";
    drank.innerText = (total / 8) * 100 + "%";

};
const setup = function () {

    glasses.forEach(function (glass,index) {
        glass.classList = function () {
            if (glass.classList.contains("has-drank")) {
                if (index === current) {
                    undefill(index,current);
                    current = index - 1;
        
               } else {
                     
               }
            }
        }
      
    });
};