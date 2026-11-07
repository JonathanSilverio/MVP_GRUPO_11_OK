document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('cadastroForm');
  
  if (form) {
    // Suas credenciais do Supabase
    const SUPABASE_URL = 'https://hxbjzzcqrzqtwfbevbgq.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_KzosMDDebQMNjV3stt7hwg_2KrFxrTW';
    
    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Pega os valores preenchidos nos inputs
      const nomeDigitado = document.getElementById('novoUsuario').value;
      const emailDigitado = document.getElementById('novoEmail').value;
      const senhaDigitada = document.getElementById('novaSenha').value;

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

        alert('Usuário cadastrado com sucesso!');
        form.reset(); // Limpa o formulário

      } catch (err) {
        console.error('Erro na requisição:', err);
        alert('Ocorreu um erro inesperado ao cadastrar.');
      }
    });
  }
});
