// Importa React
import React from "react";
// Responsável por renderizar componentes React no navegador
import ReactDOM from "react-dom/client";
// Importa o componente principal da aplicação
import App from "./App";

// Procura o elemento com id="root" no index.html 
// e monta toda aplicação dentro dele
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
