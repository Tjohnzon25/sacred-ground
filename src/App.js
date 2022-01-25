import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Rates from "./components/Rates";
import Contact from "./components/Contact";
import About from "./components/About";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation></Navigation>

      <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/rates" element={<Rates/>}></Route>
                <Route exact path="/about-us" element={<About/>}></Route>
                <Route exact path="/contact-us" element={<Contact/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
