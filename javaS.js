const button = document.getElementById('button');
const text = document.getElementById('text');
const container = document.getElementById('container');

let isInitialState = true;

const initialButtonText = button.textContent;
const initialTextContent = text.textContent;
const initialContainerColor = container.style.backgroundColor;

button.addEventListener('click', () => {
  if (isInitialState) {
    button.textContent = 'Click me';
    text.textContent = 'This is Rohith Reddy';
    text.style.color = "green";
    container.style.backgroundColor = 'skyblue';
  } else {
    button.textContent = initialButtonText;
    text.textContent = initialTextContent;
    container.style.backgroundColor = initialContainerColor;
  }
  isInitialState = !isInitialState;
});