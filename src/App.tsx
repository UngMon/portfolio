import { Route, Routes } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Root/>}/>
      </Routes>
    </div>
  );
}

export default App;
