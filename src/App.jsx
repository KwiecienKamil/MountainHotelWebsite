import { useState } from "react";
import Achievements from "./pages/Achievements";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Gastronomy from "./pages/Gastronomy";
import Hero from "./pages/Hero";
import Location from "./pages/Location";
import Navbar from "./pages/Navbar";
import Rooms from "./pages/Rooms";
import Wellness from "./pages/Wellness";
import Reveal from "./components/ui/Reveal";

function App() {
  const [openNavigation, setOpenNavigation] = useState(false);

  const openResponsiveNav = () => {
    setOpenNavigation(!openNavigation);
  };
  return (
    <div className="font-mont">
      <Navbar
        openNavigation={openNavigation}
        openResponsiveNav={openResponsiveNav}
      />
      <Hero />
      <Reveal>
        <Rooms />
      </Reveal>
      <Reveal>
        <Achievements />
      </Reveal>
      <Reveal>
        <Gastronomy />
      </Reveal>
      <Wellness />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
