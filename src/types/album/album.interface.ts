import { Document, Types } from "mongoose";

export interface IAlbum extends Document {
  title: string;
  description: string;
  createdBy: string;
  photos: string[];
  familyId: string;
}
