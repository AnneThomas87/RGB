const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const colorValuesPreview = document.getElementById('colorValuesPreview');
const colorPreview = document.getElementById('colorPreview');

function updateBackgroundColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    colorPreview.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
    
    colorValuesPreview.textContent = `RGB ${redValue} ${greenValue} ${blueValue}`;
}

redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

updateBackgroundColor();






