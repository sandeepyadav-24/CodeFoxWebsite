import { Request, Response } from "express";
import { model } from "../index";
import { YoutubeTranscript } from "youtube-transcript";
import OpenAI from "openai";
import Groq from "groq-sdk";

const mcqController = (req: Request, res: Response) => {
  async function run() {
    const url = req.query.link;
    const title = req.query.title;
    const channel = req.query.channel;

    const groqKey = "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";

    const groq = new Groq({ apiKey: groqKey });

    // Extract video ID from the link
    //const videoId = url.split("v=")[1];

    // Fetching transcript from Youtube API
    const transcript = await YoutubeTranscript.fetchTranscript("sNrLlmOIn-c");

    let value = "";
    let count = 0;
    for (const i of transcript) {
      if (count >= 200) break;
      value += i.text;
      count++;
    }
    const question = 10;

    const newPrompt = `
Generate a JSON object for a multiple-choice question (MCQ) based on the following summary:
"${value}"

The MCQ should contain the following structure:
{
  "question": "Your question based on the summary",
  "options": [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  "answer": "Correct option",
  "explanation": "Brief explanation of the answer"
}

Ensure that the JSON is correctly formatted without syntax errors and that the question, options, and explanation are directly related to the provided summary.
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: newPrompt,
        },
      ],
      model: "llama3-70b-8192",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
      response_format: {
        type: "json_object",
      },
      stop: null,
    });

    const newText = chatCompletion.choices[0].message.content;

    res.json({ result: newText });
  }

  run();
};

export default mcqController;
