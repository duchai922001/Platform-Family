import { GroupRepositoryImpl } from "../infrastructure/repositoriesImpl/group.repositoryImpl";
import { AddMembersGroupDTO } from "../presentations/dtos/group/add-member-group.dto";
import { GroupDTO } from "../presentations/dtos/group/group.dto";
import { ICreateGroup } from "../types/group/create-group.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const GroupRepo = new GroupRepositoryImpl();
export const GroupService = {
  createGroup: async (data: ICreateGroup) => {
    const dataDTO = await createAndValidateDto(GroupDTO, data);
    const response = await GroupRepo.createGroup(dataDTO);
    return response;
  },

  findGroupByUser: async (userId: string) => {
    const findGroupByUserCreated = await GroupRepo.findGroupByCreatedBy(userId);
    const findGroupByMembers = await GroupRepo.findGroupByUser(userId);
    const results = [...findGroupByUserCreated, ...findGroupByMembers];
    return results;
  },

  addMemberToGroup: async (data: any) => {
    const dataDTO = await createAndValidateDto(AddMembersGroupDTO, data);
    const response = await GroupRepo.addMemberToGroup(
      dataDTO.groupId,
      dataDTO.userIds
    );
    return response;
  },

  deleteGroup: async (groupId: string) => {
    await GroupRepo.deleteGroup(groupId);
  },
};
