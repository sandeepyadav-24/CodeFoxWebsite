import express from "express";
import curriculumController from "../controller/curriculum";

const router = express.Router();

router.post("/", curriculumController);

export default router;
