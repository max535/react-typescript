export function Product({products} : any) {
    console.log(products);
    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >{products}</div>
    )
}
