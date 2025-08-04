import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import DarkVeil from '../Utils/DarkVeil';

export default function MainPage() {
  return (
    <div className='relative w-full min-h-screen text-white'>
      {/* DarkVeil as background for entire page */}
      <div className='fixed inset-0 z-0'>
        <DarkVeil />
      </div>

      {/* Navbar with semi-transparent background */}
      <header className='sticky top-0 left-0 right-0 md:mt-20 z-50 '>
        <Navbar />
      </header>

      {/* Main content with proper spacing */}
      <main className='relative z-10 pt-16'> {/* pt-16 compensates for fixed navbar */}
        <section id="home" className=''>
          <Hero />
        </section>

        <section id="about" className=''>
          <About />
        </section>

        <section id="projects" className=''>
          <Projects />
        </section>

        <section id="contact" className=''>
          <Contact />
        </section>
      </main>
    </div>
  );
}