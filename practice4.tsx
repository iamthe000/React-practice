"use client";
import { useState } from 'react';

export default function App() {
  // 3つの数字を管理する状態
  const [numbers, setNumbers] = useState([0, 0, 0]);

  // ルーレットを回す関数
  const start = () => {
    // 0~9のランダムな数字を3つ生成
    const newNumbers = numbers.map(() => Math.floor(Math.random() * 10));
    // 状態を更新（これで画面が再描画されます）
    setNumbers(newNumbers);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>ルーレット</h1><br />
      
      <div className='flex text-4xl font-bold space-x-4'>
        {/* Stateの値を画面に表示させる */}
        <div>{numbers[0]}</div>
        <div>{numbers[1]}</div>
        <div>{numbers[2]}</div>
      </div>
      
      <br />
      <button 
        onClick={start} 
        className="flex items-center justify-center w-40 p-2 bg-slate-800 text-white text-1xl font-bold rounded-xl shadow-xl hover:bg-slate-700 active:scale-95 transition-all"
      >
        START
      </button>
    </div>
  );
}
