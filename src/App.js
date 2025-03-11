import logo from './logo.svg';
import './App.css';

import Section from "./Section.js";

import Exp from "./Exp.js";

import Nav from "./Nav.js";

import Experience from "./Experience/Experience.js";

import Landing from "./Landing/Landing.js";

import Contact from "./Contact/Contact.js";

import  {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Nav />

    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Experience" element={<Experience />} />
    </Routes>

      
    </div>
  );
}

export default App;
