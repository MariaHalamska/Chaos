const button1 = document.getElementById("clickmebtn");
const counter1 = document.getElementById("counter");
const parag = document.getElementById("paragraph");
const liliaL = document.getElementById("lilialight");
const liliaD = document.getElementById("liliadark");

let count = 0;

button1.onclick = function () {
  count++;
  counter1.textContent = count;

  parag.classList.toggle("dark");
  document.body.classList.toggle("dark");

  button1.classList.toggle("dark");
  this.innerHTML = "you clicked me";

  if (document.body.classList.contains("dark")) {
    this.innerHTML = "you clicked me";
    liliaL.classList.replace("visible", "hidden");

    liliaD.classList.replace("hidden", "visible");
  } else {
    this.innerHTML = "click me!";
    liliaD.classList.replace("visible", "hidden");
    liliaL.classList.replace("hidden", "visible");
  }

  switch (count) {
    case 3:
      break;
    case 4:
      break;
    case 15:
      window.alert("no way it's 15!");
      break;
    case 30:
      window.print();
      break;

    default:
      break;
  }
};
