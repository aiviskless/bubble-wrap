
const popSound = () => {
  const audio = document.getElementById("audio");
  audio.play();
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

  bubble.onclick = "";
  bubble.src = "./images/explodedBubble.jpg"
  popSound();
}

window.onload = () => {
  const bubbleCount = 1000;
  const bubble =
    `<img
      src="./images/bubble.jpg"
      class="bubbleImage"
      alt="click me"
      onclick="handleClickOnBubble(event)"
    >`;
  const container = document.getElementById("container");

  drawElement(container, renderElements(bubble, bubbleCount));
}