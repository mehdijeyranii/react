import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-dvh relative">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
