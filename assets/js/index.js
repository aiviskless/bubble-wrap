
const popSound = () => {
  const audio = document.getElementById("audio");
  audio.play();
}

const changeSoundImage = () => {
  const image = document.getElementById("sound-image");

  image.src = "./images/sound.png";

  setTimeout(() => {
    image.src = "./images/noSound.png";
  }, 500);
}

const drawElement = (domElement, elementToDraw) => {
  domElement.innerHTML = elementToDraw;
}

const renderElements = (elementToRender, count) => {
  let elements = ``;

  for (let i = 0; i < count; i++) {
    elements += elementToRender;
  }

  return elements;
}

const handleClickOnBubble = (event) => {
  const bubble = event.target;

  popSound();
  changeSoundImage();

  bubble.onclick = "";
  bubble.src = "./images/explodedBubble.jpg"
}

const setup = () => {
  const bubbleCount = 100;
  const bubble =
    `<img
      src="./images/bubble.jpg"
      class="bubbleImage"
      alt="click me"
      onclick="handleClickOnBubble(event)"
    >`;
  const bubbleContainer = document.getElementById("bubble-container");

  drawElement(bubbleContainer, renderElements(bubble, bubbleCount));
}

window.onload = setup;