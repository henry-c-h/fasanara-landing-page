import './config/general.css';
import './config/queries.css';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Strategy from './components/Strategy/Strategy';
import Feature from './components/Feature/Feature';
import Responsibility from './components/Responsibility/Responsibility';
import Latest from './components/Latest/Latest';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Strategy />
      <Feature />
      <Responsibility />
      <Latest />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
