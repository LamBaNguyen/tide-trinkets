import Hero from './components/Hero';
import Intro from './components/Intro';
import ProductGallery from './components/ProductGallery';
import ShowcaseVideo from './components/ShowcaseVideo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Hero />
      <Intro />
      <ProductGallery />
      <ShowcaseVideo />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
