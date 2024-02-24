import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/HomePage.jsx';
import Upload from './pages/UploadPage.jsx';
import Navbar from './components/navbar/Navbar.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route
            exact path='/'
            element={<Home />}
          />
          <Route
            exact path='/upload'
            element={<Upload />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
