import { paths } from "../paths";

export default function Page({ params }) {
  const date = new Date;
  return <h3>このページは{params.id}です。{date.toJSON()}</h3>;
}

// export async function generateStaticParams() {
//   return paths
// }

// これを定義しないとSGできない↑
// ダイナミックルーティング時のid値を取得して、そのページをSGにする役割を持ってる→簡単に言うと　ビルド時にどのページを作るかNext.jsに教える関数
// あとはnext.config.mjsで設定をする