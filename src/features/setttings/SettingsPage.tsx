import React, { useState } from "react";
import { User, Shield, Bell, Monitor, Globe, Lock, Save, ShieldCheck } from 'lucide-react';
import './Settings.css';

export const SettingPage = () => {
    const [activeTab, setActiveTab] = useState('appearance');
    return(
        <div className="setting-container">
            <header className="settings-header">
                <h1 className="page-title">Account Settings</h1>
                <p className="page-description">Manage your workspace preferences and security credentials.</p>
            </header>

            <div className="settings-grid">
                {/*Setting Navigation*/}
                <div className="setting-nav">
                <button 
                    className={`nav-item ${activeTab === 'appearance' ? 'active' : ''}`}
                    onClick={() => setActiveTab('appearance')}
                >
                    <Monitor size={18} /> Appearance
                </button>

                <button 
                    className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
                    onClick={() => setActiveTab('security')}
                >
                    <Lock size={18} /> Security
                </button>
                
                <button 
                    className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('notifications')}
                >
                    <Bell size={18} /> Notifications
                </button>
                </div>

                {/*Setting Content*/}
                <div className="setting-content">
                    <section className="settings-section">
                        <h3>User Profile</h3>
                        <div className="profile-edit">
                            <div className="avatar-large">AD</div>
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" defaultValue="Admin_Analyst" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <input type="text" defaultValue="Senior SOC Analyst" disabled />
                        </div>
                    </section>
                    
                    <section className="setting-section">
                        <h3>System Preferences</h3>
                        <div className="setting-row">
                            <div className="setting-info">
                                <h4>Dark Mode</h4>
                                <p>Adjust the interface for low-light environments.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="seeting-row">
                            <div className="setting-info">
                                <h4>Language</h4>
                                <p>Choose your preferred interface language.</p>
                            </div>
                            <select className="settings-select">
                                <option>English (US)</option>
                                <option>Ukranian</option>
                            </select>
                        </div>
                    </section>

                    <section className="settings-section">
                        <h3>Alert Thresholds</h3>
                        <div className="setting-row">
                            <div className="setting-info">
                                <h3>Critical Alert Notification</h3>
                                <p>Receive immediate alerts for level 10 threats.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </section>

                    <div className="settings-actions">
                        <button className="btn-save">Save Change</button>
                    </div>
                </div>
            </div>
        </div>
    );
};