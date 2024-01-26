import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/Header/HeaderSection';
import FooterSection from './components/Footer/FooterSection';
import FilterInSite from './components/FilterInSite/FilterInSite';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <h2>ADVANCED LEVEL</h2>
      <FilterInSite />
      <FooterSection />
    </div>
  );
}

export default App;
