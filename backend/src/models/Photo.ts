import { Schema, model, Document } from 'mongoose';

//Mongoose Schema
const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

//Typescript model
interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);