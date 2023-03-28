import bcrypt from "bcrypt";
import { Schema } from "mongoose";
import config from "../config.js";
import { encodeToken, handleError } from "../utils.js";

const UserSchema = new Schema(
    {
      username: { type: String, required: true, unique: true },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must use a valid email address"],
      },
      password: { type: String, required: true },
  
      habits: [{
        name: { type: String, required: true },
        frequency: { type: Number, required: true },
        startDate: { type: Date, required: true },
      }]
    },
    {
      versionKey: false,
    }
  );

  UserSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, config.saltRounds);
    }
  
    next();
  });

  UserSchema.methods.authenticate = async function (password) {
    const isCorrectPassword = await bcrypt.compare(
      password,
      // 'this' references the document (user) that called this method
      this.password
    );
  
    if (!isCorrectPassword) {
      handleError(new Error("Invalid credentials."), "UNAUTHORIZED");
    }
  
    const tokenPayload = {
      username: this.username,
      id: this._id,
      habits: this.habits // include the user's habits in the token payload
    };
  
    return encodeToken(tokenPayload);
  };