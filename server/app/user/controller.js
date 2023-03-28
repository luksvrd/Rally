import User from "./index.js";

const userController = {
  async createUser(newUser) {
    try {
      const createdUser = await User.create(newUser);
      return createdUser.authenticate(newUser.password);
    } catch (error) {
      if (error.code === 11000) {
        throw new Error("Username/email already exists");
      }
      throw error;
    }
  },

  async authenticateUser(username, password) {
    const user = await User.findOne({ username });
    return user?.authenticate(password);
  },

  async getUserById(userId) {
    return User.findById(userId);
  },

  async updateUser(userId, updateData) {
    return User.findByIdAndUpdate(userId, updateData, { new: true });
  },

  async deleteUser(userId) {
    return User.findByIdAndDelete(userId);
  },

  async addHabit(userId, habitData) {
    const user = await User.findById(userId);
    user.habits.push(habitData);
    return user.save();
  },

  async updateHabit(userId, habitId, updateData) {
    const user = await User.findById(userId);
    const habit = user.habits.id(habitId);
    habit.set(updateData);
    return user.save();
  },

  async deleteHabit(userId, habitId) {
    const user = await User.findById(userId);
    user.habits.id(habitId).remove();
    return user.save();
  }
};

export default userController;