import User from "../user/index.js";
import Group from "./group.js";

const groupController = {
  async createGroup(groupData, userId) {
    console.log(groupData, userId);
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      const newGroup = new Group(groupData);
      newGroup.members.push(userId);
      await newGroup.save();
      return await Group.populate(newGroup, { path: "members" });
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create group");
    }
  },

  async getGroupById(groupId) {
    return await Group.findById(groupId).populate("members");
  },

  async deleteGroup(groupId) {
    const group = await Group.findByIdAndDelete(groupId);
    return groupId;
  },

  async addMember(groupId, userId) {
    const group = await Group.findById(groupId);
    const user = await User.findById(userId);
    group.members.push(user);
    await group.save();
    return group;
  },

  async removeMember(groupId, userId) {
    const group = await Group.findById(groupId);
    const user = await User.findById(userId);
    group.members.pull(user);
    await group.save();
    return group;
  },
};

export default groupController;
