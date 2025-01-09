const calculate = () => {
    let currentGrade = document.getElementById('currentGrade').value;
    let targetGrade = document.getElementById('targetGrade').value;
    let finalWeight = document.getElementById('finalWeight').value;
    if(currentGrade.trim() === ""){
        showPopup("Current grade can't be empty, try again!");
        return;
    }
    currentGrade = parseFloat(currentGrade);
    if(isNaN(currentGrade)){
        showPopup("Current grade is invalid, try again!");
        return;
    }
    if(targetGrade.trim() === ""){
        showPopup("Target grade can't be empty, try again!");
        return;
    }
    targetGrade = parseFloat(targetGrade);
    if(isNaN(targetGrade)){
        showPopup("Target grade is invalid, try again!");
        return;
    }
    if(finalWeight.trim() === ""){
        showPopup("Final weight can't be empty, try again!");
        return;
    }
    finalWeight = parseFloat(finalWeight);
    if(isNaN(finalWeight)){
        showPopup("Final weight is invalid, try again!");
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