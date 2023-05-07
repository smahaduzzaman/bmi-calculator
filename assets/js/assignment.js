const calculateBMI = () => {
    const weightInput = document.getElementById("weightInput");
    const weight = weightInput.value;
    weightInput.value = '';
    const heightInput = document.getElementById("heightInput");
    const height = heightInput.value / 100;
    heightInput.value = '';
    const calculation = (weight / (height * height));
    const bmi = calculation.toFixed(1);
    document.getElementById("result").innerHTML = `Your BMI is: ${bmi}`;
}

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
