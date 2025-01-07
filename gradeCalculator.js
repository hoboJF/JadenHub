const calculate = () => {
    let currentGrade = document.getElementById('currentGrade').value;
    let targetGrade = document.getElementById('targetGrade').value;
    let finalWeight = document.getElementById('finalWeight').value;
    currentGrade = parseFloat(currentGrade);
    targetGrade = parseFloat(targetGrade);
    finalWeight = parseFloat(finalWeight);
    if (isNaN(currentGrade) || isNaN(targetGrade) || isNaN(finalWeight)){
        showPopup("One or more inputs are invalid, please try again!");
        return;
    }
    if(finalWeight > 100){
        showPopup("Final weight can't be above 100%!");
        return;
    }
    finalGrade = (targetGrade - (currentGrade * (100 - finalWeight) / 100)) / (finalWeight / 100);
    showPopup(`You need a ${finalGrade.toFixed(2)}% on the final.`);
}
const showPopup = (message) => {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = message;
    popup.style.display = "flex";
}
const closePopup = () => {
    document.getElementById("popup").style.display = "none";
};