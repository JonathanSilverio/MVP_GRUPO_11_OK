document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // opcional: você pode checar valores aqui antes de redirecionar
      // const usuario = form.querySelector('input[type="text"]').value;
      // const senha = form.querySelector('input[type="password"]').value;
      window.location.href = 'admin.html';
    });
  }
});
