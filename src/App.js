import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
