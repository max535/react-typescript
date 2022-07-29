import { useContext} from "react";
import { Routes, Route } from "react-router-dom";
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { ModalContext } from "./context/ModalContext";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";
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
