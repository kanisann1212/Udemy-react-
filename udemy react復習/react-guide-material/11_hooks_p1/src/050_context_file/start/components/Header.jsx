import { useTy } from "../context/Tycontext";

const Header = () => {
  const THEMES = ['light', 'dark', 'red'];
  const [theme, setTheme] = useTy();
  const changeTheme=(e)=>setTheme(e.target.value)
  return(
      <header className={`content-${theme}`}>
        {THEMES.map(_theme => {
          return(
            <label key={_theme}>
            <input type="radio" value={_theme} checked={theme ===_theme} onChange={changeTheme}/>
            {_theme}
            </label>
          )

        })}
      </header>
  )
};

export default Header;

// ※ヘッダー部分を作るファイル
