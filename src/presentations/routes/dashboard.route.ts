import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { DashboardController } from "../controllers/dashboard.controller";
const dashboardRoutes = Router();

dashboardRoutes.post("/", catchAsync(DashboardController.getDashboard));

export default dashboardRoutes;
