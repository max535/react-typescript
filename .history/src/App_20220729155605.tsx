import { useState } from "react";
import { Product } from "./components/Product";

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <Product />
        </div>
    );
}
