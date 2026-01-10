import { Header } from "./Header";
import { Sidebar } from "lucide-react";

interface Props {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
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