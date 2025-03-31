import React, { useEffect } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("home")
  }, [])
  return (
    <>
    
    </>
  );
} 