import { SchedulerRepository } from "../../domain/repositories/scheduler.repository";
import { createSchedulerDTO } from "../../presentations/dtos/scheduler/create-scheduler.dto";
import { updateSchedulerDTO } from "../../presentations/dtos/scheduler/update-scheduler.dto";
import { IScheduler } from "../../types/scheduler.interface";
import { IUpdateScheduler } from "../../types/scheduler/update-scheduler.interface";
import { Scheduler } from "../model/scheduler.model";

export class SchedulerRepositoryImpl implements SchedulerRepository {
  updateScheduler(
    schedulerId: string,
    data: IUpdateScheduler
  ): Promise<IScheduler | null> {
    return Scheduler.findByIdAndUpdate(schedulerId, data, { new: true }).exec();
  }
  createScheduler(scheduler: createSchedulerDTO): Promise<IScheduler> {
    return Scheduler.create(scheduler);
  }
}
