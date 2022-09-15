// const showButtons = document.getElementsByClassName("show-info-button");
//
// showButtons.forEach(showButton => showButton.addEventListener("click", function (e) {
//    const eyeIcon = document.getElementById("eye").getElementsByClassName(showButton.id)[0]
//    this.classList.toggle("fa-eye-slash");
//    showButton.setAttribute("value", (showButton.value === "hide") ? "show" : "hide");
//    })
// );

function showHide(id) {
    const eye = document.getElementById(id);
    const article = document.getElementById(id+"-article");
    article.style.display = (article.style.display === "none") ? "block" : "none";
    eye.className = (article.style.display === "none") ? "fa-solid fa-eye-slash eye" : "fa-solid fa-eye eye";
}