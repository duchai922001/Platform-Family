import { Request, Response } from "express";
import { SchedulerService } from "../../services/scheduler.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const SchedulerController = {
  createScheduler: async (req: Request, res: Response) => {
    const rawData = req.body;
    const newScheduler = await SchedulerService.createScheduler(rawData);
    return res.json(
      successResponse(
        HttpStatus.CREATED,
        "Scheduler created successfully",
        newScheduler
      )
    );
  },

  updateScheduler: async (req: Request, res: Response) => {
    const { schedulerId, title, description, date } = req.body;
    const updateScheduler = await SchedulerService.updateScheduler(
      schedulerId,
      { title, description, date }
    );
    return res.json(
      successResponse(
        HttpStatus.OK,
        "Scheduler updated successfully",
        updateScheduler
      )
    );
  },
  getSchedulerFamily: async (req: Request, res: Response) => {
    const { familyId } = req.params;
    const schedulers = await SchedulerService.getSchedulerFamily(familyId);

    return res.json(
      successResponse(HttpStatus.OK, "Get Scheduler Success", schedulers)
    );
  },
};
