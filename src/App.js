import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes.js'
import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/Navbar';
import styled from 'styled-components';

const Portfolio = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;
function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <Portfolio>
      <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/projects' exact element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </Portfolio >
  );
}

export default App;
