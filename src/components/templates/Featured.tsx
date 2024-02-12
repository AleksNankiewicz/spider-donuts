import React from 'react'
import SingleProduct from '../organisms/SingleProduct'

const Featured = () => {
  return (
    <main>
      <h1 className="flex w-full justify-center items-center text-2xl mb-3">
        Wybrane Pająki
      </h1>
      <div className="flex flex-wrap gap-5 px-2 justify-center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </main>
  )
}

export default Featured
