import { Product } from "./components/Product";
import {products} from './data/products';

export function App() {
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <Product
                product={products[0]}
                title={'test'}
                count={42}
            />
        </div>
    );
}
