"use client";
import { useEffect } from "react"
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/blogs")
  }, [])
  
  return (
    <div className="grid place-items-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-2xl md:text-4xl lg:text-6xl">Loading...</h1>
    </div>
  )
}
