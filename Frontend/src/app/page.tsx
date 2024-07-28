import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <Hero />
      <Feature />
      <CallToAction />
      <Footer />
    </main>
  );
}
