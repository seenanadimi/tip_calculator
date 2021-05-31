const input = document.querySelector("input");
const calcBtn15 = document.querySelector("#calcBtn15");
const calcBtn20 = document.querySelector("#calcBtn20");
const calcBtn25 = document.querySelector("#calcBtn25");
const alert = document.querySelector("#alert");
const tip = document.querySelector("#tip");

console.log(input);
console.log(calcBtn15);
console.log(calcBtn20);
console.log(calcBtn25);

calcBtn15.addEventListener("click", calcOnClick);
calcBtn20.addEventListener("click", calcOnClick);
calcBtn25.addEventListener("click", calcOnClick);

function calcOnClick(event) {
  if (isNaN(input.value)) {
    alert.hidden = false;
  } else if (input.value === "") {
    alert.hidden = false;
  } else {
    if (event.target.id === "calcBtn15")
      tip.innerText = (input.value * 0.15).toFixed(2);
    else if (event.target.id === "calcBtn20")
      tip.innerText = (input.value * 0.2).toFixed(2);
    else if (event.target.id === "calcBtn25")
      tip.innerText = (input.value * 0.25).toFixed(2);

    alert.hidden = true;
  }
}
