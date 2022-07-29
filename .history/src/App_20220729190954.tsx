import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";

export function App() {
    return (
        <Routes>
            <Navigation />
            <Route path="/" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}
