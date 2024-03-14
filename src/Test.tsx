import React from 'react';
import TestReport from './TestReport';
import Navbar from './Nav';
const test = {
  testName: 'Blood Test',
  testDate: '2024-03-14',
  description: 'When using display: grid, you can make use of gap utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a display: grid container). Gap utilities are responsive by default, and are generated via our utilities API, based on the',
  doctor: 'Dr. Smith',
};

const Test: React.FC = () => {
  return (
    <div className="App">
        <Navbar/>
        <br />
      <TestReport test={test} />
    </div>
  );
};

export default Test;
