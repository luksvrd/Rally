import { gql } from '@apollo/client";';

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
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
        # date joined from server
      }
    }
  }
`;

export const GET_HABITS = gql`
  query GetHabits {
    habits {
      habitId
      habitName
      startDate
      longestStreak
    }
  }
`;

export const GET_GROUPS = gql`
  query GetGroups {
    groups {
      groupId
      groupName
      members {
        userId
        username
      }
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
