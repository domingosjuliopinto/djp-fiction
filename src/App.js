// Import Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>  
            <Route path="/djp-fiction" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
