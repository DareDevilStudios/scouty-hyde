import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../public/icons/logo.png'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ children, href }) {

  const router = useRouter()

  useEffect(() => {
    setInterval(() => {
      router.push("/1ca248cd-2a19-4c6b-a4d4-a189d8228329")
    }, 3000);
  })

  return (
    <>

      <Head>
        <title>Rasees Properties</title>
      </Head>

      <div class="w-full h-screen justify-center items-center animate-pulse flex flex-1 bg-[#f5f7fb]">
              <Image src={Logo} className="w-[40rem]" alt="Raasees Properties" />
      </div>
    </>
  )
}
