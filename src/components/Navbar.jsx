import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="bg-white bg-opacity-100 w-full z-50">
      <nav id= "header"className="mx-auto flex max-w-7xl items-center p-6 lg:px-8">
        <div className="logo-container">
          <img src={logo} alt="KDrop Hub" className="logo-img" />

          <span className="logo-text">
            KDrop<span>Hub</span>
          </span>
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
  );
}

export default Navbar;