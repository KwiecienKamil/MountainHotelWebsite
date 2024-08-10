import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Gastronomy from "./pages/Gastronomy";
import Hero from "./pages/Hero";
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
    </div>
  );
}

export default App;
