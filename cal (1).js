var st1 = 0;
var pt = 0; // 0: ko co phep tinh ; 1: + ; 2: - ;3: * ;4 :/
var temp = 0;

function clearData() {
  document.getElementById("result").innerHTML = 0;
  temp = 0;
  pt = 0;
  st1 = 0;
}

function press(value) {
  //document.getElementById("result").innerHTML += value; // Thêm giá trị của nút vào cuối giá trị hiện tại của phần tử có id là "expression"
  $("#result")[0].innerHTML += value;
  temp = parseInt($("#result")[0].innerHTML);
  console.log("st1", st1, "temp", temp);
  $("#result")[0].innerHTML = temp;
}

// function cong(){

//     document.getElementById("result").innerHTML=0;
//     st1=temp;
//     pt=1;
// }
// function tru(){

//     document.getElementById("result").innerHTML=0;
//     st1=temp;
//     pt=2;
// }
function pheptinh(value) {
  $("#result")[0].innerHTML = 0;
  st1 = temp;
  pt = value;
}

function bang() {
  var res = 0;
  if (pt == 1) res = st1 + temp;
  else if (pt == 2) res = st1 - temp;
  else if (pt == 3) res = st1 * temp;
  else res = st1 / temp;

  console.log(st1, pt, temp);
  $("#result")[0].innerHTML = res;
}
