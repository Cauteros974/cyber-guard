import React, { useState } from 'react';
import { Monitor, Lock, Bell, Eye, Save, ShieldCheck, Globe } from 'lucide-react';
import './Settings.css';

export const SettingPage = () => {

    const [activeTab, setActiveTab] = useState('appearance');

    return(
        <div className="settings-container">
            <header className="setting-header">
                <h1 className="page-title">Account Settings</h1>
                <p className="page-description">Manage your workspace preferences and security credentials.</p>
            </header>

            <div className="setting-grid">
                {/*Setting Navigation */}
                <aside className="setting-nav">
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
                </aside>

                {/*Setting Content*/}
                <div className="settings-content">
                    {/* Section: Appearance */}
                    {activeTab === 'appearance' && (
                        <section className="settings-section animate-fade-in">
                            <div className="section-header">
                                <h3><Eye size={20} /> Appearance</h3>
                                <p>Customize how CyberGuard looks on your screen.</p>
                            </div>

                            <div className="setting-row">
                                <div className="setting-info">
                                    <h4>Interface Theme</h4>
                                    <p>Select between dark, light or system default theme.</p>
                                </div>
                                <div className="theme-toggle-group">
                                    <button className="theme-btn active">Dark</button>
                                    <button className="theme-btn">Light</button>
                                </div>
                            </div>

                            <div className="setting-row">
                                <div className="setting-info">
                                    <h4>Language</h4>
                                    <p>Set your preferred language for the dashboard.</p>
                                </div>
                                <select className="setting-select">
                                    <option>English</option>
                                    <option>Ukraine</option>
                                </select>
                            </div>
                        </section>
                    )}
                    {activeTab === 'security' && (
                        <section className="settings-section animate-fade-in">
                            <div className="section-header">
                                <h3><Lock size={20} /> Security</h3>
                                <p>Protect your account with advanced authentication.</p>
                            </div>

                            <div className="setting-row">
                                <div className="setting-info">
                                    <h4>Two-Factor Authentication</h4>
                                    <p>Add an extra layer of security using an auth app.</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider" />
                                </label>
                            </div>

                            <div className="setting-row">
                                <div className="setting-info">
                                    <h4>Change Password</h4>
                                    <p>Last changed 3 months ago.</p>
                                </div>
                                <button className="btn-secondary">Update Password</button>
                            </div>

                            <div className="security-status-box">
                                <ShieldCheck size={18} color="var(--accent)"/>
                                <span>Your account meets the enterprise security standards</span>
                            </div>
                        </section>
                    )}

                    {/* Section: Notifications */}
                    {activeTab === 'notifications' && (
                        <section className="settings-section animate-fade-in">
                            <div className="section-header">
                                <h3><Bell size={13} /> Notifications</h3>
                                <p>Configure how you want to be alerted about threats.</p>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}