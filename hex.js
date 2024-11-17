const colors = [
    "red", "blue", "green", "yellow", "pink", 
    "purple", "orange", "brown", "grey", "cyan", 
    "indigo", "violet"
];

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

function changeSolidColor() {
    const randomIndex = getRandomNumber(colors.length);
    const newColor = colors[randomIndex];
    const hexColor = rgbToHex(
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256)
    );
    const solidCard = document.getElementById("solidCard");
    solidCard.style.backgroundColor = hexColor;
    document.getElementById("solidColorDisplay").textContent = hexColor;
}

function generateGradient() {
    const randomIndex = getRandomNumber(colors.length);
    const color1 = colors[randomIndex];
    const color2 = colors[getRandomNumber(colors.length)];
    const hexColor1 = rgbToHex(
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256)
    );
    const hexColor2 = rgbToHex(
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256), 
        Math.floor(Math.random() * 256)
    );
    const gradientCard = document.getElementById("gradientCard");
    gradientCard.style.background = `linear-gradient(to right, ${hexColor1}, ${hexColor2})`;
    document.getElementById("gradientColorDisplay").textContent = `Gradient: ${hexColor1} → ${hexColor2}`;
}

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

document.getElementById("solidFlipButton").addEventListener("click", changeSolidColor);
document.getElementById("gradientFlipButton").addEventListener("click", generateGradient);

document.getElementById("copySolidButton").addEventListener("click", function() {
    const colorText = document.getElementById("solidColorDisplay").textContent;
    navigator.clipboard.writeText(colorText).then(function() {
        alert("Color copied to clipboard: " + colorText);
    }, function(err) {
        console.error("Failed to copy: ", err);
    });
});

document.getElementById("copyGradientButton").addEventListener("click", function() {
    const gradientText = document.getElementById("gradientColorDisplay").textContent;
    navigator.clipboard.writeText(gradientText).then(function() {
        alert("Gradient copied to clipboard: " + gradientText);
    }, function(err) {
        console.error("Failed to copy: ", err);
    });
});