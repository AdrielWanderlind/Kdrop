import logo from "../assets/logo.png";

function Navbar() {
  return (
    // Cabeçalho fixo
    <header className="bg-white bg-opacity-100 w-full z-50">
      {/* Navegação principal */}
      <nav id= "header"className="mx-auto flex max-w-7xl items-center p-6 lg:px-8">
        {/* Área da logo */}
        <div className="logo-container">
          <img src={logo} alt="KDrop Hub" className="logo-img" />
          
          {/* Nome */}
          <span className="logo-text">
            KDrop<span>Hub</span>
          </span>
        </div>
        
        {/* Links */}
        <div className="others">
          <a href="#beneficios">Benefícios</a>
          <a href="#pilares">Ícones</a>
          <a href="#sobre">Sobre</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
