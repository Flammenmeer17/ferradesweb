//Script para a pergunta da página inicial, dependendo de onde o usuário clicar,
//Vai aparecer certo ou errado. Alguns elementos do código.
//Achei esse script em uma lista de exemplos de scripts na w3schools.com

document.queryselectorall('.quiz-option').foreach(button => {
    button.addeventlistener('click', function() {
        const ncorrect = "Woods of Ypres";
        const feedback = document.getelementbyid("feedback");
        if (this.textContent === correct) {
            feedback.textContent = "Correto!🤘";
            feedback.style.color = "Green";
        } else {
            feedback.textContent = "Quase lá.";
            feedback.style.color = "red";
        }
    });
});