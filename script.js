
/*
This assignment was completed by me. AI tools were used only for formatting
and syntax assistance. All logic and implementation decisions are my own.
*/




function tickUp() {
  let counter = document.getElementById("counter");
  counter.textContent = parseInt(counter.textContent) + 1;
}

function tickDown() {
  let counter = document.getElementById("counter");
  counter.textContent = parseInt(counter.textContent) - 1;
}

function runForLoop() {
  let counter = parseInt(document.getElementById("counter").textContent);
  let result = "";

  for (let i = 0; i <= counter; i++) {
    result += i + " ";
  }

  document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
  let counter = parseInt(document.getElementById("counter").textContent);
  let result = "";

  for (let i = 1; i <= counter; i += 2) {
    result += i + " ";
  }

  document.getElementById("oddNumberResult").textContent = result.trim();
}

function addMultiplesToArray() {
  let counter = parseInt(document.getElementById("counter").textContent);
  let arr = [];

  for (let i = counter; i >= 5; i--) {
    if (i % 5 === 0) arr.push(i);
  }

  console.log(arr);
}

function printCarObject() {
  let car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}

function loadCar(num) {
  let car;

  if (num === 1) car = carObject1;
  if (num === 2) car = carObject2;
  if (num === 3) car = carObject3;

  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

function changeColor(num) {
  let p = document.getElementById("styleParagraph");

  if (num === 1) p.style.color = "red";
  if (num === 2) p.style.color = "green";
  if (num === 3) p.style.color = "blue";
}
