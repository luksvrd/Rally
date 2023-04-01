import User from "../user/index.js";
import userController from "../user/userController.js";
import Group from "./group.js";

const groupController = {
  async createGroup(groupData, userId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      const newGroup = new Group(groupData);
      newGroup.members.push(userId);
      await newGroup.save();
      user.groups.push(newGroup.id);
      await user.save();
      const habitData = {
        name: newGroup.description,
      };
      userController.addHabit(userId, habitData);
      return await Group.populate(newGroup, { path: "members" });
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create group");
    }
  },

  async getGroups() {
    return await Group.find().populate("members");
  },

  async getGroupById(groupId) {
    return await Group.findById(groupId).populate("members");
  },

  async deleteGroup(groupId) {
    await Group.findByIdAndDelete(groupId);
    return groupId;
  },

  async addMember(groupId, userId) {
    const group = await Group.findById(groupId);
    const user = await User.findById(userId);
    group.members.push(user);
    await group.save();
    user.groups.push(group.id);
    await user.save();
    const habitData = {
      name: group.description,
    };
    userController.addHabit(userId, habitData);
    return await Group.populate(group, { path: "members" });
  },

  async removeMember(groupId, userId) {
    const group = await Group.findById(groupId);
    const user = await User.findById(userId);
    group.members.pull(user);
    await group.save();
    return await Group.populate(group, { path: "members" });
  },
};

export default groupController;
