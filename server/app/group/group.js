import { model, Schema } from "mongoose";

const GroupSchema = new Schema(
  {
    name: {type: String, required: true},
    description: {type: String},
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default model("Group", GroupSchema);