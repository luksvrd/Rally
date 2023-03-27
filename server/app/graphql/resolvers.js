import userController from "../user/controller.js";
import { handleError } from "../utils.js";

function handleNoUser(msg) {
  handleError(new Error(msg), "UNAUTHENTICATED");
}

const resolvers = {
  Query: {
    currentUser(_, __, { user }) {
      return user;
    },
    async getOneUser(_, { userId }) {
      return await userController.getUserById(userId);
    },
    async getAllUsers() {
      return await userController.index();
    },
  },

  Mutation: {
    async createUser(_, { user }) {
      const token = await userController.createUser(user);
      return { token };
    },
    async login(_, { username, password }) {
      const token = await userController.authenticateUser(username, password);
      return { token };
    },
    async updateUser(_, { userId, userData }, { user }) {
      if (!user) handleNoUser("You must be logged in");
      return await userController.updateUser(userId, userData);
    },
    async addHabit(_, { userId, habitName }, { user }) {
      if (!user) handleNoUser("You must be logged in");
      return await userController.addHabit(userId, habitName);
    },
    async updateHabit(_, { userId, habitId, habitData }, { user }) {
      if (!user) handleNoUser("You must be logged in");
      return await userController.updateHabit(userId, habitId, habitData);
    },
    async removeHabit(_, { userId, habitId }, { user }) {
      if (!user) handleNoUser("You must be logged in");
      return await userController.deleteHabit(userId, habitId);
    },
  },
};

export default resolvers;
