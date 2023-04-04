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

export const ADD_DATE = gql`
  mutation AddDate($userId: ID!, $habitId: ID!) {
    addDate(userId: $userId, habitId: $habitId) {
      username
      habits {
        name
        datesCompleted
        streak
      }
    }
  }
`;

export const JOIN_GROUP = gql`
  mutation AddMember($groupId: ID!, $userId: ID!) {
    addMember(groupId: $groupId, userId: $userId) {
      name
      description
      members {
        username
        id
      }
      iconFamily
    }
  }
`;
