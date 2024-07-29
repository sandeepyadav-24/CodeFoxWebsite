import { Request, Response } from "express";

import { model } from "./../index";

const summaryController = (req: Request, res: Response) => {
  async function run() {
    const link = req.query.link;
    const title = req.query.title;
    const channel = req.query.channel;

    // console.log(link, channel, title)
    const prompt = `
        
        Provide a detailed summary of the video: ${link}. 
        
        Title: ${title}

        channel: ${channel}


        Include a comprehensive overview of the main points, key concepts, and supporting details. 

        Explain complex ideas in a clear and concise manner.

        Use headings and bullet points to organize the information effectively. 


        try without any extension and
        
        your response should be wrap inside paragraph tag with proper styling, color, spacing etc using only tailwind

        style as much beautiful as you can
        `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.send(text);
    console.log(text);
  }

  run();
};

export default summaryController;
