const button1 = document.getElementById("clickmebtn");
const counter1 = document.getElementById("counter");
const parag = document.getElementById("paragraph");
const liliaL = document.getElementById("lilialight");
const liliaD = document.getElementById("liliadark");
const reset = document.querySelector("#resetbtn");
let count = parseInt(localStorage.getItem("count")) || 0;
counter1.textContent = count;

button1.onclick = function () {
  count++;
  counter1.textContent = count;
  localStorage.setItem("count", count);

  parag.classList.toggle("dark");
  document.body.classList.toggle("dark");

  button1.classList.toggle("dark");
  reset.classList.toggle("dark");
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

  reset.addEventListener("click", function () {
    count = 0;
    counter1.textContent = count;
    localStorage.setItem("count", count);
  });

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
