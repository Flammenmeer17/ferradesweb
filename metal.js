//Script para a pergunta da página inicial, dependendo de onde o usuário clicar,
//Vai aparecer certo ou errado. Alguns elementos do código.
//Achei esse script em uma lista de exemplos de scripts na w3schools.com

document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', function() {
        const correct = "Woods of Ypres";
        const feedback = document.getElementById("feedback");
        if (this.textContent === correct) {
            feedback.textContent = "Correto!🤘";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Quase lá.";
            feedback.style.color = "red";
        }
    });
});
