import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from "./Components/Footer/index"
import Navrbar from './Components/Header/index';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Skills from './Pages/Skills';
import ContactUs from './Pages/ContactUs';
import Portfolio from './Pages/Portfolio';
function App() {
  return (
    <>
    <header>
      <Navrbar/>
    </header>
    <content>
  <Home/>
  <About/>
  <Services/>
  <Skills/>
  <Portfolio/>
  <ContactUs/>
    </content>
  <footer>
<Footer/>
  </footer>

    </>
  );
}

export default App;
