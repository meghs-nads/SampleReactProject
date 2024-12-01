import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <ul>
        <li>Apple</li>
        <li>Ball</li>
        <li>Cat</li>
        <li>Dog</li>
      </ul>
      <Footer />
    </div>
  );
};

export default App;
