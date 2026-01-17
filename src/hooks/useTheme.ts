import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
}

export const useTheme = create <ThemeState>() (
    persist(
        (set) => ({
            isDark: true;
            toggleTheme: () => set((state) => ({isDark: !state.isDark})),
        })
    )
)