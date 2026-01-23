import './ToggleSwitch.css';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
}

export const ToggleSwitch = () => ({cheked, onChange}: ToggleSwitchProps) => {
    return(
        <button
            className='toggle'
        >
            <span className="toggle-thumb" />
        </button>
    )
}