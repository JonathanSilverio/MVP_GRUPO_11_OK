(function () {
  const container = document.getElementById('react-widget');
  if (!container) return;

  function App() {
    // React totalmente ativo, mas sem exibir nada
    return null;
  }

  ReactDOM.createRoot(container).render(React.createElement(App));
})();
