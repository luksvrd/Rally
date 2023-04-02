import groupController from "../group/groupController.js";
import userController from "../user/userController.js";
import { handleError } from "../utils.js";

function handleNoUser(msg) {
  handleError(new Error(msg), "UNAUTHENTICATED");
}

const resolvers = {
  Query: {
    async currentUser(_, __, { user }) {
      return await userController.getUserById(user.id);
    },
    async getOneUser(_, { userId }) {
      return await userController.getUserById(userId);
    },
    async getAllUsers() {
      return await userController.index();
    },
    async getOneGroup(_, { groupId }) {
      return await groupController.getGroupById(groupId);
    },
    async getAllGroups() {
      return await groupController.getAllGroups();
    },
  },

  Mutation: {
    async createUser(_, { userData }) {
      const token = await userController.createUser(userData);
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
    async addHabit(_, { userId, habitData }, { user }) {
      if (!user) handleNoUser("You must be logged in");
      return await userController.addHabit(userId, habitData);
    },
    async updateHabit(_, { userId, habitId, habitData }, { user }) {
      if (!user) handleNoUser("You must be logged in");
      return await userController.updateHabit(userId, habitId, habitData);
    },
    async removeHabit(_, { userId, habitId }, { user }) {
      if (!user) handleNoUser("You must be logged in");
      return await userController.deleteHabit(userId, habitId);
    },
    async createGroup(_, { groupData, userId }) {
      return await groupController.createGroup(groupData, userId);
    },
    async deleteGroup(_, { groupId }) {
      return await groupController.deleteGroup(groupId);
    },
    async addMember(_, { groupId, userId }) {
      return await groupController.addMember(groupId, userId);
    },
    async removeMember(_, { groupId, userId }) {
      return await groupController.removeMember(groupId, userId);
    },
    async addDate(_, { userId, habitId }) {
      return await userController.addDate(userId, habitId);
    },
  },
};

export default resolvers;
