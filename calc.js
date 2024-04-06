let Calculator = {
  Add: function(a, b) {
    return (a + b);
  },
  Sub: function(a, b) {
    return (a - b);
  },
  Mul: function(a, b) {
    return (a * b);
  },
  Div: function(a, b) {
    return (a / b);
  }
};

//create Ui in the DOM

//i define the width and heigth based on the size of the container
let w = 80; 
let h = 50;
const container = document.querySelector("#calcUi");
// the content of the buttons based on the order they are created in the for loop
let displayArr = ['', '', 'clear', '<-', '1', '2', '3', ' + ', '4', '5', '6', ' - ', '7', '8', '9', ' * ', '0', '.', '=', ' / '];


for (let i = 0; i < 20; i++) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  div.classList.add("square");
  div.style.width = w + "px";
  div.style.height = h + "px";
  div.addEventListener("click", () => {
    let clicked = h2.textContent
    let display = document.querySelector("#opText");
    let opStr = display.textContent;
    let arr = opStr.trim().split(/\s+/);
    if (clicked == "clear") {
      document.querySelector("#opText").textContent = '';
    }
    else if (clicked == "<-") {
      let opText = document.querySelector("#opText");
      let currentValue = opText.textContent;
      if (currentValue[currentValue.length - 1] === " ") {
          // If the last character is a space, remove the last 3 characters
          opText.textContent = currentValue.slice(0, -3);
      } else {
          // Otherwise, remove only the last character
          opText.textContent = currentValue.slice(0, -1);
      }
  }
    else if (clicked == "=") {
      console.log('nigger');
       operate();
    }
    else {
      if (arr.length <= 3) {
        document.querySelector("#opText").textContent += clicked;
      }

    }
    
  });
  h2.textContent = displayArr[i];
  container.appendChild(div);
  div.appendChild(h2);
}


function operate() {

let display = document.querySelector("#opText");
let opStr = display.textContent;
let arr = opStr.trim().split(/\s+/);

let num1 = parseFloat(arr[0]);
let opp = arr[1];
let num2 = parseFloat(arr[2]);
let n;

switch (opp) {
  case '+':
    num1 = Calculator.Add(num1, num2);
    display.textContent = num1;
    break;
  case '-':
    num1 = Calculator.Sub(num1, num2);
    display.textContent = num1;
    break;
  case '*':
    num1 = Calculator.Mul(num1, num2);
    display.textContent = num1;
    break;
  case '/':
    num1 = Calculator.Div(num1, num2);
    display.textContent = num1;
    break;
  default:
    console.log("Invalid operation");
}
}