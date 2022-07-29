import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />}>Main</Route>
            <Route path="/about" element={<AboutPage />}>About</Route>
        </Routes>
    );
}
