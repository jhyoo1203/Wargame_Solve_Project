import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './component/Header/header';
import Content from './component/Contents/content';
import Footer from './component/Contents/Footer/footer';
import LoginPage from './component/Contents/loginpage';
import WargamePage from './component/Contents/Wargame/wargame';
import RankingPage from './component/Contents/Ranking/ranking';
import CommunityPage from './component/Contents/Community/community';

function App() {
  const [activeMainContent, setActiveMainContent] = useState('Main');

  return (
    <Router>
      <div className="w-full mx-auto bg-white">
        <Header setActiveMainContent={setActiveMainContent} />
        <Routes>
          <Route path="/" element={<Content activeMainContent={activeMainContent} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/wargame" element={<WargamePage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/community/*" element={<CommunityPage />}>
            <Route path="home" element={<CommunityPage category="home" />} />
            <Route path="popular" element={<CommunityPage category="popular" />} />
            <Route path="qna" element={<CommunityPage category="qna" />} />
            <Route path="free" element={<CommunityPage category="free" />} />
            <Route path="career" element={<CommunityPage category="career" />} />
            <Route path="info" element={<CommunityPage category="info" />} />
            <Route path="study" element={<CommunityPage category="study" />} />
            <Route path="contest" element={<CommunityPage category="contest" />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;