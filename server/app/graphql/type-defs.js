const typeDefs = `
type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    habits: [Habit]
    groups: [Group]
}

input UserInput {
    username: String!
    email: String!
    password: String!
}

type Habit {
    habitId: ID
    name: String!
    frequency: Int
    startDate: String
    "The user who is keeping track of this habit"
    # Might need to change this into an array of user IDs if multiple people have the same habit
    userId: ID
}

input HabitInput {
    name: String
    frequency: Int
    startDate: String
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
    createUser(userData: UserInput!): Auth
    "Logs in an existing user"
    login(username: String!, password: String!): Auth
    "Updates a user's login info"
    updateUser(userId: ID!, userData: UserInput!): User
    "Creates a new group"
    createGroup(groupName: String!): Group
    "Add a member to a group"
    addMember(groupId: ID!, userId: ID!): Group
    "Remove a member from a group"
    removeMember(groupId: ID!, userId: ID!): Group
    "Add a new habit for a logged in user"
    addHabit(userId: ID!, habitData: HabitInput): User
    "Update a habit for a logged in user"
    updateHabit(userId: ID!, habitId: ID!, habitData: HabitInput!): User
    "Remove a habit for a logged in user"
    removeHabit(userId: ID!, habitId: ID!): User
}
`;

export default typeDefs;
