document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright").textContent = "Copyright " + currentYear;
});