import { Schema } from "mongoose";

const HabitSchema = new Schema(
  {
    name: { type: String, required: true },
    frequency: { type: Number, required: true },
    startDate: { type: Date, required: true },
  },
  {
    _id: false
  }
);

export { HabitSchema };
