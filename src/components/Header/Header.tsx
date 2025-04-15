import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext.tsx";
import { formatDate } from "../../helpers/formatDate.ts";
import s from "./Header.module.css";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className={`${s.header} ${isDark ? s.dark : s.light}`}>
      <div className={s.info}>
        <h1 className={s.title}>News portal</h1>
        <p className={s.data}>{formatDate(new Date())}</p>
      </div>
      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        alt={"theme mode"}
        width={30}
        onClick={toggleTheme}
      />
    </header>
  );
};
