import User from "./index.js";

const userController = {
  // Create a new user with the provided user data and return the authenticated user.
  async createUser(newUser) {
    try {
      const createdUser = await User.create(newUser);
      return createdUser.authenticate(newUser.password);
    } catch (error) {
      // If a user with the same username or email already exists, throw an error.
      if (error.code === 11000) {
        throw new Error("Username/email already exists");
      }
      throw error;
    }
  },

  // Authenticate a user with the provided username and password.
  async authenticateUser(username, password) {
    // Find a user with the provided username.
    const user = await User.findOne({ username });
    // If a user is found, authenticate the user with the provided password.
    return user?.authenticate(password);
  },

  // Get a user with the provided user ID and populate their groups.
  async getUserById(userId) {
    const user = await User.findById(userId).populate("groups");
    return user;
  },

  // Delete a user with the provided user ID.
  async deleteUser(userId) {
    return User.findByIdAndDelete(userId);
  },

  // Add a new habit for a user with the provided user ID and habit data.
  async addHabit(userId, habitData) {
    const user = await User.findById(userId);
    // Push the new habit data to the user's habits array and save the user.
    user.habits.push(habitData);
    return user.save();
  },

  // Update a habit for a user with the provided user ID, habit ID, and update data.
  async updateHabit(userId, habitId, updateData) {
    const user = await User.findById(userId);
    // Find the habit with the provided habit ID in the user's habits array and update it with the provided update data.
    const habit = user.habits.id(habitId);
    habit.set(updateData);
    return user.save();
  },

  // Delete a habit for a user with the provided user ID and habit ID.
  async deleteHabit(userId, habitId) {
    const user = await User.findById(userId);
    // Find the habit with the provided habit ID in the user's habits array and remove it from the array.
    user.habits.pull(habitId);
    return user.save();
  },

  // Add today's date to the datesCompleted array of a habit with the provided habit ID for a user with the provided user ID.
  async addDate(userId, habitId) {
    const user = await User.findById(userId);
    // Find the habit with the provided habit ID in the user's habits array.
    const habit = user.habits.id(habitId);
    // Get today's date and format it as a string.
    const date = new Date();
    const today = date.toISOString().slice(0, 10);
    // If the habit was not already completed today, add today's date to the datesCompleted array.
    if (
      !habit.datesCompleted.some(
        (completedDate) => completedDate.toISOString().slice(0, 10) === today
      )
    ) {
      habit.datesCompleted.push(date);
    }
    return user.save();
  },
};

export default userController;
