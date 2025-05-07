import { Schema, model } from 'mongoose';
const NoteSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (value) => {
            if (!value.match(/^[A-Z]/)) {
                throw new Error('Note title must start with a capital letter');
            }
        },
    },
    autor: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
});
export const Note = model('Note', NoteSchema);
