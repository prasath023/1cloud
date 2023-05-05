import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Return from './components/Return';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return-policy" element={<Return />} />
          <Route path="/privacy-policy" element={<Privacy />} />
       
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
