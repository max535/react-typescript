import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}
