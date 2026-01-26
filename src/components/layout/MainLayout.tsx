import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import './Layout.css';

interface Props {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: {children: React.ReactNode}) =>{
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-container">
        <Header />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};