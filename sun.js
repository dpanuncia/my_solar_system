const sun = document.getElementById('sun');

sun.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  sun.style.transform = `rotateY(${x * 20}deg) rotateX(${y * 20}deg)`;
});



const stars = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');
let i = 0;

while (i < 500) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 10;
  const size = Math.random() * 2;

  stars.innerHTML += `<div class="star" style="left:${x}px; top:${y}px; animation-duration:${duration}s; width:${size}px; height:${size}px;"></div>`;
  i++;
}

let j = 0;

while (j < 200) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 10;
  const size = Math.random() * 2;

  stars2.innerHTML += `<div class="star" style="left:${x}px; top:${y}px; animation-duration:${duration}s; width:${size}px; height:${size}px;"></div>`;
  j++;
}

let k = 0;

while (k < 100) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 10;
  const size = Math.random() * 2;

  stars3.innerHTML += `<div class="star" style="left:${x}px; top:${y}px; animation-duration:${duration}s; width:${size}px; height:${size}px;"></div>`;
  k++;
}
