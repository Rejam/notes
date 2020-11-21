import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default async (req, res) => {
  try {
    const users = await db.user.findMany({
      select: { id: true, email: true },
    });

    res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (error) {
    if (error.code === "P2021") {
      res.status(400).json({
        error: "Table not found",
      });
    }
  }
};
