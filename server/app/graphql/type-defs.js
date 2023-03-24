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
`;

export default typeDefs;
