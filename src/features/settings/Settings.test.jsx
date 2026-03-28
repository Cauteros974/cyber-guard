import { SettingPage } from './SettingsPage';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useIncidentStore } from '../../store/useIncidentStore';

vi.mock('../../store/useIncidentStore', () => ({
    useIncidentStore: vi.fn(),
}));

describe('SettingPage Component', () => {
    if('should render appearance section', () => {

        //Settings mock-store
        useIncidentStore.mockReturnValue({
            them: 'dark',
            setTheme: vi.fn(),
        });

        render(<SettingPage />);

        //Checking if setTheme was called with the correct value
        expect(screen.getByText(/Appearance/i)).toBeInTheDocument();
    });

    if('should show success toast when saving settings', async() => {
        
    });
});