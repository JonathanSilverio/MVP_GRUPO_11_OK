(function () {
  const container = document.getElementById("react-widget");
  if (!container) return; // não faz nada se o elemento não existe

  function App() {
    // Renderiza apenas um texto invisível (React ativo)
    return React.createElement("span", {
      style: { display: "none" } // não aparece na tela
    });
  }

  ReactDOM.createRoot(container).render(React.createElement(App));
})();
