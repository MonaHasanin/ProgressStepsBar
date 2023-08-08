const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];
for (let i = 0; i < 6; i++) {
   colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)])
}
//console.log(`#${colorParts.join("")}`);
let finalColor = `#${colorParts.join("")}`;
document.body.append(finalColor);
document.body.style.backgroundColor = finalColor;
 


