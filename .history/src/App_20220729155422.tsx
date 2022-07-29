import { useState } from "react";

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <h1>Text JSX {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    );
}
