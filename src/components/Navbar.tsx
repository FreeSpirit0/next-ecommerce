import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { useCategory } from "@/contexts/CategoryContext";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const { items } = useCart();
	const { category, setCategory } = useCategory()
	const router = useRouter()

  const groups = (items: Product[]) =>
    items.reduce((groups: { [key: string]: Product[] }, item) => {
      const group = groups[item.name] || [];
      group.push(item);
      groups[item.name] = group;
      return groups;
    }, {});

  const itemCounts = (items: Product[]) => {
    let count: { item: Product; count: number }[] = [];

    Object.entries(groups(items)).forEach(([key, value]) => {
      count.push({ item: value[0], count: value.length });
    });

    return count;
  };

	const price = (items: Product[]) => {
		return items.reduce((acc, obj) => { return acc + obj.price; }, 0);
	}

  return (
    <nav>
      <div className="max-w-screen flex items-center justify-between">
        <Link className="p-6 border-b border-r" href={"/"} onClick={() => setCategory("")}>
          E-Commerce
        </Link>
        <ul className="grow flex [&>*]:p-6 [&>*]:border-b [&>*]:border-r [&>*]:text-center">
          <li className="grow group">
            Browse
            <ul className="z-50 w-3/6 absolute rounded-md bg-white p-4 border hidden group-hover:flex flex-col items-start gap-4">
              <li onClick={() => { router.push("/");setCategory("Shoes")}}>Shoes</li>
              <li onClick={() => { router.push("/");setCategory("Headphone")}}>Headphone</li>
              <li onClick={() => { router.push("/");setCategory("Perfume")}}>Perfume</li>
              <li onClick={() => { router.push("/");setCategory("Glasses")}}>Glasses</li>
              <li onClick={() => { router.push("/");setCategory("Watch")}}>Watch</li>
              <li onClick={() => { router.push("/");setCategory("Container")}}>Container</li>
            </ul>
          </li>
          <Link className="grow" href={"/checkout"}>
            <li className="grow group">
              Cart{" "}
              <span className="ml-2 text-white bg-red-600 p-1 rounded-md">
                {items.length}
              </span>
              {items.length !== 0 ? (
                <>
                  <ul className="z-50 w-80 absolute rounded-md bg-white p-4 border hidden group-hover:flex flex-col gap-4">
                    {itemCounts(items).map((item) => (
                      <li className="grow flex justify-between items-center">
                        <p>{item.item.name}</p>
												<div className="[&>*]:mx-2">
													<span className="text-white bg-red-600 p-1 rounded-md">
														{item.count} 
													</span>
													<span>
														x
													</span>
													<span className="text-white bg-black p-1 rounded-md">
														{item.item.price}
													</span>
												</div>
                      </li>
                    ))}
										<div className="flex justify-between">
											<span className="place-self-start">Total Price:</span>
											<span className="place-self-start">{price(items)} Baht</span>		
										</div>
										
										<button className="w-fit place-self-center p-4 rounded-full bg-blue-500 hover:bg-blue-700 text-white">Checkout</button>
                  </ul>
                </>
              ) : null}
            </li>
          </Link>
          <Link href={"/account"}>Account</Link>
        </ul>
      </div>
      <div className="max-w-screen flex items-center justify-between">
        <div className="p-4 border-b border-r">
          <Breadcrumb category={category}/>
        </div>
        <div className="grow flex p-4 border-b border-r text-center overflow-x-hidden ">
          <div className="grow animate-marquee whitespace-nowrap">
            <div className="font-bold">
              Advertisement Space: Contact shop@ske.com for more detail
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
