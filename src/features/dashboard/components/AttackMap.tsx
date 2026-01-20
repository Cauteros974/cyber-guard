import './AttackMap.css';

export const AttackMap = () => {
    return(
        <div className="chart-card map-container">
            <h3>Live Attack Vectors</h3>
            <svg viewBox="0 0 800 400" className="world-map">
                <path d="M50,200 Q150,100 300,200 T600,200" fill="none" stroke="#1e293b" strokeWidth="2" />
                <circle cx="200" cy="150" r="5" fill="var(--critical)">
                    <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    )
}