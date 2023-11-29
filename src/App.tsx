import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Introduce from "./components/Introduce/Introduce";
import About from "./components/about/About";
import ProjectPage from "./components/Projects/ProjectPage";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main-box">
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects">
            <Route path=":name" element={<ProjectPage />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
