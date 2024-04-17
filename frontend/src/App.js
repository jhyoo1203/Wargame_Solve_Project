import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './component/Header/header.js';
import Content from './component/Contents/content.js';
import Footer from './component/Contents/Footer/footer.js';
import LoginPage from './component/Contents/loginpage.js';

function App() {
  const [activeMainContent, setActiveMainContent] = useState('Main');

  return (
    <Router>
      <div className="w-full container mx-auto bg-white">
        <Header setActiveMainContent={setActiveMainContent} />
        <Routes>
          <Route path="/" element={<Content activeMainContent={activeMainContent} />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Content activeMainContent={activeMainContent} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;