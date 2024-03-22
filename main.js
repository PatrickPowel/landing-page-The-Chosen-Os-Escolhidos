// Adicione um evento de clique para cada botão do acordeão
var accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Alternar classe 'active' no botão clicado
        this.classList.toggle('active');
        
        // Selecionar o conteúdo do acordeão associado ao botão clicado
        var content = this.nextElementSibling;
        
        // Alternar a visibilidade do conteúdo
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
