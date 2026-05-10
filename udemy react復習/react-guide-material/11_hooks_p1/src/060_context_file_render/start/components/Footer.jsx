import { useUpdateTheme } from "../context/ThemeContext"

const Footer = () => {
  const setTheme= useUpdateTheme();
  console.log('フッターだよ')

  return (
    <footer>
      <h1>テーマの切り替え</h1>
    </footer>
  );
};

export default Footer;
