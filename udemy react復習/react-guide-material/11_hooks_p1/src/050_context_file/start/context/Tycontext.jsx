import { useContext, useState,createContext } from "react";

export const TyContext = createContext();
export const Tycon =({children})=>{
   const [theme, setTheme] = useState('light')
  return (
    <TyContext.Provider value={[theme, setTheme]}>
      {children}
    </TyContext.Provider>
  )
}

export const useTy = ()=>useContext(TyContext); 
// ↑わざわざ各ファイルでusecontextとcreatecontextを読み込むのを防ぎ簡略化するためのコード

// ※コンテキスト用のファイル