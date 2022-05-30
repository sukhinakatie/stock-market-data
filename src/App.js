import { BrowserRouter } from 'react-router-dom';
import PageNavigation from './PageNavigation';
import Navbar from "./Components/Navbar";
import React from "react";

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <PageNavigation/>
    </BrowserRouter>
  );
}

export default App;
