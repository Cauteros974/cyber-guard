import React, {useState} from "react";
import { ShieldCheck, Zap, Droplets, Flame, HardHat, Info, ChevronRight, type LucideIcon} from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './Rules.css';

type Rule = {
    id: number
    title: string
    desc: string
    level: string
    icon: LucideIcon
    fullText?: string
    checklist?: string[]
}


export const RulesPage = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("safety");
    const [selectedRule, setSelectedRule] = useState<Rule | null>(null);
    const [isApplying, setIsApplying] = useState(false);
    const [appliedSuccess, setAppliedSuccess] = useState(false);

    type Category = keyof typeof rulesData;
    
    const handleApplyProtocol = (rule) => {
        setIsApplying(true);

        setTimeout(() => {
            setIsApplying(false);
            setAppliedSuccess(true);

            console.log(`Protocol ${rule.title} applied in the system`);

            setTimeout(() => {
                setAppliedSuccess(false);
                setSelectedRule(null);
            }, 2000);

        }, 1500);
    };

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
                    {(Object.keys(rulesData) as (keyof typeof rulesData)[]).map(key => (
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

                {/*Rules List*/}
                <div className="rules-content">
                    <div className="rules-grid">
                        {rulesData[activeCategory].rules.map(rule => (
                            
                            
                            <div key={rule.id} className={`rule-card ${rule.level.toLowerCase()}`}>
                                <div className="rule-header">
                                    {React.createElement(rule.icon, {size: 14, className: "rule-icon"})}
                                    <span className="rule-budge">{rule.level}</span>
                                </div>
                                <h3>{rule.title}</h3>
                                <p>{rule.desc}</p>
                                <button 
                                    className="rule-more"
                                    onClick={() => setSelectedRule(rule)}
                                >
                                    Read more <ChevronRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedRule && (
                <div
                className="modal-overlay"
                onClick={() => !isApplying && setSelectedRule(null)}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                        {!isApplying && (
                            <button
                            className="modal-close"
                            onClick={() => setSelectedRule(null)}
                          >
                            X
                          </button>
                        )}

                        <div className="modal-header">
                            <div className={`icon-box ${selectedRule.level.toLowerCase()}`}>
                                {React.createElement(selectedRule.icon, {size: 32})}
                            </div>

                            <div>
                                <h2>{selectedRule.title}</h2>
                                <span className={`status-tag ${selectedRule.level.toLowerCase()}`}>
                                    {selectedRule.level}
                                </span>
                            </div>
                        </div>

                        <div className="modal-body">
                            {appliedSuccess ? (
                                <div className="success-state">
                                    <h3>Protocol Activated</h3>
                                    <p>Event added to security log</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}