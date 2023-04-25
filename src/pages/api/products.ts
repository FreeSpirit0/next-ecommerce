import { getProducts } from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: Product[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  getProducts().then(d => {
    console.log(d)
    res.status(200).send(d);
  })
}
