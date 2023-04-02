import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation CreateUser($userData: UserInput!) {
    createUser(userData: $userData) {
      token
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
  mutation Mutation($userId: ID!, $groupData: GroupInput) {
    createGroup(userId: $userId, groupData: $groupData) {
      name
      description
    }
  }
`;
