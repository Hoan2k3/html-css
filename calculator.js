var temp = "0"; // Giá trị hiện tại trên màn hình
var pt = 0; // Phép tính được chọn (1: cộng, 2: trừ, 3: nhân, 4: chia)
var st1 = 0; // Giá trị lưu trữ khi chọn phép tính
var prevResult = 0; // Kết quả trước đó

// Hàm được gọi khi nhấn nút số
function press(value) {
  // Kiểm tra nếu giá trị hiện tại là 0 và người dùng không nhấn dấu chấm, thì ghi đè lên giá trị hiện tại
  if (temp === "0" && value !== ".") {
    $("#kq")[0].innerHTML = value;
    temp = value;
  } else {
    $("#kq")[0].innerHTML += value; // Ghi đè giá trị vào màn hình
    temp += value; // Cập nhật giá trị hiện tại
  }
}

// Hàm được gọi khi nhấn nút "AC" (Clear)
function clearData() {
  $("#kq")[0].innerHTML = "0"; // Thiết lập màn hình về 0
  temp = "0"; // Đặt lại giá trị hiện tại
  pt = 0; // Đặt lại phép tính
  st1 = 0; // Đặt lại giá trị lưu trữ
  prevResult = 0; // Đặt lại kết quả trước đó
}

// Hàm được gọi khi chọn phép tính
function dau(inputPt) {
  if (pt !== 0) {
    bang(); // Nếu đã có phép tính trước đó, thực hiện phép tính trước khi chọn phép tính mới
    st1 = prevResult; // Cập nhật giá trị lưu trữ với kết quả trước đó
  } else {
    st1 = parseFloat(temp); // Lưu giá trị hiện tại vào st1
  }
  pt = inputPt; // Lưu phép tính được chọn
  $("#kq")[0].innerHTML = "0"; // Thiết lập màn hình về 0 để nhập số mới
  temp = "0"; // Đặt lại giá trị hiện tại để nhập số mới
}

// Hàm được gọi khi nhấn nút "=" (Bang)
function bang() {
  var kq = 0; // Biến lưu trữ kết quả
  var currentTemp = parseFloat(temp); // Chuyển giá trị hiện tại thành số thực
  if (pt == 1) {
    kq = st1 + currentTemp; // Thực hiện phép tính cộng
  } else if (pt == 2) {
    kq = st1 - currentTemp; // Thực hiện phép tính trừ
  } else if (pt == 3) {
    kq = st1 * currentTemp; // Thực hiện phép tính nhân
  } else if (pt == 4) {
    kq = st1 / currentTemp; // Thực hiện phép tính chia
  }
  console.log(st1, pt, currentTemp); // Hiển thị dữ liệu debug trong console
  $("#kq")[0].innerHTML = kq; // Hiển thị kết quả lên màn hình
  prevResult = kq; // Lưu kết quả vào biến prevResult
  pt = 0; // Đặt lại phép tính
  temp = "0"; // Đặt lại giá trị hiện tại
}
