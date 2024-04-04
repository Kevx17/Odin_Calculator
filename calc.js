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


  let w = 80; 
  let h = 50;
  const container = document.querySelector("#calcUi");


  for (let i = 0; i < 20; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = w + "px";
    div.style.height = h + "px";
    container.appendChild(div); 
}




  let opStr = prompt("Enter an operation (max 1 operator): ");
  let arr = opStr.trim().split(/\s+/);
  
  
  let num1 = parseFloat(arr[0]);
  let opp = arr[1];
  let num2 = parseFloat(arr[2]);
  let n;
  
  switch (opp) {
    case '+':
      num1 = Calculator.Add(num1, num2);
      console.log(num1);
      break;
    case '-':
      num1 = Calculator.Sub(num1, num2);
      console.log(num1);
      break;
    case '*':
      num1 = Calculator.Mul(num1, num2);
      console.log(num1);
      break;
    case '/':
      num1 = Calculator.Div(num1, num2);
      console.log(num1);
      break;
    default:
      console.log("Invalid operation");
  }