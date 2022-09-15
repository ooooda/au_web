function showHide(id) {
    const eye = document.getElementById(id);
    const article = document.getElementById(id+"-article");
    article.style.display = (article.style.display === "none") ? "block" : "none";
    eye.className = (article.style.display === "none") ? "fa-solid fa-eye-slash eye" : "fa-solid fa-eye eye";
}