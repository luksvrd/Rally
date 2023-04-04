import { Schema } from "mongoose";

export const HabitSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    datesCompleted: [{ type: Date }],
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

// This is just for reading, not writing to the database
HabitSchema.virtual("streak").get(
  // ⚠️ MUST use 'function' for correct 'this' binding
  function () {
    return this.datesCompleted.length;
  }
);
