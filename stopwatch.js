window.onload = () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  // const showClock = $('.showClock');
  const oClock = $('.oClock');

  const btn_stop = $('.btn_stop');
  const btn_start = $('.btn_start');
  const btn_reset = $('.btn_reset');

  const phay = $$('.phay');

  const hour = $('.hour');
  const minute = $('.minute');
  const second = $('.second');
  const miSecond = $('.miSecond');

  function setTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var time = h + ':' + m + ':' + s;
    // console.log(time);
    oClock.innerHTML = time;
  }
  var intervalOk = setInterval(setTime, 1000);
  var hh = 0;
  var mh = 0;
  var sh = 0;
  var ssh = 0;
  function setStopWatch() {
    ssh += 1;
    if (ssh) {
      phay[2].style.display = 'none';
    }
    if (sh) {
      phay[1].style.display = 'none';
    }
    if (mh) {
      phay[0].style.display = 'none';
    }

    if (ssh < 10) {
      miSecond.innerHTML = ': 0' + ssh;
    } else {
      miSecond.innerHTML = ': ' + ssh;
    }
    if (ssh > 100) {
      ssh = 0;
      sh += 1;
      if (sh < 10) {
        second.innerHTML = ': 0' + sh;
      } else {
        second.innerHTML = ': ' + sh;
      }
    }
    if (sh > 60) {
      sh = 0;
      mh += 1;
      if (mh < 10) {
        minute.innerHTML = ': 0' + mh;
      } else {
        minute.innerHTML = ': ' + mh;
      }
    }
    if (mh > 60) {
      mh = 0;
      hh += 1;
      if (mh < 10) {
        hour.innerHTML = '0' + hh;
      } else {
        hour.innerHTML = hh;
      }
    }
  }
  var interval;
  // var interval = setInterval(setStopWatch, 1000);
  btn_start.onclick = function () {
    interval = setInterval(setStopWatch, 10);
  };
  btn_stop.onclick = function () {
    clearInterval(interval);
  };
  btn_reset.onclick = function () {
    sh = 0;
    mh = 0;
    hh = 0;
    ssh = 0;
    if (ssh == 0) {
      second.innerHTML = ': 0' + sh;
      minute.innerHTML = ': 0' + sh;
      hour.innerHTML = '0' + sh;
      miSecond.innerHTML = ': 0' + ssh;
      clearInterval(interval);
    }
  };
};
