import express from "express";
import dotenv from "dotenv";
import { runNoah } from "./noah.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/noah/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Brak message" });
  }

  const reply = await runNoah(message);
  res.json({ reply: { text: reply } });
});

app.listen(3000, () => {
  console.log("✅ Backend działa na http://localhost:3000");
});
