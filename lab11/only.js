//Cho nội dung HTML như trên, thực hiện các yêu cầu sau:

//1. Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
document.title = heading;
//2. Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
const h1 = document.querySelector(".heading");
h1.textContent = heading;
//3. Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
const img = document.querySelector("img");
img.src = avata;
//4. Thay đổi `href` của thẻ `a` thành giá trị của `profile`
const a = document.querySelector("a");
a.her = profile;
//5. Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
const ul = document.querySelector("ul");
ul.querySelector("li:first-chill").textContent = "hahahaha";
ul.querySelector("li:last-child").textContent = "sleep";
//6. Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
ul.lastElementChild.textContent = "sleep";
//7. Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
let present = new Date();
const div = document.querySelector("div");
div.textContent = 
   "Bây giờ là"+
   present.toLocaleTimeString()+
   ", ngày "+
   present.toLocaleDateString();

//8. Đếm số từ trong đoạn văn `p.bio` xem có bao nhiêu từ `Ba` (không phân biệt chữ hoa chữ thường) và thêm nội dung vào thẻ `p.num-of-words` bên dưới thông báo kết quả dạng `Ở đoạn văn trên có xx từ 'Ba'`
 const bio = document.querySelector("bio");
 const words = document.querySelector("");
  const total = bio.innerTex.split("").filter(function (words){
    return words.toLowerCase() ==="ba";

  }).length;
//9. Thêm một hàng mới vào `table` (tham khảo API của `HTMLTableElement`)
const table = document.querySelector("");
const row = table.insertRow();
//10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung `Thầy giáo Ba siêu cấp đẹp trai`
const cell = row.inserCell();
cell.textContent = "Thầy giáo Ba siêu cấp đẹp trai";

