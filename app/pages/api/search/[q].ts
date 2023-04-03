import { db } from "@/database";
import { IProduct } from "@/interfaces";
import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IProduct[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchProduct(req, res);
    default:
      res.status(400).json({ message: "Bad Request" });
  }
}
const searchProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { q = "" } = req.query;

  if (q.length === 0)
    return res.status(400).json({ message: "Search Query must be specified" });

  q = q.toString().toLowerCase();

  await db.connect();

  const product = await Product.find({
    $text: { $search: q },
  })
    .select("title images price inStock slug -_id")
    .lean();

  await db.disconnect();

  if (!product) return res.status(404).json({ message: "Product not found" });
  return res.status(200).json(product);
};
