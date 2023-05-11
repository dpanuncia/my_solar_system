function sun(){
    alert('This sun is a G sun due its white/yellow complication')
  }
  function mercury(){
    alert('This planet is Mercury! for more interesting facts double click the planet!')
  }

  function Venus(){
    alert('This planet is Venus! for more interesting facts double click the planet!')
  }

  function earth(){
    alert('This plant is our home, earth! for more interesting facts double click the planet!')
  }


  function mars(){
    alert('This plant is Mars! for more interesting facts double click the planet!')
  }

  function jupiter(){
    alert('This plant is Jupiter! for more interesting facts double click the planet!')
  }

  function saturn(){
    alert('This plant is Saturn! for more interesting facts double click the planet!')
  }

  function uranus(){
    alert('This plant is Uranus! for more interesting facts double click the planet!')
  }

  function neptune(){
    alert('This plant is Neptune! for more interesting facts double click the planet!')
  }

  const button = document.getElementById('hover-button');
const imageContainer = document.getElementById('image-container');

button.addEventListener('mouseover', function() {
imageContainer.style.display = 'block';
});

button.addEventListener('mouseout', function() {
imageContainer.style.display = 'none';
});

const button2 = document.querySelector('.space-button');
  button.addEventListener('click', function() {
  alert('Launching in 3... 2... 1...');
  window.location.href = "earth.html";
});
 
  function earth2(){
    window.location.href = "earth.html";
  }

  function mercury2(){
    window.location.href = "mercury.html";
  }

  function venus2(){
    window.location.href = "venus.html";
  }

  function mars2(){
    window.location.href = "mars.html";
  }

  function sun2(){
    window.location.href = "sun.html";
  }

  function jupiter2(){
    window.location.href = "jupiter.html";
  }

  function saturn2(){
    window.location.href = "saturn.html";
  }

  function uranus2(){
    window.location.href = "uranus.html";
  }

  function neptune2(){
    window.location.href = "neptune.html";
  }