// Import Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Component from "./components/Component";
import Home from "./components/home/Home";
import Books from "./components/books/Books";
import Characters from "./components/characters/Characters";
import Records from "./components/records/Records";
import Extras from "./components/extras/Extras";
import About from "./components/about/About";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>  
            <Route path="/djp-fiction" element={<Home />} />
            <Route path="/books" element={<Component body={<Books/>} index='2'/>}/> 
            <Route path="/characters" element={<Component body={<Characters/>} index='3'/>}/> 
            <Route path="/records" element={<Component body={<Records/>}/>} index='4'/> 
            <Route path="/extras" element={<Component body={<Extras/>}/>} index='5'/> 
            <Route path="/about" element={<Component body={<About/>}/>} index='6'/>
            <Route path="/admin" element={<Component body={<Admin/>}/>} index='7'/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
