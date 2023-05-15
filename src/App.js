import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path='/' exact element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
