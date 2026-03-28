import { SettingPage } from './SettingsPage';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useIncidentStore } from '../../store/useIncidentStore';

vi.mock('../../store/useIncidentStore', () => ({
    useIncidentStore: vi.fn(),
}));

describe('SettingPage Component', () => {
    it('should render appearance section', () => {

        //Settings mock-store
        useIncidentStore.mockReturnValue({
            theme: 'dark',
            setTheme: vi.fn(),
        });

        render(<SettingPage />);

        //Checking if setTheme was called with the correct value
        expect(screen.getByRole('button', { name: /appearance/i })).toBeInTheDocument();
    });

    it('should call setTheme when theme button is clicked', () => {
        const setThemeMock = vi.fn();
        useIncidentStore.mockReturnValue({
            theme: 'dark',
            setTheme: setThemeMock,
        });
        
        render(<SettingPage />);

        const toggle = screen.getByTestId('theme-toggle');
        fireEvent.click(toggle);

        /*const lightButton = screen.getByText('light');
        fireEvent.click(lightButton); */

        expect(setThemeMock).toHaveBeenCalled();
    });
});