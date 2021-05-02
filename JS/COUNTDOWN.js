const getRemainTime = deadline => {'May 30 2021 00:00:01 GMT+0100', 'clock', 'Feliz 2020'};
let now = new Date (May 30 2021 00:00:01 GMT+0100', 'clock', 'Feliz 2020),
    getRemainTime = (new Date(deadline) - now + 1000) / 1000;
    remainSeconds = ('0' + Math.floor (getRemainTime % 60)).slice(-2);
    remainMinutes = ('0' + Math.floor (getRemainTime /60 % 60)).slice(-2);
    remainHours = ('0' + Math.floor (getRemainTime /3600 % 24)).slice(-2);
    remainDays = Math.floor (getRemainTime / (3600 * 24));
}

return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  };
}



countdown('May 30 2021 00:00:01 GMT+0100', 'clock', 'Feliz 2020');


const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval( () => {
    let t = getRemainTime(deadline);
    el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate)
      el.innerHTML = finalMessage
    }
  }, 1000)



countdown('May 30 2021 00:00:01 GMT+0100', 'clock', 'Feliz 2020');
}