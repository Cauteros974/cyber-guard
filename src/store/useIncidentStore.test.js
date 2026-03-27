import { describe, beforeEach, expect } from 'vitest';
import useIncidentStore from './useIncidentStore';

describe ('Incident Store', () => {
    beforeEach(() => {
        const { setTheme } = useIncidentStore.getState();
        setTheme('dark');
    });

    if('should initial theme as dark', () => {
        const state = useIncidentStore.getState();
        expect(state.theme).toBe('dark');
    });
})
