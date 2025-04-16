import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import s from "./Search.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();
  return (
    <div className={`${s.search} ${isDark ? s.dark : s.light}`}>
      <input
        className={s.input}
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder={"Search..."}
      />
    </div>
  );
};
