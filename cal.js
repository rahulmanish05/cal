let display = '';

function inputValue(value) {
  const displayElement = document.querySelector("input[type='text']");
  display += value;
  displayElement.value = display;
}

function calculate() {
  try {
    const displayElement = document.querySelector("input[type='text']");
    display = eval(display).toString();
    displayElement.value = display;
  } catch (error) {
    alert('Invalid expression!');
  }
}

function clearResult() {
  display = '';
  document.querySelector("input[type='text']").value = '';
}

function deleteLast() {
  const displayElement = document.querySelector("input[type='text']");
  display = display.slice(0, -1);
  displayElement.value = display;
}

// Change background color on button click
const body = document.querySelector('body');
const button = document.querySelectorAll('button');

// const color = [
//   'red', 'black', 'blue', 'pink', 'yellow', 'green', 'violet', 'whitesmoke'
// ];

button.forEach((btn) => {
  btn.addEventListener('click', () => {
    const colorIndex = Math.floor(Math.random() * color.length); // Randomly select a color
    body.style.backgroundColor = color[colorIndex];
  });
});
