import "./App.css";
import logo from "./assets/logo.png";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Benefits/>
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;