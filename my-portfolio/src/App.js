import './App.css';
import About from './components/about/About';
import ContactInfo from './components/contactInfo/ContactInfo';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import AccordionMenu from './components/projecten/AccordionMenu';
import Reflectie from './components/reflectie/Reflectie';

function App() {
  return (
      <>
      <Navbar/>
      
      <main className="main">
        <Home/>
        <About/>
        <AccordionMenu/>
        <Reflectie/>
        <ContactInfo/>
        <Footer/>
      </main>
      </>
      
  );
}

export default App;
