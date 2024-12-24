import { Schema, model } from "mongoose";
import { IFeature } from "../../types/feature.interface";
const FeatureSchema = new Schema<IFeature>(
  {
    featureName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Feature = model<IFeature>("Feature", FeatureSchema);
