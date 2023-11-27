import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import About from "./components/about/About";
import Cards from "./components/card/Cards";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section className="cardSection">
        <Cards />
      </section>
      <section className="contactUs">
        <ContactUs />
      </section>
      <section>
        <Footer/> 
      </section>
    </div>
  );
};

export default App;
