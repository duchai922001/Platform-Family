import { createFamilyDTO } from "../../presentations/dtos/family/create.dto";
import { IFamily } from "../../types/family.interface";
import { IUpdateFamilyInstance } from "../../types/family/update-family-instance.interface";
import { IUser } from "../../types/user.interface";

export interface FamilyRepository {
  create(family: createFamilyDTO): Promise<IFamily>;
  registerInstance(
    familyId: string,
    data: IUpdateFamilyInstance
  ): Promise<IFamily | null>;
  findFamilyById(familyId: string): Promise<IFamily | null>;
  addMembers(familyId: string, members: string[]): Promise<IFamily | null>;
  removeMembers(familyId: string, members: string[]): Promise<IFamily | null>;
  getMembersFamily(familyId: string): Promise<IUser[]>;
}
