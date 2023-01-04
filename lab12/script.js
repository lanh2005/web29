// gán sự kiện cho nút 
const btn = document.querySelector(".btn");
const w = document.querySelector("#weight");
const h = document.querySelector("#height");
const result = document.querySelector("#result");

function isNumber(value)
btn.addEventListener("click", function (){
    // lấy giá trị của 2 ô input
    const weight = w.value;
    const height = h.value;

    // tính theo công thức 
    const bmi = weight / height ** 2;
    let isValid = true;

    // hiện thị kết quả
    // kiểm tra xem weight có phải số hay không
    // height có phải số hay không
    // validate dữ liệu
    if (!isNumber(weight)) {
        w.parentElement.classList.add("is-invalid");
        
        isValid = false;
    } else w.parentElement.classList.remove("is-invalid")
    if(!isNumber(height)) {
        console.log("Chiề cao là một số");
        isValid = true;
    }
     

    if (bmi < 18.5) result.innerText = "BIM = " + bmi + " thiếu cân";
    if (18.5 <= bmi && bmi < 25)
      result.innerText = "BIM = " + bmi + " bình thường";
    if (25 <= bmi && bmi < 30) result.innerText = "BIM = " + bmi + "béo phì";
    else if (25 <= bmi && bmi < 30)
      result.innerText = "BIM = " + bmi + " thừa cân";
    else result.innerText = "BIM = " + bmi + " béo phì";
})