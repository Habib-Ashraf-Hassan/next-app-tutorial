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
    <div>
      <h1>Welcome to the Recipe App</h1>
      <Link href={'/recipe-list'}>Explore Recipes</Link>
    </div>
  );
}
