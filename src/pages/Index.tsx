import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import JoinUs from "@/components/JoinUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Partners />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
