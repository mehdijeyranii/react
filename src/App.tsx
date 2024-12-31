import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />
            <Route
                path="/blogs"
                element={
                    <MainLayout>
                        <Blogs />
                    </MainLayout>
                }
            />
            <Route
                path="/about"
                element={
                    <MainLayout>
                        <About />
                    </MainLayout>
                }
            />
            <Route
                path="/contact"
                element={
                    <MainLayout>
                        <Contact />
                    </MainLayout>
                }
            />
        </Routes>
    );
}

export default App;
