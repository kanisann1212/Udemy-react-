import { useTy } from "../context/Tycontext";

const Main = () => {
  const [theme] = useTy()
  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>

  )
};

export default Main;

// ※メイン部分を作るファイル
