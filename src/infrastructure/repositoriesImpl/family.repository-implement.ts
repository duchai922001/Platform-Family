import { FamilyRepository } from "../../domain/repositories/family.repository";
import { createFamilyDTO } from "../../presentations/dtos/family/create.dto";
import { IFamily } from "../../types/family.interface";
import { IUpdateFamilyInstance } from "../../types/family/update-family-instance.interface";
import { Family } from "../model/family.model";

export class FamilyRepositoryImpl implements FamilyRepository {
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
