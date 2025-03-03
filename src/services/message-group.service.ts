import { GroupMessageRepositoryImpl } from "../infrastructure/repositoriesImpl/message-group.repositoryImpl";
import { IGroupMessage } from "../types/group-message/group-message.interface";

const groupMessageRepo = new GroupMessageRepositoryImpl();
export const GroupMessageService = {
  sendGroupMessage: async (data: IGroupMessage) => {
    return await groupMessageRepo.sendGroupMessage(data);
  },

  getGroupMessages: async (groupId: string) => {
    return await groupMessageRepo.getGroupMessages(groupId);
  },
};
