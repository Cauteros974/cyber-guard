import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./Layout.css";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return(
    <div className="layout">
       <Sidebar isOpen={isSidebarOpen} />

       <div className="main-container">
        <Header onMenuClick={handleMenuClick} />
        <main className="content-area">{children}</main>
       </div>
    </div>
  )
}