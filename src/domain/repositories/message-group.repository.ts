import { IGroupMessage } from "../../types/group-message/group-message.interface";

export interface IMessageGroupRepository {
  sendGroupMessage(data: IGroupMessage): Promise<IGroupMessage>;
  getGroupMessages(groupId: string): Promise<IGroupMessage[]>;
}
