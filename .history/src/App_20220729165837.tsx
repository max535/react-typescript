import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";
import { IProduct } from "./models";

export function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchProducts() {
        setLoading(true);
       const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
       setProducts(response.data);
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
