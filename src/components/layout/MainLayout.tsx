import { Header } from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};