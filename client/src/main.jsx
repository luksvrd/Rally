import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

const httpLink = createHttpLink({
  uri: "http://rally2.herokuapp.com/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
// TODO: Set up Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),

  uri: "http://rally2.herokuapp.com/",
  // Forcing use of heroku backend rather than localhost
  // || "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
