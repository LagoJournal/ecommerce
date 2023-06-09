import { db } from "@/database";
import { IProduct } from "@/interfaces";
import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IProduct;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProduct(req, res);
    default:
      res.status(400).json({ message: "Bad Request" });
  }
}

const getProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const { slug } = req.query;
  const product = await Product.findOne({ slug }).lean();

  await db.disconnect();
  if (!product) return res.status(404).json({ message: "Product not found" });

  return res.json(product);
};
