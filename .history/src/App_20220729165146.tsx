import axios from "axios";
import { useEffect } from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";

export function App() {
    async function fetchProducts() {
        await axios.get('https://fakestoreapi.com/products')
    }

    useEffect(() => {
        console.log('effect');
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
