document.addEventListener("DOMContentLoaded", function() {
    let heightInput = document.querySelector("#height");
    let weightInput = document.querySelector("#weight");
    let calculateBtn = document.querySelector("#btn");
    let bmiResult = document.querySelector("#bmi");
    let comment = document.querySelector("#comment");

    calculateBtn.addEventListener("click", function() {
        let height = parseFloat(heightInput.value);
        let weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight.");
            return;
        }

        let bmi = weight / ((height / 100) * (height / 100));

        bmiResult.textContent = bmi.toFixed(2);
        comment.textContent = getBMICategory(bmi);
    });

    function getBMICategory(bmi) {
        if (bmi < 18.5) return "Underweight";
        else if (bmi < 24.9) return "Normal weight";
        else if (bmi < 29.9) return "Overweight";
        else return "Obese";
    }
});
