import { Request, Response } from "express";
import { groq } from "./../index";

// Define types
interface CurriculumRequest {
  title: string;
  difficulty: string;
}

interface CurriculumResponse {
  title: string;
  difficulty: string;
  units: { unit: string; topics: string[] }[];
  generatedOn: string;
}

const curriculumController = (req: Request, res: Response) => {
  async function run() {
    const { title, difficulty }: CurriculumRequest = req.body;

    // Construct the prompt for OpenAI
    const prompt = `Generate a structured curriculum for a course titled "${title}" at the "${difficulty}" level. 
    The curriculum should be divided into units, and each unit should have a list of topics. 
    For example:
    {
    "course_title":"Python",
   "level":"Beginner",
   "units":[
      {
         "unit_title":"Introduction to Python",
         "topics":[
            "Variables",
            "Data Types",
            "Operators",
            "Basic Syntax",
            "Indentation"
         ]
      },
      {
         "unit_title":"Working with Strings",
         "topics":[
            "String Literals",
            "String Methods",
            "String Formatting",
            "Escape Sequences"
         ]
      },....] }
    
    Provide the curriculum in a structured JSON format. and only generate json in this format only that is given in example `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
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
    console.log(newText);
    res.json({ result: newText });
  }

  run();
};

export default curriculumController;
