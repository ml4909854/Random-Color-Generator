const container = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}


function randomColor() {
    const colorContainers = document.querySelectorAll(".color-container");

    colorContainers.forEach((colorContainer) => {
        const randomColorCode = generateColorCode();
        colorContainer.style.backgroundColor = `#${randomColorCode}`;
        colorContainer.textContent = `#${randomColorCode}`;
    });
}


function generateColorCode() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars[randomNum];
    }

    return color;
}

// Initialize the random colors
randomColor();
