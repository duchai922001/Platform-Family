import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { ReportController } from "../controllers/report.controller";
import { ReportDTO } from "../dtos/report/report.dto";

const reportRoutes = Router();

reportRoutes.post(
  "/create",
  transformAndValidate(ReportDTO),
  catchAsync(ReportController.createReport)
);

reportRoutes.get("/", catchAsync(ReportController.getReports));

reportRoutes.delete(
  "/delete/:reportId",
  catchAsync(ReportController.deleteReport)
);
export default reportRoutes;
