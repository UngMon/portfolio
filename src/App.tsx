import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import ProjectPage from "./pages/ProjectPage";
import "./App.scss";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Root />} />
        <Route path="/projects">
          <Route path=":name" element={<ProjectPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
