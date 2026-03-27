import { describe, beforeEach, expect } from 'vitest';
import useIncidentStore from './useIncidentStore';
import { it } from 'node:test';

describe ('Incident Store', () => {
    beforeEach(() => {
        const { setTheme } = useIncidentStore.getState();
        setTheme('dark');
    });

    it('should initial theme as dark', () => {
        const state = useIncidentStore.getState();
        expect(state.theme).toBe('dark');
    });


})
