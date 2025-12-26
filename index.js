let startBtn = document.getElementById("startbtn");
let stopBtn = document.getElementById("stopbtn");
let message = document.getElementById("mess");
let count = 0;
let intervalId = null;

startBtn.addEventListener("click", () => {

  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    message.textContent = count;
    count++;
  }, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
});


stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;

});



let startbtn2 = document.getElementById("startbtn2");
let reset = document.getElementById("reset");
let mess2 = document.getElementById("mess2");

let count2 = 0;


startbtn2.addEventListener("click", () => {
  setTimeout(() => {
    count2++;
    mess2.textContent = count2;
  }, 300);

});
reset.addEventListener("click", () => {
  count2 = 0;
  mess2.textContent = count2;
});


