import { Schema } from "mongoose";

export const HabitSchema = new Schema(
  {
    title: { type: String, required: true},
    description: { type: String},
    frequency: {type: Number, default: 1},
    streak: {type: Boolean, default: false},
  },
  {
    versionKey: false,
  }
);
