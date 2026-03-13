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
        }
    }
}