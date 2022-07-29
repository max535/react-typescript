import { useState } from "react";
import { Product } from "./components/Product";

export function App() {
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <Product product={prodcuts[0]} />
        </div>
    );
}
