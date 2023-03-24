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

type Auth {
    "Returns JWT and user info"
    token: ID!
    user: User
}

type Query {
    "Gets logged in user"
    currentUser: User
    "Gets another user's profile"
    getOneUser(userID: ID!): User
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
    addMember(userID: ID!): Group
    "Add a new habit for a logged in user"
    addHabit(habitName: String!): User
    "Remove a habit for a logged in user"
    removeHabit(habitID: ID!): User
}
`;

export default typeDefs;
