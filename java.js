$(document).ready(function() {
    // Inicializar carousel
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });

    // Aplicar máscara no telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('#meu-form').on('submit', function(e) {
        e.preventDefault();

        const nome = $('#nome').val().trim();
        const telefone = $('#telefone').val().trim();

        if(!nome || !telefone) {
            alert('Preencha todos os campos!');
            return;
        }

        alert(`Formulário enviado!\nNome: ${nome}\nTelefone: ${telefone}`);
        $(this)[0].reset();
    });
});
