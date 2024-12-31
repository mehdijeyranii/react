import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="h-dvh relative overflow-hidden">
            <Header />
            <div className="h-[calc(100vh-7rem)] overflow-y-auto scrollbar ">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
