import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="bg-white bg-opacity-100 w-full z-50 ">
        <nav id="Logo" className="mx-auto flex max-w-7xl items-center p-6 lg:px-8">
          <div className="logo-container">
            <img src={logo} alt="KDrop Hub" className="logo-img" />
            <span className="logo-text">KDrop<span>Hub</span></span>
          </div>

          <div className="others">
            <a href="#beneficios">Benefícios</a>
            <a href="#pilares">Recursos</a>
            <a href="#sobre">Sobre</a>
            <button className="btn-primary">
              Entrar na comunidade
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-black-400 ring-1 ring-white/10 hover:ring-white/20">
            <span className="tag">
              PLATAFORMA #1 PARA FÃS DE K-POP
            </span>
          </div>


          <h1>
            Nunca mais perca o <span>momento</span>
            que define seu <span>fandom</span>.
          </h1>

          <p>
            Do primeiro teaser ao photocard nas suas mãos — KDrop Hub é onde fãs vivem cada comeback como se estivessem na primeira fila.
          </p>

          <div className="buttons">
            <button className="btn-primary">
              Começar agora
            </button>

            <a href="https://kdrop-hub-connect.lovable.app" target="_blank">
              <button className="btn-secondary">
                Ver demonstração
              </button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src="https://m.media-amazon.com/images/M/MV5BYzU5NjA3Y2YtY2UwZi00ZDMwLWE5NjAtOTljNTA4NTI4ZjYyXkEyXkFqcGc@._V1_.jpg"
            alt="Kpop"
          />
        </div>
      </section>

      {/* Benefícios */}

      
      <section id="beneficios" className="section">
        <h2>Por que usar o KDrop Hub?</h2>

        <div className="cards">
          <div className="card">
            <h3>Calendário Inteligente</h3>
            <p>
              Acompanhe comebacks, aniversários e pré-vendas
              automaticamente.
            </p>
          </div>

          <div className="card">
            <h3>Marketplace Verificado</h3>
            <p>
              Compre produtos oficiais com avaliações e lojas
              verificadas.
            </p>
          </div>

          <div className="card">
            <h3>Group Orders</h3>
            <p>
              Divida fretes internacionais com outros fãs e
              economize.
            </p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="pilares" className="section">
        <h2>Os 6 pilares da plataforma</h2>

        <div className="cards">
          <div className="card">📅 Calendário Inteligente</div>
          <div className="card">🛍 Marketplace Verificado</div>
          <div className="card">👥 Group Orders</div>
          <div className="card">🔔 Alertas Inteligentes</div>
          <div className="card">📦 Rastreamento</div>
          <div className="card">⭐ Favoritos</div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section">
        <h2>Sobre o projeto</h2>

        <p className="about">
          O KDrop Hub foi idealizado para reunir em um único
          ecossistema tudo que um fã de K-pop precisa: eventos,
          produtos, compras coletivas, notificações e rastreamento.
          Desenvolvido com React, TypeScript, Tailwind CSS e backend
          em tempo real.
        </p>
      </section>

      <footer>
        © 2026 KDrop Hub - Protótipo Acadêmico
      </footer>
    </div>
  );
}

export default App;