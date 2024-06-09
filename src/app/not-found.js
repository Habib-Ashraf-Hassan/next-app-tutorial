import Link from "next/link";
export default function NotFound(){
    return(
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-red-500 text-5xl">Page not Found</h1>
            <div>
            <Link href={"/"}><button className="next-page-button">Go to Back</button></Link>
            </div>
        </div>
    );
}