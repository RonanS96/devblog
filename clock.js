function startTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let year = today.getYear() + 1900; 
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById('date').innerHTML = "Ronan J. Smith • " + year;
  document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;

  let t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime();
