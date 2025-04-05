import './App.css'
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AboutMe />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
