function saveNameToLocalStorage() {
    localStorage.lastEnteredName = document.getElementById("nameField").value;
    document.getElementById("lastEnteredName").innerHTML = localStorage.lastEnteredName;
    document.getElementById("lastEnteredNamePopup").innerHTML = localStorage.lastEnteredName + " has been saved to local storage";
}

$(document).on("pagecreate", "#StartPage", function LoadLocalStorage() {
    document.getElementById("lastEnteredName").innerHTML = localStorage.lastEnteredName;
})

$("#firstA").on("swipeleft", function () {
    $(window.location.href = "#pageTwo");
});


$("#secondA").on("swiperight", function () {
    $(window.location.href = "#StartPage");
});