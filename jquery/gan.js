// cách gán sự kiện

const $btn = $("button");

const data = {

};

$btn.on("click", data, function (e) {
   console.log(e);
   console.log(e.data);
});

$btn.one("click",function (e){
    console.log("hendler này chỉ chạy 1 lần duy nhất");
});

// khác ở đây có data , chỉ sảy ra một lần dùng (on||one)