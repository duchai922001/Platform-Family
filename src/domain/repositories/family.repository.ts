import { createFamilyDTO } from "../../presentations/dtos/family/create.dto";
import { IFamily } from "../../types/family.interface";

export interface FamilyRepository {
  create(family: createFamilyDTO): Promise<IFamily>;
}
