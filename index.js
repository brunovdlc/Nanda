document.getElementById("unlockButton").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    var errorMessage = document.getElementById("errorMessage");
    var password = passwordInput.value;
    
    // Verificar se a senha está correta
    if (password === "sua_senha_correta") {
        // Aqui você pode redirecionar para a página desejada ou mostrar o conteúdo oculto
        alert("Senha correta! Você desbloqueou a tela.");
        errorMessage.textContent = ""; // Limpar mensagem de erro se a senha estiver correta
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
});

document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("unlockButton").click();
    }
});