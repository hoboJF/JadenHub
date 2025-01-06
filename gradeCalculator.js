const calculate = () => {
    let currentGrade = document.getElementById('currentGrade').value;
    let targetGrade = document.getElementById('targetGrade').value;
    let finalWeight = document.getElementById('finalWeight').value;
    currentGrade = parseFloat(currentGrade);
    targetGrade = parseFloat(targetGrade);
    finalWeight = parseFloat(finalWeight);
    if (isNaN(currentGrade) || isNaN(targetGrade) || isNaN(finalWeight)){
        alert("One or more inputs are invalid, please retry!");
    }
}
