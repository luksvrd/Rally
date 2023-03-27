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
};

export default resolvers;
