



//food donate page
// Quantity Slider Update
const quantityRange = document.getElementById("quantityRange");
const quantityValue = document.getElementById("quantityValue");

quantityRange.addEventListener("input", function () {
    quantityValue.textContent = quantityRange.value;
});

// Meal Preparation Time Slider Update
const prepTimeRange = document.getElementById("prepTimeRange");
const prepTimeValue = document.getElementById("prepTimeValue");

prepTimeRange.addEventListener("input", function () {
    prepTimeValue.textContent = prepTimeRange.value;
});



