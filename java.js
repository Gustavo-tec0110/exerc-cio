$(document).ready(function() {
    // Adicionar tarefa
    $('#task-form').submit(function(e) {
        e.preventDefault();
        const task = $('#task-input').val().trim();
        if(task) {
            const newTask = $('<li></li>').text(task).hide();
            $('#task-list').append(newTask);
            newTask.fadeIn(); // animação de entrada
            $('#task-input').val('');
        }
    });

    // Marcar/desmarcar tarefa concluída
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('done');
        $(this).fadeOut(100).fadeIn(100); // animação visual ao riscar
    });
});
