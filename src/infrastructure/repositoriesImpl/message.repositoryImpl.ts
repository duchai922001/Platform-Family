import { IMessaegRepository } from "../../domain/repositories/message.repository";
import { IMessage } from "../../types/message/message.interface";
import { Message } from "../model/message.model";

export class MessageRepositoryImpl implements IMessaegRepository {
  async getMessages(sender: string, receiver: string): Promise<IMessage[]> {
    const messages = await Message.find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort({ createdAt: 1 });
    return messages;
  }
  async sendMessage(data: IMessage): Promise<IMessage> {
    return await Message.create(data);
  }
}
