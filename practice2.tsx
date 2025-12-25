"use client";
import { useState } from 'react';

export default function App() {

  const [isStarted, setIsStarted] = useState(false);

  const startClick = () => {
    setIsStarted(true);
  };

  if (isStarted) {
    return <MainGame />;
  }

  return (
    <div className='p-6 flex items-center justify-center h-screen gap-4'>
      <h1 className='text-4xl font-bold'>
        GAME
      </h1>
      <button 
        className='bg-black text-white px-4 py-2 rounded text-xl hover:bg-gray-800 font-bold' 
        onClick={startClick}
      >
        START
      </button>
    </div>
  );
}
function MainGame() {
  return (
    <div className='p-6 flex items-center justify-center h-screen'>
      <h1 className='text-6xl font-bold'>
        GAME START!
      </h1>
    </div>
  );
}
