// Hook do React
import { useState } from "react";
// Imagens
import Calendario from "../assets/Calendario.jpg"
import GroupOrder from "../assets/GroupOrder.jpg"
import Marketplace from "../assets/Marketplace.jpg"

function Benefits() {
  
// Dados dos cards
  const slides = [

    {
      imagem: Calendario,
      titulo: "Calendário Inteligente",
      texto:
        "Acompanhe comebacks, aniversários e pré-vendas automaticamente."
    },
    {
      imagem: Marketplace,
      titulo: "Marketplace Verificado",
      texto:
        "Compre produtos oficiais com avaliações e lojas verificadas."
    },
    {
      imagem: GroupOrder,
      titulo: "Group Orders",
      texto:
        "Divida fretes internacionais com outros fãs e economize."
    }
  ];
  
  // Estado atual
  const [slideAtual, setSlideAtual] = useState(0);

  const proximoSlide = () => {
    setSlideAtual((prev) => (prev + 1) % slides.length);
  };

  const slideAnterior = () => {
    setSlideAtual((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="content-carousel">
      <section id="beneficios" className="section">
        <h2>Por que usar o KDrop Hub?</h2>
      </section>
      
      {/* Carrossel */}
      <div className="carousel-container">
        <button className="btn" onClick={slideAnterior}>
          ❮
        </button>
    
        {/* Conteúdo */}
        <div className="card-benefits">
          <div className="imagem-container ">
            <img
              src={slides[slideAtual].imagem}
              alt={slides[slideAtual].titulo}
            />
          </div>

          <div className="texto-container">
            <h2>{slides[slideAtual].titulo}</h2>
            <p>{slides[slideAtual].texto}</p>
          </div>
        </div>

        <button className="btn" onClick={proximoSlide}>
          ❯
        </button>
      </div>
    </div>

  );
}

export default Benefits;
