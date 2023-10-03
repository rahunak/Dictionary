
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Header from "./components/header/header";
import NotFound from './components/NotFound/NotFound';
import DictionaryContainer from './pages/Dictionary/DictionaryContainer';

function App() {
  return (
    <div className="App">

      <Header />
      <main className='main_content'>

      <Routes >

        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path="dictionary" element={<DictionaryContainer />} />
        <Route path="about" element={<About />} />

      </Routes >
      </main>
    </div>
  );
}

export default App;
