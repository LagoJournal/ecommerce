import { db, seedDB } from "@/database";
import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(4001)
      .json({ message: "API disabled on production status" });
  }

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(seedDB.initialData.products);

  await db.disconnect();

  res.status(200).json({ message: "Success" });
}
