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
  mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const CREATEGROUP = gql`
  mutation Mutation($userId: ID!) {
    createGroup(userId: $userId) {
      name
      description
    }
  }
`;
