// Import Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Home from "./components/home/Home";
import Component from "./components/Component";
import Extras from "./components/extras/Extras";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>  
            <Route path="/djp-fiction" element={<Home />} />
            <Route path="/extras" element={<Component body={<Extras/>}/>}/> 
            <Route path="/about" element={<Component body={<About/>}/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
