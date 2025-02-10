import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import DomyNaKlic from "./pages/domy";
import TinyHouse from "./pages/tinyhouse";
import ZahradniDomky from "./pages/zahradni";
import OstatniSluzby from "./pages/ostatni";
import Kontakt from "./pages/kontakt";
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image1.jpg';
import image7 from './assets/image2.jpg';
import image8 from './assets/image3.jpg';
import image9 from './assets/image4.jpg';



const allImages = [
  image1, image2, image3, image4, image5,image6, image7, image8,image9
];

function App() {
  return  (
    <Router>
      {/* Hero section pro domovskou stránku */}
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="hero-section">
              <Navbar />
              <Hero />
            </div>
          } 
        />
      </Routes>

      {/* Ostatní sekce */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Carousel 
                title="Domy na klíč"
                description="Výhody dřevostaveb oproti zděným domům spočívají v rychlosti výstavby, jsou levnější, variabilní a snazší k přestavbě. Ekologické materiály zajišťují zdravé mikroklima."
                images={allImages.slice(0, 3)} 
                imagesPerCarousel={3} 
                link="/domy-na-klic"
              />
              <Carousel 
                title="Tiny house"
                description="Jsou to velmi malé domky k trvalému bydlení, které mohou být na podvozku s koly nebo stát na patkách. Díky malé obytné ploše jsou energeticky nenáročné, ale i tak vyhoví Vaším potřebám."
                images={allImages.slice(3, 6)} 
                imagesPerCarousel={3} 
                link="/tiny-house"
              />
              <Carousel 
                title="Zahradní domky"
                description="Zahradní domky mají široké využití: slouží jako úložiště nářadí, sklad, domácí dílna, přístřešek pro auto, kancelář, sprcha, sauna, sklad bazénu, dětský domek, nebo místo k posezení a odpočinku."
                images={allImages.slice(6, 9)} 
                imagesPerCarousel={3} 
                link="/zahradni-domky"
              />
              <Footer />
            </>
          } 
        />
        <Route path="/domy-na-klic" element={<DomyNaKlic />} />
        <Route path="/tiny-house" element={<TinyHouse />} />
        <Route path="/zahradni-domky" element={<ZahradniDomky />} />
        <Route path="/ostatni-sluzby" element={<OstatniSluzby />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;

