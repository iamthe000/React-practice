"use client";
import { useState } from 'react';

function App() {
  const text: string = 'Hello World!';
  
  //状態を定義 [現在の値, 更新するための関数]
  //[現在の値, 更新するための関数] = useState('') によって更新関数とすることができる
  const [msg, setMsg] = useState('');

  const [bigMsg, setBM] = useState("test")

  const handleClick = () => {
    //直接書き換えずに、更新関数を呼ぶ
    setMsg('Clicked');
    setBM("BIG MESSAGE")
  };

  return (
    <div className="App p-4">
      <h1>{text}</h1>
      <button onClick={handleClick} className="bg-black text-white p-2 rounded">
        {/*bg:背景 text:文字色 p:padding(1あたり4px) rounded:角丸*/}
        Click Me
      </button>
      {/* 変数 msg の中身が表示される（自動で更新される) */}
      <div id="msg" className="mb-10">{msg}</div>
      <h1 className="bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500 bg-clip-text text-transparent text-5xl font-bold text-9xl">{/* 普通はこのサイズが限界 */}
        {bigMsg}
      </h1>
      <h1 className="bg-gradient-to-r from-red-500 via-blue-900 to-blue-500 bg-clip-text text-transparent text-5xl font-bold text-[200px]">{/* 普通はこのサイズが限界 */}
        BIG!
      </h1>
    </div>
  );
}

export default App;
