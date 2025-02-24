import { BadRequestException } from "../../domain/exceptions/bad-request.exception";
import { NotFoundException } from "../../domain/exceptions/not-found.exception";
import { IGroupRepository } from "../../domain/repositories/group.repository";
import { Group, IGroup } from "../model/group.model";

export class GroupRepositoryImpl implements IGroupRepository {
  async findGroupByCreatedBy(userId: string): Promise<IGroup[]> {
    return await Group.find({ createdBy: userId });
  }
  async deleteGroup(groupId: string): Promise<void> {
    await Group.findByIdAndDelete(groupId);
  }
  async createGroup(data: IGroup): Promise<IGroup> {
    return await Group.create(data);
  }
  async findGroupByUser(userId: string): Promise<IGroup[]> {
    return await Group.find({ members: userId });
  }
  async addMemberToGroup(
    groupId: string,
    userIds: string[]
  ): Promise<IGroup | null> {
    const group = await Group.findById(groupId);
    if (!group) {
      throw new NotFoundException("Nhóm không tồn tại.");
    }
    const existingMembers = new Set(group.members.map(String));
    const alreadyInGroup = userIds.filter((id) => existingMembers.has(id));
    const newMembers = userIds.filter((id) => !existingMembers.has(id));
    if (alreadyInGroup.length > 0) {
      throw new BadRequestException(
        `Thành viên sau đã có trong nhóm: ${alreadyInGroup.join(", ")}`
      );
    }
    return await Group.findByIdAndUpdate(
      groupId,
      { $addToSet: { members: { $each: newMembers } } },
      { new: true }
    );
  }
}
