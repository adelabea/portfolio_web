const getRemainTime = document.querySelector("clock")

const getRemainTime = deadline => {
  let now = new Date (),
  getRemainTime = (new Date(deadline) - now + 1000) / 1000;
  remainSeconds = ("0" + Math.floor (getRemainTime % 60)).slice(-2);
  remainMinutes = ("0" + Math.floor (getRemainTime /3600 % 24)).slice(-2);
  remainHours = ("0" + Math.floor (getRemainTime /3600 * 24));
}

return {
  remainTime,
  remainSeconds,
  remainMinutes,
  remainHours,
  remainDays
}

funtion countdown(deadline, elem, finalMessage) {
cont el = document.getElementById(elem);

const timerUpdate = setInterval(() => {
  let t = getRemainTime(deadline);
  el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s` ;

  if (t.remainTime <= 1) {
    clearInterval(timerUpdate);
    el.innerHTML = finalMessage;
  }
}, 1000);


countdown('May 30 2021 00:00:01 GMT+0100', 'clock', 'Here is my shop');

}