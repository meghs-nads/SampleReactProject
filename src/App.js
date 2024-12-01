import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <ul>
        <li>apple jv</li>
        <li>ball jv</li>
        <li>cat jv</li>
        <li>cokie jv</li>
      </ul>
  
      {/* <Hero /> */}
      <ul>
        <li>Apple</li>
        <li>Ball</li>
        <li>Cat</li>
        <li>Dog</li>
      </ul>

      <p>para added by jv</p>
      

      <p>para added by jv</p>
      <p>para added by megh</p>
      <Footer />
    </div>
  );
};

export default App;
