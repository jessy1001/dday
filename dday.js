/* D-day구하기 */
var today = new Date();
var startDate = new Date(2021, 7, 21);
var text = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.querySelector(".text").innerHTML = text + "일";

/* 100일,200일,300일 구하기*/
function calc(el) {
  startDate.setDate(startDate.getDate() + el);
  //startDate를 찍어야 날짜가 나온다. 변수에 담으면 밀리초로 나오는듯
  var a = startDate.getFullYear();
  var b = startDate.getMonth() + 1;
  var c = startDate.getDate();

  document.querySelector(".day" + el).innerHTML = `${a}년 ${b}월 ${c}일`;
}
calc(100);
calc(200);
calc(300);

/* 시계 만들기 */
function clock() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let over12 = 12;
  let pm = false;

  if (hour > 12) {
    over12 = hour - 12;
    pm = "오후";
  } else {
    over12 = hour;
    pm = "오전";
  }
  over12 < 9 ? (over12 = `0${over12}`) : (over12 = `${over12}`);
  minute < 9 ? (minute = `0${minute}`) : (minute = `${minute}`);
  second < 9 ? (second = `0${second}`) : (second = `${second}`);

  console.log(over12);

  if (pm == "오후") {
    document.querySelector(
      ".clock"
    ).innerHTML = `PM ${over12} : ${minute} : ${second}`;
  } else {
    document.querySelector(
      ".clock"
    ).innerHTML = `AM ${over12} : ${minute} : ${second}`;
  }
}

setInterval(clock, 1000);
