import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import { ThemeButton } from "@/features/theme";
import { formatDate } from "@/shared/helpers/formatDate.ts";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  const { isDark } = useTheme();
  return (
    <header className={`${s.header} ${isDark ? s.dark : s.light}`}>
      <div className={s.info}>
        <Link to={"/"}>
          <h1 className={s.title}>News portal</h1>
        </Link>
        <p className={s.data}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};
