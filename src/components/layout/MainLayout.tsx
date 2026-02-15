import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./Layout.css";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
}