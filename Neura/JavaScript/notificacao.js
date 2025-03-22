document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".notification").addEventListener("click", function () {
        alert("Você tem novas notificações!");
    });

    document.querySelector(".pending").addEventListener("click", function () {
        alert("Você tem pendências para resolver!");
    });
});