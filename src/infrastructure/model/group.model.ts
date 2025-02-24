import mongoose, { Schema, Document } from "mongoose";

export interface IGroup extends Document {
  name: string;
  familyId: string;
  members: string[];
  createdBy: string;
}

const GroupSchema = new Schema<IGroup>(
  {
    name: { type: String, required: true },
    familyId: { type: String, required: true },
    members: [{ type: String }],
    createdBy: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Group = mongoose.model<IGroup>("Group", GroupSchema);
