import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contactMe/ContactMe";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListaProyectos from "./components/proyectos/ListaProyectos";

function App() {
  return (
    <div>
      <Header />
      <ListaProyectos />
      <AboutMe />
      <ContactMe />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
