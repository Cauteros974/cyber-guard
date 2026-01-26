import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="app-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="main-viewport">
        <Header onMenuClick={toggleSidebar} />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};