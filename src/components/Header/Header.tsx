import { formatDate } from "../../helpers/formatDate.ts";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>News portal</h1>
      <p className={s.data}>{formatDate(new Date())}</p>
    </header>
  );
};
