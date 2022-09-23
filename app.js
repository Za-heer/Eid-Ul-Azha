let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let myfunc = setInterval(function () {
  let eidDay = new Date("06-28-2023");
  let today = new Date();
  let dday = eidDay.getTime() - today.getTime();

  let rday = Math.floor(dday / (1000 * 60 * 60 * 24));
  let rhour = Math.floor((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let rminute = Math.floor((dday % (1000 * 60 * 60)) / (1000 * 60));
  let rsecond = Math.floor((dday % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = rday + "<br> Days";
  document.getElementById("hours").innerHTML = rhour + "<br> Hours";
  document.getElementById("minute").innerHTML = rminute + "<br> Minutes";
  document.getElementById("second").innerHTML = rsecond + "<br> Second";
}, 1000);
myfunc();
