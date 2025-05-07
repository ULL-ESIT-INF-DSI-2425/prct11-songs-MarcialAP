import { Document } from 'mongoose';
interface SongDocumentInterface extends Document {
    title: string;
    autor: string;
    genre: string;
}
export declare const Song: import("mongoose").Model<SongDocumentInterface, {}, {}, {}, Document<unknown, {}, SongDocumentInterface, {}> & SongDocumentInterface & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
