const sun = document.getElementById('sun');

sun.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  sun.style.transform = `rotateY(${x * 20}deg) rotateX(${y * 20}deg)`;
});