import { Request, Response } from "express";
import { model } from "../index";

const mcqController = (req: Request, res: Response) => {
  async function run() {
    const link = req.query.link;
    const title = req.query.title;
    const channel = req.query.channel;

    console.log(link, channel, title);
    const prompt = `
        
        generate 10 mcq using the content of the video: ${link}
  
  
        title : ${title}
      
        channel: ${channel}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    const newprompt =
      text +
      `
        
        ` +
      `
        
        create an mcq json object having below format
  
        {
            question:string,
            option:array,
            right_answer:index of right answer
            explanation: short explanation of right answer
            
        }`;

    const newresult = await model.generateContent(newprompt);
    const newresponse = await newresult.response;
    const newtext = newresponse.text();
    console.log(newtext);
    res.json(newtext);
  }

  run();
};

export default mcqController;
