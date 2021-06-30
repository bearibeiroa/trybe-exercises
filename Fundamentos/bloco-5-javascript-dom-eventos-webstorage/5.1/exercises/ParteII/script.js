let mainTitle = document.getElementById("header-container");
mainTitle.style.backgroundColor = "#2DB069";

let leftTasks = document.querySelectorAll(".emergency-tasks .emergengy-tasks-title");
for (let index = 0; index < leftTasks.length; index += 1) {
    leftTasks[index].style.backgroundColor = "#A500F3";
}
let leftEmergencyTasks = document.querySelectorAll(".emergency-tasks")[0];
leftEmergencyTasks.style.backgroundColor = "#FB9F84";

let rightTasks = document.querySelectorAll(".no-emergency-tasks .no-emergency-tasks-title");
for (let index = 0; index < rightTasks.length; index += 1) {
    rightTasks[index].style.backgroundColor = "black";
}

let rightEmergencyTasks = document.querySelectorAll(".no-emergency-tasks")[0];
rightEmergencyTasks.style.backgroundColor = "#F9DB5D";