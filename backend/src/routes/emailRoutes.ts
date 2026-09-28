import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.post("/schedule", async (req, res) => {
  try {
    const {
      recipient,
      subject,
      body,
      scheduledTime
    } = req.body;

    const email = await prisma.email.create({
      data: {
        recipient,
        subject,
        body,
        scheduledTime: new Date(scheduledTime)
      }
    });

    res.json(email);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error scheduling email"
    });
  }
});

router.get("/", async (req, res) => {
  const emails = await prisma.email.findMany();
  res.json(emails);
});

export default router;