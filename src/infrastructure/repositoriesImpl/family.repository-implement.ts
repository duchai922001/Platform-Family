import { FamilyRepository } from "../../domain/repositories/family.repository";
import { createFamilyDTO } from "../../presentations/dtos/family/create.dto";
import { IFamily } from "../../types/family.interface";
import { Family } from "../model/family.model";

export class FamilyRepositoryImpl implements FamilyRepository {
  create(family: createFamilyDTO): Promise<IFamily> {
    return Family.create(family);
  }
}
