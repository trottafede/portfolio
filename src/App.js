import "./App.css";
import { Routes, Route } from "react-router-dom";

import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contactMe/ContactMe";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListaProyectos from "./components/proyectos/ListaProyectos";
import ProyectInfo from "./components/proyectos/ProyectInfo";

function App() {
  const Home = (
    <>
      <ListaProyectos />
      <AboutMe />
      <ContactMe />
      <Education />
    </>
  );

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:slug" element={<ProyectInfo />} />
        <Route path="sobre-mi" element={<AboutMe />} />
        <Route path="contacto" element={<ContactMe />} />
        <Route path="educacion" element={<Education />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
