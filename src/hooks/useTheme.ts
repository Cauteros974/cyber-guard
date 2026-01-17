import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
}

