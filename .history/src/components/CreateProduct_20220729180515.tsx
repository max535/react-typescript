import axios from "axios";
import { useState } from "react";
import { IProduct } from "../models";

const productData: IProduct = {
    title: "",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
    rating: {
        rate: 42,
        count: 10,   
    }
};

export function CreateProduct() {
    const [value, setValue] = useState("");

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    };

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />

            <button
                type="submit"
                className="py-2 px-4 border bg-yellow-400 hover:text-white"
            >
                Create
            </button>
        </form>
    );
}
