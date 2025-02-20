import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';



const App = () => {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);


  const handleButtonClick = (value) => {
    if (Number.isInteger(value)) {
      if (waitingForSecondValue) {
        setDisplay(String(value));
        setWaitingForSecondValue(false);
      } else {
        setDisplay(display === '0' ? String(value) : display + value);
      }
    } else if (value === 'C') {
      setDisplay('0');
      setOperator(null);
      setFirstValue(null);
      setWaitingForSecondValue(false);
    } else if (value === '=') {
      if (operator && firstValue !== null) {
        const result = calculate(firstValue, display, operator);
        setDisplay(result);
        setFirstValue(null);
        setOperator(null);
        setWaitingForSecondValue(false);
      }
    } else if (value === 'Reset') { // Added reset button functionality
      setDisplay('0');
      setOperator(null);
      setFirstValue(null);
      setWaitingForSecondValue(false);
    } else {
      if (!waitingForSecondValue) {
        setFirstValue(display);
        setWaitingForSecondValue(true);
      }
      setOperator(value);
    }
  };

  const calculate = (first, second, operator) => {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);
    if (operator === '+') return String(firstNum + secondNum);
    if (operator === '-') return String(firstNum - secondNum);
    if (operator === '*') return String(firstNum * secondNum);
    if (operator === '/') return String(firstNum / secondNum);
    return second;
  };

  const buttons = [
    7, 8, 9, '/',
    4, 5, 6, '*',
    1, 2, 3, '-',
    0, 'C', '=', '+',
    'Reset' // Added Reset button
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button key={index} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;