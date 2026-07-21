import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Gallery from "./components/Gallery";
import SurfaceEngineering from "./components/SurfaceEngineering";
import WhyPhilippines from "./components/WhyPhilippines";
import GlobalPresence from "./components/GlobalPresence";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "3,000+", label: "Units/Day Intake & Restoration" },
    { number: "50,000+", label: "Enclosures/Month Surface Engineering" },
    { number: "15+", label: "Years In-Country (PEZA)" },
  ];

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <Stats stats={stats} />
      <About />
      <Capabilities />
      <Gallery />
      <SurfaceEngineering />
      <WhyPhilippines />
      <GlobalPresence />
      <Contact />
      <Footer />
    </div>
  );
}
