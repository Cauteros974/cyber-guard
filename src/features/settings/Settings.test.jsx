import { SettingPage } from './SettingsPage';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useIncidentStore } from '../../store/useIncidentStore';

vi.mock('../../store/useIncidentStore', () => ({
    useIncidentStore: vi.fn(),
}))