import { describe, beforeEach, expect, it } from 'vitest';
import { useIncidentStore } from './useIncidentStore';


describe ('Incident Store', () => {

    //Reset the state before each test
    beforeEach(() => {
        const { setTheme } = useIncidentStore.getState();
        setTheme('dark');
    });

    it('should initial theme as dark', () => {
        const state = useIncidentStore.getState();
        expect(state.theme).toBe('dark');
    });

    it('should change theme to light', () => {
        const { setTheme } = useIncidentStore.getState();
        setTheme('light');
        
        const state = useIncidentStore.getState();
        expect(state.theme).toBe('light');
    });
})
