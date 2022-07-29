import axios from "axios";
import { useEffect } from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";
import { IProduct } from "./models";

export function App() {
    async function fetchProducts() {
       const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
       console.log(response);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
