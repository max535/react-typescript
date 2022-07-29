import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5bg-gray-500 text-white">
            <span className="font-bold">React2022</span>

            <span>
                <Link to="/">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    );
}
