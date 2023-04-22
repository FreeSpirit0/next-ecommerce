import Image from 'next/image'
import React from 'react'

interface Props {
    imgUrl: string,
    name: string,
    price: number
}

const ProductCard: React.FC<Props> = ({ imgUrl, name, price }) => {
  return (
    <div className='flex flex-col gap-2 w-fit border border-gray-100 transform transition duration-200 hover:scale-105'>
        <Image src={imgUrl} alt="Product image" width={300} height={300}/>
        <div className="flex flex-col gap-4 p-4">
            <p>{name}</p>
            <p className='text-gray-300 text-sm'>Price:</p>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default ProductCard