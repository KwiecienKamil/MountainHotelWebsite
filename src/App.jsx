import Achievements from "./pages/Achievements";
import Gastronomy from "./pages/Gastronomy";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <div className="font-mont">
      <Navbar />
      <Hero />
      <Rooms />
      <Achievements />
      <Gastronomy />
    </div>
  );
}

export default App;
