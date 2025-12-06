(function(){
  const container = document.getElementById('react-widget');
  if (!container) return; // nada a fazer se não houver o elemento

  function App(){
    // componente extremamente simples
    return React.createElement(
      'div',
      {
        style: {
          padding: '18px',
          backgroundColor: '#eaf7ea',
          border: '2px solid #2e7d32',
          borderRadius: '10px',
          maxWidth: '480px',
          margin: '18px auto',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif'
        }
      },
      React.createElement('h3', { style: { margin: '6px 0', color: '#2e7d32' } }, 'Componente React ativo! 🌿'),
      React.createElement('p', { style: { margin: '6px 0' } }, 'Este widget confirma que seu site está usando React.'),
      React.createElement(
        'button',
        {
          onClick: function() {
            // contador simples sem state - altera texto do botão como demonstração mínima
            this.innerText = 'Obrigado por clicar!';
          }
        },
        'Clique em mim'
      )
    );
  }

  // Renderiza o componente
  ReactDOM.createRoot(container).render(React.createElement(App));
})();
