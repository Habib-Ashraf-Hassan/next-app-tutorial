"use server";

export async function FetchListOfProducts(){
    try{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        return data?.products;
    }catch(e){
        throw new Error(e);

    }
}