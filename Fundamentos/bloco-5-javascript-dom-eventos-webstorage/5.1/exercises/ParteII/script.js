let mainTitle = document.getElementById("header-container");
mainTitle.style.backgroundColor = "#2DB069";

let leftTasks = document.querySelectorAll(".emergency-tasks .emergency-tasks-title");
for (let index = 0; index < leftTasks.length; index += 1) {
    leftTasks[index].style.backgroundColor = "#A500F3";
}

let leftEmergencyTasks = document.querySelector(".emergency-tasks");
leftEmergencyTasks.style.backgroundColor = "#FB9F84";

let rightTasks = document.querySelectorAll(".no-emergency-tasks .no-emergency-tasks-title");
for (let index = 0; index < rightTasks.length; index += 1) {
    rightTasks[index].style.backgroundColor = "black";
}

let rightEmergencyTasks = document.querySelector(".no-emergency-tasks");
rightEmergencyTasks.style.backgroundColor = "#F9DB5D";