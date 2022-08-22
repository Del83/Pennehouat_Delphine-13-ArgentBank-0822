// PAGE COMPONENTS
import Header from "../components/Layout/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Layout/Footer";

/**Render the home page
 * @return {JSX}
 */
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
