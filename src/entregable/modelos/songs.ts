import { Document, Schema, model } from 'mongoose';

interface SongDocumentInterface extends Document {
  title: string,
  autor: string,
  genre: string,
}

const SongSchema = new Schema<SongDocumentInterface>({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
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

export const Song = model<SongDocumentInterface>('Song', SongSchema);
