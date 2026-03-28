# 🛡️CyberGuard SOC 

# CyberGuard SOC is a modern Security Operations Center (SOC) dashboard that integrates real-time data visualization and an active incident response module.

**🚀Key Features**

    • 📊 Interactive Dashboard: Real-time attack velocity visualization using Recharts.
    
    • ⚡ Active Countermeasures: A "Panic Button" system for instant IP blocking and threat neutralization via backend integration.
  
    • 🎯 Dynamic Security Score: A real-time system health metric that recalculates based on the quantity and severity of active threats.

    • 👤 Analyst Profile: A dedicated workspace showing operator metrics, clearance levels, and performance stats.

    • 📱 Responsive UI: A fully adaptive interface with smooth mobile navigation and modern "Cyber-Noir" aesthetics.

**🛠 Tech Stack**
| Layer               | Technology                                   |
| --------------------| -------------------------------------------- |
| Frontend            | **React 18, TypeScript, Vite**               |
| State Management    | **Zustand**                                  |
| Backend             | **Python 3.10+, FastAPI, Uvicorn**           |
| Machine Learning    | **Scikit-Learn (Random Forest Classifier)**  |
| UI & Icons          | **Tailwind CSS / CSS Modules, Lucide React** |
| Charts              | **Recharts**                                 |
| Navigation          | **React Router Dom v6**                      |

**🗺 Roadmap**

        [ ] Persistent storage integration (PostgreSQL / MongoDB).

        [ ] Real-time alert system using WebSockets.

        [ ] Anomaly detection for unusual network traffic patterns.

        [ ] Automated incident report generation (PDF/CSV).

# 1.Backend

# ⚙️Installation & Setup

# Navigate to server directory 
cd server

Install dependencies
**pip install fastapi uvicorn scikit-learn pandas**

# Run the server
**uvicorn main:app --reload --port 8002**

# 2.FrontEnd

Install dependencies
**- npm install** 

Start the development server
**- npm run dev**

# Unit test

# useIncidentStore.test.js (Logic of the topic)
    describe ('Incident Store', () => {
    
        beforeEach(() => {
            const { setTheme } = useIncidentStore.getState();
            setTheme('dark');
        });

        it('should initial theme as dark', () => {
            const state = useIncidentStore.getState();
            expect(state.theme).toBe('dark');
        });

        it('should change theme to light', () => {
            const { setTheme } = useIncidentStore.getState();
            setTheme('light');
        
            const state = useIncidentStore.getState();
            expect(state.theme).toBe('light');
        });
    })

# Settings.test.jsx (UI test)
Сheck that the new theme switcher actually responds to clicks.

    describe('SettingPage Component', () => {
        it('should render appearance section', () => {

            useIncidentStore.mockReturnValue({
                theme: 'dark',
                setTheme: vi.fn(),
            });

            render(<SettingPage />);

            expect(screen.getByRole('button', { name: /appearance/i })).toBeInTheDocument();
        });

        it('should call setTheme when theme button is clicked', () => {
            const setThemeMock = vi.fn();
            useIncidentStore.mockReturnValue({
                theme: 'dark',
                setTheme: setThemeMock,
            });
        
            render(<SettingPage />);

            const toggle = screen.getByTestId('theme-toggle');
            fireEvent.click(toggle);

            expect(setThemeMock).toHaveBeenCalled();
        });
    });

![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/dash1.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/dash2.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/dash3.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/dash4.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/Technical-standart.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/security-protocol.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/5.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/devices.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/incidents.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/incidents_1.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/incidents_2.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/policies.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/profile.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/setting_%20appearance.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/setting_%20notifications.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/setting_security.png)
![alt text](https://github.com/Cauteros974/cyber-guard/blob/main/public/images/scan.png)
