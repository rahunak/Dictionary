
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Header from "./components/header/header";

import DictionaryContainer from './pages/Dictionary/DictionaryContainer';

function App() {
  return (
    <div className="App">

      <Header />


      <main className='App__conttent'></main>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dictionary" element={<DictionaryContainer />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
