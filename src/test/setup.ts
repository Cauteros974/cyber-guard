import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';

//Imitation localstorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return{
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value; },
        clear: () => {store = {}; },
    };
})();

Object.defineProperty(window, 'localStorage', {value: localStorageMock});

//Clearing the store before each test (optional)
beforeEach(() => {
    window.localStorage.clear();
});