import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Scenarios from './components/Scenarios/Scenarios';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Перейти к содержимому</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Scenarios />
        <HowItWorks />
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
