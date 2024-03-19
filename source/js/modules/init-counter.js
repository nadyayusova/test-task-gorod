// Счетчик вниз
// По завершению таймера перезагружать страницу
// Элементу в разметке добавить атрибут data-count-start со значением вида "01:01:42"

let time = 0;

function getTimeString() {
  const date = new Date(time);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const timeParts = [];

  if (hours > 0) {
    timeParts.push(String(hours).padStart(2, '0'));
  }
  timeParts.push(String(minutes).padStart(2, '0'));
  timeParts.push(String(seconds).padStart(2, '0'));

  return timeParts.join(' : ');
}

function updateTimer(counter) {
  time -= 1000;

  if (time <= 0) {
    location.reload();
  }

  counter.textContent = getTimeString();
}

function initCounter() {
  const counter = document.querySelector('[data-count-start]');

  if (counter) {
    const timeStr = counter.dataset.countStart;

    if (timeStr) {
      const timeArray = timeStr.split(':').map((item) => {
        const itemStr = item.trim();

        if (isNaN(Number(itemStr))) {
          return 1;
        }

        return Number(itemStr);
      });

      if (timeArray.length) {
        timeArray.reverse();

        let secs = timeArray[0];
        for (let i = 1; i < timeArray.length; i++) {
          secs += timeArray[i] * Math.pow(60, i);
        }
        time = secs * 1000;

        counter.textContent = getTimeString();
        setInterval(() => updateTimer(counter), 1000);
      }
    }
  }
}

export {initCounter};
