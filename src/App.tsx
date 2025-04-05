import './App.css'
import AppNavbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AppNavbar />
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
