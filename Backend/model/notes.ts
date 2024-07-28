import mongoose from "mongoose";


const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    data: {
        type: String
    }
});

const Notes = mongoose.model("Notes", notesSchema)
export default Notes