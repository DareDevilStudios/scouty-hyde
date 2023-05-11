import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../public/icons/logo.png'
import Phone from '../public/images/phone.svg'
import WhatsApp from '../public/images/whatsapp.svg'
import ImageSrc from '../public/images/image.jpg'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [property, setProperty] = useState([])

  const [images, setImages] = useState([
    {
      id: 1,
      src: "/images/image.jpg"
    },
    {
      id: 2,
      src: "/images/image.jpg"
    },
    {
      id: 3,
      src: "/images/image.jpg"
    },
    {
      id: 4,
      src: "/images/image.jpg"
    },

  ])

  const [dummy, setdummy] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ])

  useEffect(() => {
    // fetch the data from the api "http://164.92.86.98/api/v1/property/share/d8f168b4-b860-4a75-88ec-960ed8bd9d49/" and set to the state "property"
    fetch("http://164.92.86.98/api/v1/property/share/d8f168b4-b860-4a75-88ec-960ed8bd9d49/").then((res) => res.json()).then((data) => {
      setProperty(data)
    })
  },[])

  useEffect(() => {
    console.log(property)
  }, [property])

  return (
    <>

      <Head>
        <title>{property.property_name}</title>
      </Head>

      <div class="h-screen bg-[#f5f7fb]">

        {/* <!-- navbar --> */}

        <nav class="bg-[#f5f7fb] border-gray-200">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
            <a href="/" class="flex items-center">
              <Image src={Logo} class="w-60 mr-3" alt="Flowbite Logo" />
            </a>
          </div>
        </nav>

        {/* <!-- body --> */}

        <div class="main w-full pb-6 px-4">
          <div class="container flex bg-white rounded-3xl px-5 py-12 drop-shadow-2xl h-[55rem]">

            {/* <!-- left side --> */}
            <div class="w-2/3">
              <div class="left flex h-[30rem] ">
                <div class="w-1/2 mr-1">
                  <Image class="w-full h-full rounded-tl-3xl rounded-bl-3xl" object-fit="contain" width={500} height={500} src="/images/image.jpg" alt="" />
                </div>
                <div class="w-1/2 grid grid-cols-2 gap-1">
                  {
                    images && images.length > 0 ? (
                      images.map((image) => (
                        <Image class="w-full h-full " object-fit="contain" width={500} height={500} src={image.src} alt="" />
                      ))) : (
                      dummy.map((image) => (
                        <div class="flex items-center justify-center w-full bg-gray-300 rounded">
                          <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                        </div>
                      ))
                    )
                  }
                </div>
              </div>

              {/* <!-- tags --> */}
              <div class="mt-5">
                <button class="px-8 py-2 bg-blue-100 text-blue-700 rounded-xl">Apartment</button>
              </div>

              {/* <!-- Owner and property bookmark --> */}
              <div class="flex gap-4 items-center mt-4">
                <span class="text-gray-800 text-lg font-semibold">GRC subhiksha</span>
                <div class="flex items-center gap-1">
                  <svg class="w-8 h-8 text-transparent" fill="#fbcb50" stroke="currentColor"
                    stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                    </path>
                  </svg>
                  <span class="text-gray-800 text-lg font-md">0.0</span>
                  <span class="text-gray-500 text-lg">(0)</span>
                </div>
                <svg class="w-10 h-10 text-gray-500 border-2 rounded-full p-1" fill="grey" stroke="currentColor"
                  stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                  </path>
                </svg>
              </div>

              {/* <!-- address --> */}
              <div class="mt-4 flex items-center gap-2">
                <svg class="w-6 " fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                </svg>
                <a href="/" class="text-gray-600 text-md">Sharon Villa kanjiramatom p.o Ernakulam</a>
              </div>

              {/* <!-- Owner info and SQFT --> */}
              <div class="flex mt-4 items-center gap-12">
                <div class="flex gap-4">
                  <Image class="w-12 rounded-lg" src={ImageSrc} alt="" />
                  <div class="flex flex-col">
                    <span class="text-gray-800 text-lg font-semibold">GRC Infra</span>
                    <span class="text-gray-500 text-md">23 years of experience</span>
                  </div>
                </div>
                <div class="flex items-center">
                  <h1 class="text-2xl font-bold">₹6249</h1><span
                    class="text-md text-gray-500 font-md self-end">/sqft</span>
                </div>
              </div>

              {/* <!-- description --> */}
              <div class="flex flex-col  mt-4">
                <span class="text-gray-800 text-lg font-semibold">Description</span>
                <span class="text-gray-600 text-md mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Impedit sit doloribus consequatur exercitationem aliquid reprehenderit dicta illo nihil
                  sapiente iure voluptates dolorum eos fugit nostrum mollitia odio quae, repellendus
                  dolorem!</span>
              </div>

            </div>

            {/* api integration complete below */}
            {/* <!-- right side --> */}
            <div class="right py-5 px-7 w-1/3">
              <div class="flex justify-between items-center w-full">
                {
                  property.ready_to_move ?
                  (<div class="px-3 py-1 text-white bg-green-600 text-xs rounded-br-md rounded-tr-md">Ready To Move</div>)
                  :
                  (<div class="px-3 py-1 text-white bg-red-600 text-xs rounded-br-md rounded-tr-md">Under Construction</div>)
                }
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.6" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              {/* <!-- details --> */}
              <div class="grid grid-cols-2 mt-6 gap-4">
                <div class="flex flex-col">
                  <span class="text-gray-800 text-lg font-semibold">Dimension</span>
                  <span class="text-gray-600 text-md">{property.dimension}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-gray-800 text-lg font-semibold">Facing Towards</span>
                  <span class="text-gray-600 text-md">{property.faced_towards}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-gray-800 text-lg font-semibold">No Of Floors</span>
                  <span class="text-gray-600 text-md">{property.no_of_floors}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-gray-800 text-lg font-semibold">No Of Bedrooms</span>
                  <span class="text-gray-600 text-md">{property.bhk_count} BHK</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-gray-800 text-lg font-semibold">Total Sqft</span>
                  <span class="text-gray-600 text-md">{property.total_sqft}</span>
                </div>
              </div>

              {/* <!-- facilities --> */}

              <h1 class="text-lg font-semibold mt-6 mb-3">Facilities</h1>
              <div class="grid grid-cols-4 gap-4">

                {
                  property?.amenities?.map((amenity) => (
                    <div
                      class="p-3 border-2 rounded-xl flex flex-col justify-center items-center gap-[.5rem]">
                      <Image class="w-8" src={amenity.amenity_icon} width={200} height={200} alt="" />
                      <span class="text-gray-800 text-sm font-md text-center">{amenity.amenity}</span>
                    </div>
                  ))
                }
                
              </div>
            </div>

          </div>
        </div>


        {/* <!-- buttons --> */}
        <div class="flex gap-4 fixed bottom-5 right-12 z-100">
          <button class="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-3">
            <Image class="w-8" src={Phone} alt="" />
            Phone</button>
          <button class="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-3">
            <Image class="w-8" src={WhatsApp} alt="" />
            Whatsapp</button>
        </div>

      </div>
    </>
  )
}
