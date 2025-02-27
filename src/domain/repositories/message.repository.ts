import { IMessage } from "../../types/message/message.interface";

export interface IMessaegRepository {
  sendMessage(data: IMessage): Promise<IMessage>;
  getMessages(sender: string, receiver: string): Promise<IMessage[]>;
}
