import { createSchedulerDTO } from "../../presentations/dtos/scheduler/create-scheduler.dto";
import { updateSchedulerDTO } from "../../presentations/dtos/scheduler/update-scheduler.dto";
import { IScheduler } from "../../types/scheduler.interface";
import { IUpdateScheduler } from "../../types/scheduler/update-scheduler.interface";

export interface SchedulerRepository {
  createScheduler(scheduler: createSchedulerDTO): Promise<IScheduler>;
  updateScheduler(
    schedulerId: string,
    data: IUpdateScheduler
  ): Promise<IScheduler | null>;
  deleteScheduler(schedulerId: string): Promise<boolean>;
}
