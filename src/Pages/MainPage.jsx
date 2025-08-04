import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import DarkVeil from '../Utils/DarkVeil';
import SplashCursor from '../Utils/SplashCursor'
export default function MainPage() {
  return (
    <div className='relative w-full min-h-screen text-white'>
      {/* <SplashCursor/> */}
      {/* DarkVeil as background for entire page */}
      <div className='fixed inset-0 z-0'>
        <DarkVeil />
      </div> 

      <header className='sticky top-0 left-0 right-0 md:mt-20 z-50 '>
        <Navbar />
      </header>

      {/* Main content with proper spacing */}
      <main className='relative z-10 '>
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
       <footer className='relative z-10 py-6 bg-gray-600 text-center text-gray-100 text-sm'>
        <p>© {new Date().getFullYear()} Harsh Pal Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}