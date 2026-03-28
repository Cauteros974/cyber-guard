import { SettingPage } from './SettingsPage';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useIncidentStore } from '../../store/useIncidentStore';

vi.mock('../../store/useIncidentStore', () => ({
    useIncidentStore: vi.fn(),
}));

describe('SettingPage Component', () => {
    if('should toggle theme when switch is clicked', () => {
        const setThemeMock = vi.fn();

        //Settings mock-store
        useIncidentStore.mockReturnValue({
            them: 'dark',
            setTheme: setThemeMock,
        });

        render(<SettingPage />);

        //Looking for our new switch (theme-switch
        const themeSwitch = screen.getByText(/Interface Theme/i)

        //Simulate a click
        fireEvent.click(themeSwitch);
    });
});