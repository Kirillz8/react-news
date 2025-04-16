import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import { themeIcons } from "@/shared/assets";

export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      alt={"theme mode"}
      width={30}
      onClick={toggleTheme}
    />
  );
};
