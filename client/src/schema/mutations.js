import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Mutation($userData: UserInput!) {
    createUser(userData: $userData) {
      user {
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;
