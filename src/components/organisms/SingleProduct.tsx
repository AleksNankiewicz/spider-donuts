'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const SingleProduct = () => {
  const handleButton = () => {
    console.log('sdad')
  }

  return (
    <Link href={'#'}>
      <div className="shadow-md flex flex-col items-center w-56 py-3 hover:shadow-black rounded-2xl">
        <Image src={'/spider1.jpg'} height={100} width={100} alt="spider" />
        <h1>Carribena Versicolor</h1>
        <p>L3</p>
        <p>20zł</p>
        <Button onClick={handleButton}>Dodaj do koszyka</Button>
      </div>
    </Link>
  )
}

export default SingleProduct
