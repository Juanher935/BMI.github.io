document.addEventListener("DOMContentLoaded", function() {
    // Get the elements from the HTML file
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('Weight');
    var computeBtn = document.getElementById('btn');
    var bmiResult = document.getElementById('bmi-result');
    var weightCondition = document.getElementById('weight-condition');

    // Add event listener to the compute button
    computeBtn.addEventListener('click', calculateBMI);

    // Function to calculate BMI
    function calculateBMI() {
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
    
    // Check if the inputs are valid numbers
    if (isNaN(height) || isNaN(weight)) {
        bmiResult.value = 'Invalid input';
        weightCondition.textContent = '';
        return;
    }
    
    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));
    
    // Display the BMI result
    bmiResult.value = bmi.toFixed(2);
    
    // Determine weight condition based on BMI
    if (bmi < 18.5) {
        weightCondition.textContent = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        weightCondition.textContent = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        weightCondition.textContent = 'Overweight';
    } else {
        weightCondition.textContent = 'Obese';
    }
    }
});