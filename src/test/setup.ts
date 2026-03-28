import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';

//Imitation localstorage
const localStorage = (() => {
    let store: Record<string, string> = {};
    return(
        getItem: (key: string) => store[key] || null,
    )
})