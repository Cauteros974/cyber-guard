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

                {/*Setting Content*/}
                <div className="setting-content">
                    <section className="settings-section">
                        <h3>User Profile</h3>
                        <div className="profile-edit">
                            <div className="avatar-large">AD</div>
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <input type="text" defaultValue="Senior SOC Analyst" disabled />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}