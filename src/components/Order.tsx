import Image from "next/image";
import React from "react";

interface Props {
  products: Product[];
}

const Order: React.FC<Props> = ({ products }) => {
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
    return items.reduce((acc, obj) => {
      return acc + obj.price;
    }, 0);
  };

  return (
    <div className="flex flex-col m-4">
      {itemCounts(products).map((p) => (
        <HorizontalCard
          name={p.item.name}
          price={p.item.price}
          tags={{
            name: "",
          }}
          category={0}
          description={""}
          image={p.item.image}
          count={p.count}
        />
      ))}
    </div>
  );
};

interface CardProps extends Product {
  count: number;
}

const HorizontalCard: React.FC<CardProps> = (product) => {
  return (
    <div className="flex m-4 border rounded-md">
      <Image src={product.image} alt={"product"} width={200} height={200} />
      <div className="grow flex justify-center items-center gap-2">
        <p className="font-bold">{product.name}</p>
        <span className="text-white bg-black p-1 rounded-md">
          {product.count}
        </span>
        x
        <span className="text-white bg-red-600 p-1 rounded-md">
          {product.price}
        </span>
        Baht
      </div>
    </div>
  );
};

const OrderForm = () => {
    return (<></>);
}

export default Order;
