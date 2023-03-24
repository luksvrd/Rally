const typeDefs = `
type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    habits: [Habit]
}

type Habit {
    habitID: ID!
    habitName: String!
    dayStreak: INT
    longestStreak: INT
}

type Group {
    groupID: ID!
    groupName: String!
    members: [User]
}

type Query {
    "Gets logged in user"
    currentUser: User
    "Gets another user's profile"
    getOneUser(userID: ID!): User
    "Gets all users"
    getAllUsers: [User]
}
`;

export default typeDefs;
