import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { password: pw, ...user } = await db.user.create({
      data: req.body,
    });

    res.status(200).json({
      message: "User signup success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: JSON.stringify(error),
    });
  }
};
