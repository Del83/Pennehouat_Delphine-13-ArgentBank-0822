import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
