const typeDefs = `
type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    habits: [Habit]
}

type Habit {
    habitId: ID!
    habitName: String!
    dayStreak: INT
    longestStreak: INT
    "The user who is keeping track of this habit"
    # Might need to change this into an array of user IDs if multiple people have the same habit
    userId: ID!
}

input HabitInput {
    habitName: String
    dayStreak: INT
    longestStreak: INT
}

type Group {
    groupId: ID!
    groupName: String!
    members: [User]
}

type Auth {
    "Returns JWT and user info"
    token: ID!
    user: User
}

type Query {
    "Gets logged in user"
    currentUser: User
    "Gets another user's profile"
    getOneUser(userId: ID!): User
    "Gets all users"
    getAllUsers: [User]
}

type Mutation {
    "Creates a new user"
    createUser(email: String!, username: String!, password: String!): Auth
    "Logs in an existing user"
    login(email: String!, password: String!): Auth
    "Creates a new group"
    createGroup(groupName: String!): Group
    "Add members to a group"
    addMember(userId: ID!): Group
    "Add a new habit for a logged in user"
    addHabit(userId: ID!, habitName: String!): User
    "Update a habit for a logged in user"
    updateHabit(userId: ID!, habitId: ID!, habitData: HabitInput!): User
    "Remove a habit for a logged in user"
    removeHabit(userId: ID!, habitId: ID!): User
}
`;

export default typeDefs;
