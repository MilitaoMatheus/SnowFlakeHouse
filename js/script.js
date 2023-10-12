//alert('Seja bem vindo a nossa sorveteria!!!!!!')

// Função para mostrar o banner de cookies
function showCookieBanner() {
    var banner = document.getElementById("cookie-banner");
    banner.style.display = "block";
}

// Função para esconder o banner de cookies quando o botão "Aceitar" é clicado
function acceptCookies() {
    var banner = document.getElementById("cookie-banner");
    banner.style.display = "none";
    // Aqui você pode adicionar código para definir um cookie para rastrear o consentimento
}

// Mostrar o banner quando a página é carregada
window.addEventListener("load", showCookieBanner);

// Associar a função acceptCookies ao botão "Aceitar"
var acceptButton = document.getElementById("accept-cookies");
acceptButton.addEventListener("click", acceptCookies);
