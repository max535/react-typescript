import { useState } from "react";
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

export function App() {
    const { loading, error, products } = useProducts();
    const [modal, setModal] = useState(true);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}

            <Modal title="Create new product">
                <CreateProduct/>
            </Modal>
        </div>
    );
}
