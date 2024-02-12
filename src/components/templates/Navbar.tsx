'use client'

import { AlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const links = [
    {
      path: '/ofert',
      label: 'Oferta',
    },
    {
      path: '/',
      label: 'O nas',
    },

    {
      path: '/login',
      label: 'Konto',
    },
  ]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex justify-between  p-1 items-center md:px-7 px-2 sticky left-0 top-0 bg-white">
      <div className="flex w-1/3 gap-1 justify-start">
        <Link href={'/'} className="text-2xl fontb">
          Pajączkarnia
        </Link>
        <Image
          src={'/spider-donut-logo.jpg'}
          width={35}
          height={35}
          alt="spider-donut"
        />
      </div>

      <div className="hidden md:flex gap-4  w-1/3 justify-center ">
        {links.map((item) => (
          <Link key={item.label} href={item.path} className="group relative  ">
            {item.label}
            <div className="group-hover:w-full absolute left-0 bottom-0 h-1 rounded-lg bg-pink-400 w-0"></div>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex w-1/3 justify-end gap-1 items-center">
        <Link href={'basket'}>Koszyk</Link>
        <Image src={'/basket.jpg'} width={40} height={25} alt="basket" />
      </div>

      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <AlignJustify />}
      </div>

      {isOpen && (
        <div className="fixed transition duration-300 ease-in-out bg-white w-full h-full top-10 left-0 flex flex-col text-2xl pt-9 items-center gap-4">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="group relative  "
            >
              {item.label}
              <div className="group-hover:w-full absolute left-0 bottom-0 h-1 rounded-lg bg-pink-400 w-0"></div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
