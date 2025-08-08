import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import DarkVeil from '../Utils/DarkVeil';
import { useRef } from "react";
import { useTheme } from '../Context/ThemeProvider';
import Footer from '../Components/Footer';

export default function MainPage() {
  const contactRef = useRef(null);
  const { theme } = useTheme();

  const scrollToConnect = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`relative w-full h-screen`}>
      {/* Automatic theme-adjusted background */}
     <DarkVeil />

      {/* Sticky Navbar */}
      <header className='  fixed top-0 right-0 left-0 md:mt-20 z-50'>
        <Navbar />
      </header>

      {/* Main Sections */}
      <main className='relative z-10'>
        <section id="home">
          <Hero scrollToConnect={scrollToConnect} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact ref={contactRef} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}