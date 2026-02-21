import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "./middleware/auth.js";

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());


app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { email, password: hashed },
    });

    res.json({ message: "User created" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
});

app.get("/tasks", authMiddleware, async (req, res) => {
    const tasks = await prisma.task.findMany({
        where: { userId: req.user.id },
    });

    res.json(tasks);
});


app.post("/tasks", authMiddleware, async (req, res) => {
    const task = await prisma.task.create({
        data: {
            title: req.body.title,
            userId: req.user.id,
        },
    });

    res.json(task);
});


app.put("/tasks/:id", authMiddleware, async (req, res) => {
    const id = Number(req.params.id);

    const updated = await prisma.task.update({
        where: { id },
        data: req.body,
    });

    res.json(updated);
});


app.delete("/tasks/:id", authMiddleware, async (req, res) => {
    const id = Number(req.params.id);

    await prisma.task.delete({
        where: { id },
    });

    res.json({ success: true });
});


app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
