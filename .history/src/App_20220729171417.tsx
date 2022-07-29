import { Product } from "./components/Product";
import { products } from "./data/products";

export function App() {
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
