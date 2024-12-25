import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { createSchedulerDTO } from "../dtos/scheduler/create-scheduler.dto";
import { catchAsync } from "../../utils/catchAsync";
import { SchedulerController } from "../controllers/scheduler.controller";
import { updateSchedulerDTO } from "../dtos/scheduler/update-scheduler.dto";
const schedulerRoutes = Router();

schedulerRoutes.post(
  "/create",
  transformAndValidate(createSchedulerDTO),
  catchAsync(SchedulerController.createScheduler)
);

schedulerRoutes.put(
  "/update",
  transformAndValidate(updateSchedulerDTO),
  catchAsync(SchedulerController.updateScheduler)
);
export default schedulerRoutes;
