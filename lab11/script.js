// ngôn ngữ lập trình
// cú pháp , cáu trúc, cấc kiểu dữ liệu cơ bản
// cung cấp thêm các apI khác nhau ( tuỳ thuộc vào môi trường)
// trong môi truòng tringf duyệt , trình duyệt cung cấp API DOM cho phép làm việc với nội dung trên trang web
//- DOM : viết tắt của Document object model
// -BOM : Browser object model
// ca 2 đều là Object : thuộc tình và phương thức
// BOM là đối tượng đại diện cho cửa sổ trình duyệt , có các thuộc tính mô tả thông tin về trình duyệt 
//, và các phuuonwg thức để thao tác với cửa sổ trình duyệt 
// DOM là đói tượng đại diện cho tài liệu HTML , có các thuộc tính mô tả / truy cập đến
// các thông ti trong tài liệu , và các phương thức để tạo / chỉnh sửa /... nội dung HTML 
//

// LƯU Ý :
 // cấu trúc DOM biểu diễn cấu trúc nội dung tương ứng trong html
 // TẤT CẢ MỌI THỨ đều có một NODE tương ứng trong DOM

 // Document :
 document.head ; // truy cập trực tiếp đến thẻ <head / >
 document.title ; // truy cập trực tiếp đến thẻ < tltle / >
 document.body ; // truy cập tực tiếp đến thẻ <body/>
 document.links; // truy cập trực tiếp đến thẻ <a/s> hiển thị trên trang 
 document.forms;
 document.images;
 document.cookie;
 document.write("<h1> đây là nội dung được ghi bởi DOM</h1> ");
 document

 const body = document.body;// node body

 console.log(body.nodeName);
 console.log(body.nodeType);
 console.log(body.parentNode);
 console.log(body.previousElementSibling);// node trước 

 const space = body.previousElementSibling
 const head = body.previousElementSibling

 console.log(head);
 console.log(body.nextSibling); // node sau

 console.log(body.firstChild);
 console.log(body.lastChild);
 console.log(body.childNodes);

 console.log(body.hasChildNodes);
 // từ node body => document.body
 // duyệt đến node "xin chào" => in các thông tin về node này
const text = document.body.firstChild;
console.log(text);
console.log(text.textContent);
console.log(text.nodeType);
console.log(text.hasChildNodes());
console.log(text.childNodes)

//Element => tất acr những node là thẻ HTML ( nodeType = 1)
// thẻ sẽ có thuộc tính ( Element)
// tuỳ thuộc từng thẻ khác nhau , sẽ có được các thuộc tính / phương thưucs bổ sung
// Collection và list chỉ có thao tác lặp , chứ k có phương thức mảng
const body = document.body;

const children = body.children; // HTML [ a , form, img, script]

let a ;

for ( let Element of children) {
    if (Element.nodeType === 1 && Element.tagName === "A"){
        a = Element;
        break;
    }
}
 a.href = "https://google.com";
 a.target = "_blank";
 a.textContent = " Đi đến google";

 let img ;
 for
 a.img =
   "https://i.pinimg.com/564x/07/f9/df/07f9df953582c38d9d38de1f044e7b06.jpg";
 a.alt = ảnh đẹp

const img = document.body.children[2];
console.log(img.srt);
console.log(img.alt);
console.log(document.body.lang);
console.log(document.body.title);
console.log(document.body.id);
console.log(document.body.className);
console.log(document.body.style);
console.log(document.body.translate);
console.log(document.body.dir);
console.log(document.body.tabIndex);

const a = document.body.firstElementChild;
console.log(a.href);
console.log(a.target);

 constbody = document.body;

//ELemen:
 console.log(body.getAttribute);
 console.log(body.attributes.lang.value)
 console.log(body.children); // chỉ bao gồm thẻ con
 console.log(body.innerHTML);// khác childnodes
 console.log(body.innerText);// nội dug html của thẻ
 console.log(body.tagName);// nội dung văn bản
 console.log(body.c)

 // TỔNG HỢP :
 // window là đói tượng cấp cao nhất đại diện cho toàn bộ cửa sổ trình duyệt
 //BOM - là các đối tượng đặc biệt cho phép truy câoj thôg tin về trình duyệt điều kiển trình duyệt 
 //DOM - là đối tượng đại diện cho toàn bộ nộ dung HTML hiển thị 


 // Các phương thức để chọn / tìm kiếm phần tử trên trang

 // các phương thức cũ 
 document.getElementById();
 document.getElementsByTagName();
 // các phương thức mới hơn 
 // chọn theo bộ chọn CSS
 document.querySelector();// chọn 1 cái đầu tiên khớp 
 document.querySelectorAll();// chọn tất cả
 // Ưu tiên :
 //1. thống nhât chung 1 API để tìm kiếm các phần tử
 //2 . có thể sử dụng trên bất kì node nào , chỉ tìm kiếm trong các node con
 div.querySelector();
  // tuy nhiên sẽ có hạn chế 
  // collection tĩnh


  // ennerHTML sẽ thay thế toàn bộ văn bản hiện tại
  // 