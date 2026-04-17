import Hero from "./components/Hero";
import AboutArtist from "./components/AboutArtist";
import Offerings from "./components/Offerings";
import PortfolioPreview from "./components/PortfolioPreview";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <AboutArtist />
      <Offerings limit={3} />
      <PortfolioPreview preview={true} />
      <Testimonials preview={true} />
      <Packages preview={true} />
      <Contact preview={true} />
    </div>
  );
}
