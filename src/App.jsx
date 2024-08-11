import Achievements from "./pages/Achievements";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Gastronomy from "./pages/Gastronomy";
import Hero from "./pages/Hero";
import Location from "./pages/Location";
import Navbar from "./pages/Navbar";
import Rooms from "./pages/Rooms";
import Wellness from "./pages/Wellness";

function App() {
  return (
    <div className="font-mont">
      <Navbar />
      <Hero />
      <Rooms />
      <Achievements />
      <Gastronomy />
      <Wellness />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
