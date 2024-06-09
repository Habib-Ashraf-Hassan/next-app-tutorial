'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  const route = useRouter();
  function handleNavigate(){
    route.push('/accounts/admin')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="styled-header">Next.js Tutorial</h1>
    <div>
      <Link href={'accounts'}> <button className="next-page-button">Go to Accounts</button></Link>
      <button className="next-page-button" onClick={handleNavigate}>Go to Admin</button>
      <Link href={'server-fetch'}> <button className="next-page-button">Go to Server fetch data</button></Link>
    </div>
    </main>
  );
}
