import React from "react";
import { User, Shield, Bell, Monitor, Globe, Lock } from 'lucide-react';
import './Settings.css';

export const SettingPage = () => {
    return(
        <div className="setting-container">
            <h1 className="page-title">Settings</h1>

            <div className="settings-grid">
                {/*Setting Navigation*/}
                <div className="setting-nav">
                    <button className="nav-item active"><User size={18}/>Profile</button>
                    <button className="nav-item"><Monitor size={18}/> Appearance</button>
                    <button className="nav-item"><Shield size={18}/> Security</button>
                </div>
            </div>
        </div>
    )
}