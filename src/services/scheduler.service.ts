import moment from "moment";
import { BadRequestException } from "../domain/exceptions/bad-request.exception";
import { FamilyRepositoryImpl } from "../infrastructure/repositoriesImpl/family.repository-implement";
import { createSchedulerDTO } from "../presentations/dtos/scheduler/create-scheduler.dto";
import { createAndValidateDto } from "../utils/createAndValidateDto";
import { SchedulerRepositoryImpl } from "../infrastructure/repositoriesImpl/scheduler.repository-implement";
import { updateSchedulerDTO } from "../presentations/dtos/scheduler/update-scheduler.dto";
import { IUpdateScheduler } from "../types/scheduler/update-scheduler.interface";

const familyRepo = new FamilyRepositoryImpl();
const schedulerRepo = new SchedulerRepositoryImpl();
export const SchedulerService = {
  createScheduler: async (data: createSchedulerDTO) => {
    const schedulerDTO = await createAndValidateDto(createSchedulerDTO, data);
    const familyExits = await familyRepo.findFamilyById(schedulerDTO.familyId);
    const converFamilyMembers = familyExits?.members?.map((member) =>
      member.toString()
    );
    const checkMemberExitsInFamily = converFamilyMembers?.includes(
      schedulerDTO.createdBy
    );
    if (!checkMemberExitsInFamily) {
      throw new BadRequestException("Member not exits in family");
    }
    const newScheduler = {
      ...schedulerDTO,
      date: moment(schedulerDTO.date).format("YYYY-MM-DD HH:mm:ss"),
    };
    return await schedulerRepo.createScheduler(newScheduler);
  },
  updateScheduler: async (schedulerId: string, data: IUpdateScheduler) => {
    return await schedulerRepo.updateScheduler(schedulerId, data);
  },

  getSchedulerFamily: async (familyId: string) => {
    return await schedulerRepo.getSchedulerFamily(familyId);
  },
};
