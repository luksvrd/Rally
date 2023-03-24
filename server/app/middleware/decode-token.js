import jwt from "jsonwebtoken";
import config from "../config.js";

const decodeToken = (req, _, next) => {
  // Split "Bearer <token>" into ["Bearer", "<token>"]
  const token = req.headers.authorization?.split(" ")[1];

  // This will either stay as 'undefined' or be set to the decoded token
  let decodedToken;

  // If there is a token, try to decode it
  try {
    if (token) {
      decodedToken = jwt.verify(token, config.jwt.secret);
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    // Set the user to the decoded token's data
    req.user = decodedToken?.data;

    next();
  }
};

export default decodeToken;
