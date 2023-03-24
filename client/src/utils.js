export const decodeUserFromToken = () => {
  const token = localStorage.getItem("token");

  // * Decode the token
  // https://developer.mozilla.org/en-US/docs/Web/API/atob
  const decoded = token ? JSON.parse(atob(token.split(".")[1])) : null;

  // * Check if the token has expired
  return decoded?.exp > Math.floor(Date.now() / 1000)
    ? // Server encodes 'user' object in the token - that's what we care about
      decoded.user
    : null;
};
