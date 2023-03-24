import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import config from "./config.js";

export const encodeToken = (payload) => {
  return jwt.sign({ data: payload }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

export const handleError = (error, code = "INTERNAL_SERVER_ERROR") => {
  throw new GraphQLError(error.message, {
    extensions: {
      code,
    },
  });
};
