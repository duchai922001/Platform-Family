import { IGroup } from "../../infrastructure/model/group.model";

export interface IGroupRepository {
  createGroup(data: IGroup): Promise<IGroup>;
  findGroupByUser(userId: string): Promise<IGroup[]>;
  findGroupByCreatedBy(userId: string): Promise<IGroup[]>;
  addMemberToGroup(groupId: string, userIds: string[]): Promise<IGroup | null>;
  deleteGroup(groupId: string): Promise<void>;
}
