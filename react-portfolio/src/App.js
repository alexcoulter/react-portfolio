import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import PortfolioContainer from "./components/PortfolioContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className = "wrapper">
    <div id="page-content">
    <HashRouter>
     <Navbar />
    <Switch>
      <Route exact path="/about"  component={About} />
      <Route exact path="/projects" component={PortfolioContainer} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/" component={Header} />
      </Switch>
    </HashRouter>
    <div className = "push"></div>
    </div>
     <Footer />
     </div>
    
  );
}

export default App;
