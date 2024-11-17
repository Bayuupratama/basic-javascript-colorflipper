const colors = [
  { hex: "#FF5733", name: "Red Orange" },
  { hex: "#33FFCE", name: "Turquoise" },
  { hex: "#FFFF00", name: "Yellow" },
  { hex: "#000000", name: "Black" },
  { hex: "#FF0000", name: "Red" },
  { hex: "#00FF00", name: "Lime" },
  { hex: "#0000FF", name: "Blue" },
  { hex: "#FFA500", name: "Orange" },
  { hex: "#800080", name: "Purple" },
  { hex: "#808080", name: "Gray" },
  { hex: "#FFC0CB", name: "Pink" },
  { hex: "#FFFFFF", name: "White" },
];

const solidFlipButton = document.getElementById("solidFlipButton");
const solidCard = document.getElementById("solidCard");
const solidColorDisplay = document.getElementById("solidColorDisplay");

const gradientFlipButton = document.getElementById("gradientFlipButton");
const gradientCard = document.getElementById("gradientCard");
const gradientColorDisplay = document.getElementById("gradientColorDisplay");

solidFlipButton.addEventListener("click", function () {
  const randomIndex = getRandomIndex();
  const selectedColor = colors[randomIndex];

  solidCard.style.backgroundColor = selectedColor.hex;
  solidColorDisplay.textContent = selectedColor.name;
});

gradientFlipButton.addEventListener("click", function () {
  const randomIndex1 = getRandomIndex();
  const randomIndex2 = getRandomIndex();
  const color1 = colors[randomIndex1];
  const color2 = colors[randomIndex2];

  gradientCard.style.background = `linear-gradient(to right, ${color1.hex}, ${color2.hex})`;
  gradientColorDisplay.textContent = `${color1.name} → ${color2.name}`;
});

function getRandomIndex() {
  return Math.floor(Math.random() * colors.length);
}
