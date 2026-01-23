import './ToggleSwitch.css';

interface ToggleSwitchProps {
    checked: boolean;
    onToggle: () => void;
}

export const ToggleSwitch = ({ checked, onToggle }: ToggleSwitchProps) => {
    return(
        <button
            className={`toggle ${checked ? 'toggle--on' : 'toggle-off'}`}
            onClick = {onToggle}
            aria-pressed = {checked}
        >
            <span className="toggle-thumb" />
        </button>
    );
};