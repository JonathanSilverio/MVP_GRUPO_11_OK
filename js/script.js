document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  
  if (form) {
    // 1. Conexão com o Supabase na Nuvem (substitua com suas chaves)
    const SUPABASE_URL = 'https://hxbjzzcqrzqtwfbevbgq.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_KzosMDDebQMNjV3stt7hwg_2KrFxrTW';
    
    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    form.addEventListener('submit', async function(e) {
      e.preventDefault(); // Impede o recarregamento padrão da página

      // Pega os valores digitados nos inputs do seu HTML
      const usuarioDigitado = document.getElementById('usuarioInput').value;
      const senhaDigitada = document.getElementById('senhaInput').value;

      try {
        // Consulta na tabela 'usuarios' lá no Supabase
        const { data, error } = await _supabase
          .from('usuarios')
          .select('*')
          .eq('nome', usuarioDigitado)
          .eq('senha', senhaDigitada);

        if (error) {
          alert('Erro ao conectar com o banco: ' + error.message);
          return;
        }

        // Se encontrou o usuário e a senha bateu no banco
        if (data && data.length > 0) {
          alert('Login realizado com sucesso! Bem-vindo, ' + data[0].nome);
          // Redireciona para o painel administrativo que você já usava
          window.location.href = 'admin.html';
        } else {
          alert('Usuário ou senha incorretos.');
        }

      } catch (err) {
        console.error('Erro na requisição:', err);
        alert('Ocorreu um erro ao tentar fazer o login.');
      }
    });
  }
});
