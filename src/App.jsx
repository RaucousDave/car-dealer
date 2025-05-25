import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/about/WhyChooseUs";
import Featured from "./components/Featured";
import Promise from "./components/about/Promise";
import Services from "./components/Services";
import CTA from "./components/CTA";
export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Featured />
        <Promise />
        <Services />
        <CTA />
      </div>
    </>
  );
}
