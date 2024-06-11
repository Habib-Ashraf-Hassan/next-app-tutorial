import Link from "next/link";
import { FetchListOfProducts } from "@/app/action";

async function ServerExample(){
    
}

export default async function ServerPageExample() {
    const products = await FetchListOfProducts();
    console.log(products);
    return (
        <div>
            <h1>Welcome to Server page examples</h1>
            <ul>
                {
                    products && products.length > 0 ?
                    products.map(product => <li key={product.id}>{product.title}</li>):<h2>No products Found</h2>
                }
            </ul>
        </div>
    );
    
}
