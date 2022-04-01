function Num(val) {
  document.getElementById("result").value += val;
}
function equal() {
  let Input = document.getElementById("result").value;
  let Output = eval(Input);
  document.getElementById("result").value = Output;
}

function clr() {
  document.getElementById("result").value = "";
}
// dung thu vien vanilla tilt =>> tao hieu ung hover
const myCalculator = document.querySelector("myCal");
VanillaTilt.int(myCalculator, {
  max: 25,
  speed: 300,
  glare: true,
  "max-glare": 0.2,
});
