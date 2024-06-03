import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './component/Header/header';
import Content from './component/Contents/content';
import Footer from './component/Contents/Footer/footer';
import LoginPage from './component/Contents/loginpage';
import Signup from 'component/Contents/signup';
import WargamePage from './component/Contents/Wargame/wargame';
import RankingPage from './component/Contents/Ranking/ranking';
import CommunityPage from './component/Contents/Community/community';
import ProblemDetail from './component/Contents/Wargame/problem_detail';
import CreateProblem from './component/Contents/Wargame/create_problem';

function App() {
  const [activeMainContent, setActiveMainContent] = useState('Main');
  const categories = ["home", "popular", "qna", "free", "career", "info", "study", "contest"];

  return (
    <Router>
      <div className="w-full mx-auto bg-white">
        <Header setActiveMainContent={setActiveMainContent} />
        <Routes>
          <Route path="/" element={<Content activeMainContent={activeMainContent} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wargame" element={<WargamePage />} />
          <Route path="/problems/:problemId" element={<ProblemDetail />} />
          <Route path="/createProblem" element={<CreateProblem />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/community/*" element={<CommunityPage />}>
            {categories.map((category, index) => (
              <Route key={index} path={category} element={<CommunityPage category={category} />} />
            ))}
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;