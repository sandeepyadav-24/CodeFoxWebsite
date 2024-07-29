import { Request, Response } from "express";
import Notes from "./../model/notes";

export const notesPost = (req: Request, res: Response) => {
  const title = req.body.title;
  const data = req.body.data;
  Notes.findOneAndUpdate(
    {
      title,
    },
    { title, data },
    { new: true, upsert: true }
  )
    .then(() => res.json({ msg: "Notes added Successfully" }))
    .catch(() => res.status(400).json({ error: "Unable to add this notes" }));
};

export const notesGet = (req: Request, res: Response) => {
  const title = req.query.title;
  Notes.findOne({
    title,
  })
    .then((response) => res.send(response))
    .catch((err) =>
      res.status(400).json({ error: "Unable to fetch the data" })
    );
};
