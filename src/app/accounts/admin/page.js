'use client'
import { useRouter } from "next/navigation";

function handleNavigate(){
    route.push('..')
}
export default function admin() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold font-serif my-5 text-blue-600">Admins Page</h1>
      <div>
        <a href=".."><button className="next-page-button">Go back</button></a>
      </div>
      </main>
    );
  }
  