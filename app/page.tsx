import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Machinery from "@/components/Machinery";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Sustainability from "@/components/Sustainability";
import WashLibrary from "@/components/WashLibrary";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      {/* Zero-height anchor: Home and the logo scroll here, so the top bar shows too. */}
      <span id="top" />
      <Header />
      <main id="main">
        <Hero />
        <WhyUs />
        <About />
        <Services />
        <Process />
        <Machinery />
        <Sustainability />
        <WashLibrary />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
