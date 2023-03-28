import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation CreateUser($user: UserInput) {
    createUser(user: $user) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;
