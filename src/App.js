//import logo from './logo.svg';
import React from 'react';
// import Navbar from './components/Navbar';
//import Navbar from "./components/Navbar/index";
//import Sidebar from "./components/Sidebar/index";
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
    <Home/>
    </Router>

  );
}

export default App;
