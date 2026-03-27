import { describe, beforeEach } from 'vitest';
import useIncidentStore from './useIncidentStore';

describe ('Incident Store', () => {
    beforeEach(() => {
        const { setTheme } = useIncidentStore.getState();
    })
})
