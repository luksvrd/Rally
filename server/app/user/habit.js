import { Schema } from "mongoose";

export const HabitSchema = new Schema(
  {
<<<<<<< HEAD
    title: { type: String, required: true },
    description: { type: String },
    frequency: { type: Number, default: 1 },
    streak: { type: Boolean, default: false },
    // completed: {type: Schema.Types.Object.Id, ref: "Group"},
=======
    title: { type: String, required: true},
    description: { type: String},
    frequency: {type: Number, default: 1},
    streak: {type: Boolean, default: false},
>>>>>>> 1a0641309f41fdf94ee089fb657ede0b608de738
  },
  {
    versionKey: false,
  }
);
