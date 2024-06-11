import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Server Actions</h1>
      <Link href={"/theory/server-page-example"}>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-150">
          Go to server page
      </button>

      </Link>
    </div>
  );
}