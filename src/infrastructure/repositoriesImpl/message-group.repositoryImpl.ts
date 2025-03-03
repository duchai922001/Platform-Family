import { IMessageGroupRepository } from "../../domain/repositories/message-group.repository";
import { IGroupMessage } from "../../types/group-message/group-message.interface";
import { MessageGroup } from "../model/message-group.model";

export class GroupMessageRepositoryImpl implements IMessageGroupRepository {
  async sendGroupMessage(data: IGroupMessage): Promise<IGroupMessage> {
    return await MessageGroup.create(data);
  }
  async getGroupMessages(groupId: string): Promise<IGroupMessage[]> {
    return await MessageGroup.find({ groupId }).sort({ createdAt: 1 });
  }
}
