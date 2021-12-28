var focus1 = document.getElementById('focus1');
var clickLamp = document.getElementById('clickLamp');
var light = document.getElementById('light');
var magician = document.getElementById('magician');
var hat = document.getElementById('hat');
var bird = document.getElementById('bird');
var rabbit = document.getElementById('rabbit');
var isVisibleLight = false;
var isRabbit = true;

focus1.onclick = function() {
   focus1.classList.add("up");
}

clickLamp.onclick = function() {
    if (isVisibleLight)
    {
      light.style.opacity= 0;
      magician.style.opacity= 0;
      hat.style.opacity= 0;
      bird.style.opacity= 0;
      rabbit.style.opacity= 0;
      isVisibleLight = false;
    }
    else
    {
      light.style.opacity = 0.5;
      magician.style.opacity= 0.5;
      hat.style.opacity= 0.5;
      if (isRabbit){
          rabbit.style.opacity= 0.3;
        }
        else {
          bird.style.opacity= 0.3;
        }

      isVisibleLight = true;
    }
}

rabbit.onclick = function() {
  rabbit.style.transitionDuration = "0.5s";
  rabbit.style.opacity= 0;
  rabbit.style.bottom = "-40vh";
  setTimeout(500);
  rabbit.style.transitionDuration = "0.2s";
  bird.style.transitionDuration = "0.5s";
  bird.style.opacity= 0.3;
  bird.style.bottom = "-30vh";
  setTimeout(500);
  bird.style.transitionDuration = "0.2s";
  isRabbit = false;
}

bird.onclick = function() {
  bird.style.transitionDuration = "0.5s";
  bird.style.opacity= 0;
  bird.style.bottom = "-40vh";
  setTimeout(500);
  bird.style.transitionDuration = "0.2s";
  bird.style.transitionDuration = "0.5s";
  rabbit.style.opacity= 0.3;
  rabbit.style.bottom = "-30vh";
  setTimeout(500);
  bird.style.transitionDuration = "0.2s";
  isRabbit = true;
}
