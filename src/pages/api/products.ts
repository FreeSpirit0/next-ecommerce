import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: Product[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    products: [
      {
        name: "Blue Shoes",
        price: 400,
        tags: { name: "Yeet" },
        category: {
          title: "Shoes",
          description: "Wearable",
          image:
            "https://res.cloudinary.com/dqt6cs5sh/image/upload/v1674044489/cld-sample-5.jpg",
        },
        description: "Dope",
        image:
          "https://res.cloudinary.com/dqt6cs5sh/image/upload/v1674044489/cld-sample-5.jpg",
      },
    ],
  });
}
