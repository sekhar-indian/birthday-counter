const count = document.getElementById('count');
const head = document.getElementById('head');
const giftbox = document.getElementById('merrywrap');
const canvasC = document.getElementById('c');

function hideEverything() {
  head.style.display = 'none';
  count.style.display = 'none';
  giftbox.style.display = 'none';
  canvasC.style.display = 'none';
}

hideEverything();

const second = 1000,
  minute = second * 60;

// Set countdown target to 1 minute from now
let countDown = new Date().getTime() + minute;

let x = setInterval(function () {
  let now = new Date().getTime(),
    distance = countDown - now;

  // Update time units
  document.getElementById('day').innerText = 0; // No days for 1-minute countdown
  document.getElementById('hour').innerText = 0; // No hours
  document.getElementById('minute').innerText = Math.floor(distance / minute);
  document.getElementById('second').innerText = Math.floor(
    (distance % minute) / second
  );

  // Display elements while counting
  head.style.display = 'initial';
  count.style.display = 'initial';

  // When countdown ends
  if (distance <= 0) {
    clearInterval(x);
    head.style.display = 'none';
    count.style.display = 'none';
    giftbox.style.display = 'initial';

    // Show fireworks animation
    canvasC.style.display = 'initial';
    setTimeout(anim, 1500); // Trigger animation
  }
}, second);
