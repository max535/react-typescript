import { Product } from "./components/Product";
import { products } from "./data/products";

export function App() {
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
