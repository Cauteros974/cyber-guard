import './ToggleSwitch.css';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
}

export const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
    return(
        <button
            className = {`toggle ${checked ? 'toggle--on' : 'toggle--off'}`}
            onClick = {onChange}
            aria-pressed = {checked}
        >
            <span className="toggle-thumb" />
        </button>
    );
};