import s from "./Search.module.css";

type SearchKeywordsProps = {
  keywords: string;
  setKeywords: (event: string) => void;
};

export const Search = ({ keywords, setKeywords }: SearchKeywordsProps) => {
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
