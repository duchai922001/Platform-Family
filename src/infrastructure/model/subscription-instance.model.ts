import { Schema, model } from "mongoose";
import { ISubscriptionInstance } from "../../types/subscription-instance.interface";

const SubscriptionInstanceSchema = new Schema<ISubscriptionInstance>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Gắn với một khách hàng
    packageId: {
      type: Schema.Types.ObjectId,
      ref: "SubscriptionPackage",
      required: true,
    },

    familyId: { type: Schema.Types.ObjectId, ref: "Family", required: true }, // Gắn với một gia đình
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const SubscriptionInstance = model<ISubscriptionInstance>(
  "SubscriptionInstance",
  SubscriptionInstanceSchema
);
