const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    handleInput(e.target.innerHTML);
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (/[0-9]/.test(key)) {
    string += key;
  } else if (key === '.') {
    string += key;
  } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
    string += key;
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    string = string.slice(0, -1);
  } else if (key === 'Escape') {
    string = "";
  }

  input.value = string;
});

function handleInput(value) {
  if (value === '=') {
    calculate();
  } else if (value === 'AC') {
    string = "";
  } else if (value === '⌫') {
    string = string.slice(0, -1);
  } else {
    // Replace X and ÷ with * and /
    if (value === 'X') value = '*';
    if (value === '÷') value = '/';
    string += value;
  }

  input.value = string;
}

function calculate() {
  try {
    const result = eval(string);
    string = result.toString();
  } catch {
    string = "Error";
  }
  input.value = string;
}
