"use client";
import { useState } from 'react';

function App() {
  const text: string = 'Hello World!';
  
  //状態を定義 [現在の値, 更新するための関数]
  //[現在の値, 更新するための関数] = useState('') によって更新関数とすることができる
  const [msg, setMsg] = useState('');

  const handleClick = () => {
    //直接書き換えずに、更新関数を呼ぶ
    setMsg('Clicked');
  };

  return (
    <div className="App">
      <h1>{text}</h1>
      <button onClick={handleClick} className="bg-black text-white p-2 rounded">
        {/*bg:背景 text:文字色 p:padding(1あたり4px) rounded:角丸*/}
        Click Me
      </button>
      
      {/* 変数 msg の中身が表示される（自動で更新される) */}
      <div id="msg">{msg}</div>
    </div>
  );
}

export default App;
