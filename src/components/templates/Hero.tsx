import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <main className="p-4 md:px-64 px-5 w-full flex justify-evenly md:flex-row flex-col">
      <div className="min-w-1/2 flex justify-center">
        <Image src={'/spider1.jpg'} width={300} height={300} alt="spider" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="">
          <h1 className="text-4xl">Skakun królewski</h1>
          <h2>Dla początkujących</h2>
        </div>
        <h1>Tylko za 30.99</h1>
        <Button>Kup</Button>
        <Button>Kup</Button>
      </div>
    </main>
  )
}

export default Hero
