import { Loader } from "./components/Loader";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

export function App() {
    const { loading, error, products } = useProducts();

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <Error error={error} />}
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
