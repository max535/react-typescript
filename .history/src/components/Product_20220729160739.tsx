export function Product(props : any) {
    console.log(props.category);
    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >{props.products}</div>
    )
}
