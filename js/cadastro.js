document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('cadastroForm');
  
  if (form) {
    const SUPABASE_URL = 'https://hxbjzzcqrzqtwfbevbgq.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_KzosMDDebQMNjV3stt7hwg_2KrFxrTW';
    
    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Pega os valores dos inputs (login, email e senha)
      const nomeDigitado = document.getElementById('nomeInput').value;
      const emailDigitado = document.getElementById('emailInput').value;
      const senhaDigitada = document.getElementById('senhaInput').value;

      try {
        // Insere os dados na tabela 'usuarios'
        const { data, error } = await _supabase
          .from('usuarios')
          .insert([
            { 
              nome: nomeDigitado, 
              email: emailDigitado, 
              senha: senhaDigitada 
            }
          ]);

        if (error) {
          alert('Erro ao cadastrar: ' + error.message);
          return;
        }

        alert('Usuário cadastrado com sucesso! Agora você pode fazer o login.');
        window.location.href = 'login.html'; // Redireciona para a tela de login

      } catch (err) {
        console.error('Erro na requisição:', err);
        alert('Ocorreu um erro inesperado ao cadastrar.');
      }
    });
  }
});
