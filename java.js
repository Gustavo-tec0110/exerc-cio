const form = document.getElementById('formCadastro');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  alert('Cadastro realizado com sucesso!');
  form.reset();
});
