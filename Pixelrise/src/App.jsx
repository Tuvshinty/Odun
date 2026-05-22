import React from 'react';
import Navbar from './component/Navbar';
import ShowCase from './component/ShowCase';

function App() {
  return (
    // This wrapper forces everything to stay locked within the screen boundary
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Navbar />
      <ShowCase />
    </div>
  );
}

export default App;