import s from "./Search.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={s.search}>
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
