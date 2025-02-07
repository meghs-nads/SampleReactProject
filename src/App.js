import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  const items = [
    'apple jv', 'ball jv', 'cat jv', 'cookie jv',
    'Apple', 'Ball', 'Cat', 'Dog'
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>para added by jv</p>
      <p>para added by megh</p>
      <p>para 2 added by megh</p>
      
      <Footer />
    </>
  );
};

export default App;