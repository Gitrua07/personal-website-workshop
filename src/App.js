import React from "react";
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Experience from "./components/Contacts"
import './App.css'; //Imports css file

//HashRouter provides you a separate link per page
const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contacts" element={<Experience />}/>
      </Routes>
    </Router>
  );
};

export default App;
