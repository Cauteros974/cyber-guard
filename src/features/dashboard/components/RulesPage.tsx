import React, {useState} from "react";
import { ShieldCheck, Zap, Droplets, Flame, HardHat, Info, ChevronRight } from "lucide-react";
import './Rules.css';

export const RulesPage = () => {
    const [activeCategory, setActiveCategory ] = useState('safety');

    const rulesData = {
        safety: {
            title: "Security Protocols",
            icon: ShieldCheck,
            rules: [
                { id: 1, title: "Working with Electricity", desc: "Always turn off the appropriate circuit breaker in the electrical panel before starting work. Use a test screwdriver.", level: "Critical", icon: Zap },
                { id: 2, title: "Gas Leak", desc: "If you smell gas: Do not turn on the lights, open the windows, turn off the gas valve, and leave the room.", level: "Critical", icon: Flame },
                { id: 3, title: "Protective Equipment", desc: "Wear gloves when working with chemicals and goggles when drilling into walls.", level: "Important", icon: HardHat }
            ]
        },
        standads: {
            title: "Technical Standards",
            icon: Info,
            rules: [
                { id: 4, title: "Wire Color Coding", desc: "Blue — neutral, Brown/White — live, Yellow-green — ground.", level: "Standard", icon: Zap },
                { id: 5, title: "Sewer Slopes", desc: "For 50mm pipes, the standard slope is 3cm per linear meter.", level: "Standard", icon: Droplets }
            ]
        }
    };

    return(
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div>
                    <h1 className="page-title">Knowledge Base</h1>
                    <p className="page-description">Regulations, standards and protocols for actions in emergency situations.</p>
                </div>
            </header>

            <div className="rules-layout">
                <div className="rules-sidebar">
                    {Object.keys(rulesData).map(key => (
                        <button
                            key={key}
                            className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                            onClick={() => setActiveCategory(key)}
                        >
                            {React.createElement(rulesData[key].icon, { size: 18 })}
                            <span>{rulesData[key].title}</span>
                        </button>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}