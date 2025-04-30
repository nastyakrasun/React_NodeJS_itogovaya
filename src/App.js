import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';  // импортируем провайдер
//import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stages from './pages/Stages';
import Projects from './pages/Projects';
import Cooperation from './pages/Cooperation';
import './styles/App.css';

const App = () => {
  return (
    <ProjectProvider> {/* Оборачиваем всё приложение */}
      <Router>
        {/* <Header /> */}
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cooperation" element={<Cooperation />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ProjectProvider>
  );
};

export default App;
