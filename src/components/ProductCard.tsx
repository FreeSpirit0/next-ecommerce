import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<Props> = ({ imgUrl, name, price }) => {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col gap-2 w-fit border border-gray-100 transform transition duration-200 hover:scale-105">
      <Image src={imgUrl} alt="Product image" width={300} height={300} />
      <div className="flex flex-col gap-4 p-4">
        <p>{name}</p>
        <p className="text-gray-300 text-sm">Price:</p>
        <p>{price}</p>
        <button className="w-fit place-self-center p-4 rounded-full bg-blue-500 hover:bg-blue-700 text-white"
        onClick={() => addItem({
          name: name,
          price: price,
          tags: {
            name: ""
          },
          category: 1,
          description: "",
          image: imgUrl,
        })}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
