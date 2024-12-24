import { Document } from "mongoose";

export interface IFeature extends Document {
  featureName: string;
  description: string;
}
