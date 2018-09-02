function startTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let year = today.getYear();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
  let t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime();
