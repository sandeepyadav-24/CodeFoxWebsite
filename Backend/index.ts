import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import notesRouter from "./routes/notes";
import summaryRouter from "./routes/summary";
import mcqRouter from "./routes/mcq";
import curriculumRouter from "./routes/curriculum";
import Groq from "groq-sdk";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/notes", notesRouter);
app.use("/api/summary", summaryRouter);
app.use("/api/mcq", mcqRouter);
app.use("/api/curriculum", curriculumRouter);

// DB Connection
connectDB();

// GROQ Key

const groqKey = "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";

//
export const groq = new Groq({ apiKey: groqKey });

// Gemini Setup
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
