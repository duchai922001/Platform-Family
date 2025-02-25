import mongoose from "mongoose";
import { NotFoundException } from "../../domain/exceptions/not-found.exception";
import { FamilyRepository } from "../../domain/repositories/family.repository";
import { createFamilyDTO } from "../../presentations/dtos/family/create.dto";
import { IFamily } from "../../types/family.interface";
import { IUpdateFamilyInstance } from "../../types/family/update-family-instance.interface";
import { IUser } from "../../types/user.interface";
import { Family } from "../model/family.model";
import { User } from "../model/user.model";

export class FamilyRepositoryImpl implements FamilyRepository {
  async findFamilyOfMember(userId: string): Promise<IFamily[]> {
    return await Family.find({ members: userId });
  }
  async findFamilyOfAdmin(userId: string): Promise<IFamily[]> {
    return await Family.find({ admin: userId });
  }
  async checkUniqueNumberCode(codeNumber: string): Promise<IFamily | null> {
    return await Family.findOne({ codeNumber });
  }
  async getMembersFamily(
    familyId: string
  ): Promise<{ admin: IUser | null; members: IUser[] }> {
    const family = await Family.findById(familyId);
    if (!family) {
      throw new NotFoundException("Family not found");
    }
    const admin = await User.findById(family.admin).exec();
    const memberIds = family.members.map(
      (id) => new mongoose.Types.ObjectId(id)
    );

    const members = await User.find({ _id: { $in: memberIds } }).exec();
    return {
      admin,
      members,
    };
  }
  async removeMembers(
    familyId: string,
    members: string[]
  ): Promise<IFamily | null> {
    return await Family.findByIdAndUpdate(
      familyId,
      { $pull: { members: { $in: members } } },
      { new: true }
    );
  }
  async addMembers(
    familyId: string,
    members: string[]
  ): Promise<IFamily | null> {
    return await Family.findByIdAndUpdate(
      familyId,
      { $push: { members: { $each: members } } },
      { new: true }
    );
  }
  async findFamilyById(familyId: string): Promise<IFamily | null> {
    return await Family.findById(familyId);
  }
  async registerInstance(
    familyId: string,
    data: IUpdateFamilyInstance
  ): Promise<IFamily | null> {
    return await Family.findByIdAndUpdate(familyId, data, {
      new: true,
    });
  }
  async create(family: createFamilyDTO): Promise<IFamily> {
    return await Family.create(family);
  }
}
