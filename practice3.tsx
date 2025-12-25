"use client";
import { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState(""); // 入力された文字
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ログイン状態
  const [error, setError] = useState(""); // エラーメッセージ

  const targetName = "admin";

  const handleCheck = () => {
    if (inputValue === targetName) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("名前が違います。'admin' と入力してください。");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-green-600">ようこそ、管理者さん！</h1>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          ログアウト
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">ログイン</h1>
      
      <input
        type="text"
        placeholder="名前を入力..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // 入力されるたびに更新
        //onChangeで何かがinput要素に入力されたことを認識、それがあるたびにこのコードが実行されることを示す。
        //(e) =>でイベントオブジェクトと呼ばれる"e"を認識する。eには発生したイベントに関する情報が含まれている
        //e.target.value　今行われたイベントの文字列を指す
        className="border-2 border-gray-300 p-2 rounded text-black focus:border-blue-500 outline-none"
      />

      {/* エラーがある時だけ表示する条件付きレンダリング */}
      {/* A && B : Aが本当 (trueっぽいもの) なら、Bを返す   この場合はerrorに何が文字列入っている(errorがtrueの場合)は<p className="text-red-500 text-sm">{error}</p>を書くということ*/}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleCheck}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        ログインする
      </button>
    </div>
  );
}
