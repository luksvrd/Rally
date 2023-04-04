// TODO: Add docstrings to all fields and inputs!
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
    id: ID
    name: String!
    datesCompleted: [String]
    "The user who is keeping track of this habit"
    # Might need to change this into an array of user IDs if multiple people have the same habit
    userId: ID
    streak: Int
}

input HabitInput {
    name: String
    frequency: Int
    startDate: String
}

type Group {
    id: ID!
    name: String!
    description: String
    members: [User]
    iconFamily: String
}

input GroupInput {
    name: String!
    description: String
    iconFamily: String
}

type Auth {
    "Returns JWT"
    token: ID!
}

type Query {
    "Gets logged in user"
    currentUser: User
    "Gets another user's profile"
    getOneUser(userId: ID!): User
    "Gets all users"
    getAllUsers: [User]
    "Gets one group by id"
    getOneGroup(groupId: ID!): Group
    "Gets all groups"
    getAllGroups: [Group]
}

type Mutation {
    "Creates a new user"
    createUser(userData: UserInput!): Auth
    "Logs in an existing user"
    login(username: String!, password: String!): Auth
    "Updates a user's login info"
    updateUser(userId: ID!, userData: UserInput!): User
    "Creates a new group"
    createGroup(groupData: GroupInput, userId: ID!): Group
    "Deletes a group"
    deleteGroup(groupId: ID!): Group
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
    addDate(userId: ID!, habitId: ID!): User
}
`;

export default typeDefs;
