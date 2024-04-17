import React, { useState } from 'react';
import './App.css';

import Header from './component/Header/header.js';
import Content from './component/Contents/content.js';
import Footer from './component/Contents/Footer/footer.js';

function App() {
  const [activeMainContent, setActiveMainContent] = useState('Main');

  return (
    <div className="w-full container mx-auto bg-white">
      <Header setActiveMainContent={setActiveMainContent} />
      <Content activeMainContent={activeMainContent} />
      <Footer />
    </div>
  );
}

export default App;
