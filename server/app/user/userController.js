import User from "./index.js";

// TODO{ellen}: Remove `async`s that don't have an `await` inside of them.
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
    const user = await User.findById(userId);

    return user;
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
    user.habits.pull(habitId);
    return user.save();
  },

  // This will increase the streak by 1
  async addDate(userId, habitId) {
    const user = await User.findById(userId);

    // Find the habit in the user's habits array by its id
    const habit = user.habits.id(habitId);

    const date = new Date();
    habit.datesCompleted.push(date);
    return user.save();
  },
};

export default userController;
