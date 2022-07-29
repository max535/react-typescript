import { useState } from "react";

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Text JSX {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    );
}
