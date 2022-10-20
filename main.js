let toggle = true;
function power() {
  if (toggle == true) {
    document.getElementById("powers").innerHTML = "on";
    document.getElementById("powers").classList = "bg-secondary butt";
    document.getElementById("txt").value = "";
    document.getElementById("txt").style.display = "block";
    toggle = false;
  } else if (toggle == false) {
    document.getElementById("powers").innerHTML = "off";
    document.getElementById("powers").classList = "bg-danger butt";
    document.getElementById("txt").value = "";
    document.getElementById("txt").style.display = "none";
    toggle = true;
  }
}
function clc(number) {
  document.getElementById("txt").value += number;
}

function see() {
  const text = document.getElementById("txt");
  text.value = "";
}
function del() {
  const delet = document.getElementById("txt");
  let d = String(delet.value);
  delet.value = d.slice(0, -1);
  console.log(typeof d);
}
function solve() {
  let number = []

  if (document.getElementById("txt").value.includes("+")) {
    let emotions = document.getElementById("txt").value.split("+");
    for (let i = 0; i < emotions.length; i++) {
      const list = emotions[i];
      number.push(list)
    }
    document.getElementById("txt").value = number.reduce(getSum, 0);
    function getSum(total, num) {
      return total + Math.round(num);
    }
  }

  else if (document.getElementById("txt").value.includes("-")) {
    let emotions = document.getElementById("txt").value.split("-");
    for (let i = 0; i < emotions.length; i++) {
      const list = emotions[i];
      number.push(list)
    }
    document.getElementById("txt").value = number.reduce(myFunc);
    function myFunc(total, num) {
      return total - num;
    }
  }

  else if (document.getElementById("txt").value.includes("/")) {
    let emotions = document.getElementById("txt").value.split("/");
    document.getElementById("txt").value =
      Number(emotions[0]) / Number(emotions[1]);
  }

  else if (document.getElementById("txt").value.includes("*")) {
    let emotions = document.getElementById("txt").value.split("*");
    document.getElementById("txt").value =
      Number(emotions[0]) * Number(emotions[1]);
  }
}
function perc() {
  document.getElementById("txt").value /= 100;
}
function sqr() {
  let z = document.getElementById("txt").value;
  document.getElementById("txt").value *= z;
}
function rott() {
  // document.getElementById("txt").value *=
  let d = document.getElementById("txt").value;
  document.getElementById("txt").value = Math.sqrt(d);
}
