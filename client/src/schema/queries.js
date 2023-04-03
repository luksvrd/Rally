import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      username
      email
      habits {
        id
        name
        streak
      }
      groups {
        id
        name
        iconFamily
      }
    }
  }
`;

export const GET_HABITS = gql`
  query GetHabits {
    habits {
      id
      name
    }
  }
`;

export const GET_GROUPS = gql`
  query GetAllGroups {
    getAllGroups {
      id
      name
      description
    }
  }
`;

// Refactor for naming convention
export const GET_ONE_USER = gql`
  query GetOneUser($userId: ID!) {
    getOneUser(userId: $userId) {
      id
      username
      email
      habits {
        habitId
        habitName
        startDate
        longestStreak
      }
      groups {
        groupId
        groupName
      }
    }
  }
`;

export const GET_ONE_GROUP = gql`
  query GetOneGroup($groupId: ID!) {
    getOneGroup(groupId: $groupId) {
      name
      description
      members {
        username
        habits {
          name
          streak
        }
      }
    }
  }
`;
