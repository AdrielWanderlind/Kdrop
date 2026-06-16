function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-black-400 ring-1 ring-white/10 hover:ring-white/20">
          <span className="tag">
            PLATAFORMA #1 PARA FÃS DE K-POP
          </span>
        </div>

        <h1>
          Nunca mais perca o <span>momento</span>
          que define seu <span>fandom</span>.
        </h1>

        <p>
          Do primeiro teaser ao photocard nas suas mãos —
          KDrop Hub é onde fãs vivem cada comeback como se
          estivessem na primeira fila.
        </p>

        <div className="buttons">
          <button className="btn-primary">
            Começar agora
          </button>

          <a
            href="https://kdrop-hub-connect.lovable.app"
            target="_blank"
            rel="noreferrer"
          >
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
  );
}

export default Hero;