{/* Imagens */}
import BTS from "../assets/BTS.jpg"
import BLACKPINK from "../assets/BLACKPINK.jpg"
import NEWJEANS from "../assets/NEWJEANS.jpg"
import EXO from "../assets/EXO.png"
import TWICE from "../assets/TWICE.jpg"
import STRAYKIDS from "../assets/STRAYKIDS.jpg"

function Features() {
  return (
    <section id="pilares" className="section">
      <h2>
        Os <span>ícones</span> que <span>movem</span> o mundo.
      </h2>
      {/* Cards estáticos */}
      <div className="cards">

         {/* Card 1 */}
        <div className="card">
          <img src={BTS} alt="BTS" className="card-img" />

          <div className="overlay"></div>

          <div className="card-number">
            <span>● Nº 01</span>
          </div>

          <div className="card-info">
            <p className="card-year">BANGTAN • 2013</p>

            <h3>BTS</h3>

            <p className="card-company">HYBE / BIG HIT</p>

            <div className="line"></div>
          </div>
        </div>

        {/*Card 2*/}
        <div className="card">
          <img src={BLACKPINK} alt="BLACKPINK" className="card-img" />

          <div className="overlay"></div>

          <div className="card-number">
            <span>● Nº 02</span>
          </div>

          <div className="card-info">
            <p className="card-year">IN YOUR AREA • 2016</p>

            <h3>BLACKPINK</h3>

            <p className="card-company">YG ENTERTAINMENT</p>

            <div className="line"></div>
          </div>
        </div>

        {/*Card 3*/}
        <div className="card">
          <img src={NEWJEANS} alt="NEWJEANS" className="card-img" />

          <div className="overlay"></div>

          <div className="card-number">
            <span>● Nº 03</span>
          </div>

          <div className="card-info">
            <p className="card-year">BUNNIES • 2022</p>

            <h3>NewJeans</h3>

            <p className="card-company">ADOR / HYBE</p>

            <div className="line"></div>
          </div>
        </div>

         {/*Card 4*/}
        <div className="card">
          <img src={EXO} alt="EXO" className="card-img" />

          <div className="overlay"></div>

          <div className="card-number">
            <span>● Nº 04</span>
          </div>

          <div className="card-info">
            <p className="card-year">WE ARE ONE • 2012</p>

            <h3>EXO</h3>

            <p className="card-company">SM ENTERTAINMENT</p>

            <div className="line"></div>
          </div>
        </div>

         {/*Card 5*/}
        <div className="card">
          <img src={TWICE} alt="TWICE" className="card-img" />

          <div className="overlay"></div>

          <div className="card-number">
            <span>● Nº 05</span>
          </div>

          <div className="card-info">
            <p className="card-year">ONCE • 2015</p>

            <h3>TWICE</h3>

            <p className="card-company">JYP ENTERTAINMENT</p>

            <div className="line"></div>
          </div>
        </div>

         {/*Card 6*/}
        <div className="card">
          <img src={STRAYKIDS} alt="STRAYKIDS" className="card-img" />

          <div className="overlay"></div>

          <div className="card-number">
            <span>● Nº 06</span>
          </div>

          <div className="card-info">
            <p className="card-year">STAY • 2018</p>

            <h3>Stray Kids</h3>

            <p className="card-company">JYP ENTERTAINMENT</p>

            <div className="line"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;
