function saveNameToLocalStorage() {
    localStorage.lastEnteredName = document.getElementById("nameField").value;
    document.getElementById("lastEnteredName").innerHTML = localStorage.lastEnteredName;
    document.getElementById("lastEnteredNamePopup").innerHTML = localStorage.lastEnteredName + " has been saved to local storage";
}

$(document).ready(function LoadLocalStorage() {
    document.getElementById("lastEnteredName").innerHTML = localStorage.lastEnteredName;
})