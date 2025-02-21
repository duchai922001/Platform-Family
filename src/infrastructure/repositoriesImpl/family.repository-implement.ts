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
  async getMembersFamily(familyId: string): Promise<IUser[]> {
    const family = await Family.findById(familyId);
    if (!family) {
      throw new NotFoundException("Family not found");
    }
    const memberIds = family.members.map(
      (id) => new mongoose.Types.ObjectId(id)
    );
    const members = await User.find({ _id: { $in: memberIds } }).exec();
    return members;
  }
  removeMembers(familyId: string, members: string[]): Promise<IFamily | null> {
    return Family.findByIdAndUpdate(
      familyId,
      { $pull: { members: { $in: members } } },
      { new: true }
    );
  }
  addMembers(familyId: string, members: string[]): Promise<IFamily | null> {
    return Family.findByIdAndUpdate(
      familyId,
      { $push: { members: { $each: members } } },
      { new: true }
    );
  }
  findFamilyById(familyId: string): Promise<IFamily | null> {
    return Family.findById(familyId);
  }
  registerInstance(
    familyId: string,
    data: IUpdateFamilyInstance
  ): Promise<IFamily | null> {
    return Family.findByIdAndUpdate(familyId, data, {
      new: true,
    });
  }
  create(family: createFamilyDTO): Promise<IFamily> {
    return Family.create(family);
  }
}
