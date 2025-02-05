import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: true, // Default to dark mode
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useThemeStore;
