import { ReportRepositoryImpl } from "../infrastructure/repositoriesImpl/report.repositoryImpl";
import { ReportDTO } from "../presentations/dtos/report/report.dto";
import { IReport } from "../types/report/report.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const reportRepo = new ReportRepositoryImpl();
export const ReportService = {
  createReport: async (data: IReport) => {
    const dataDTO = await createAndValidateDto(ReportDTO, data);
    return await reportRepo.createReport(dataDTO);
  },

  getReports: async () => {
    return await reportRepo.getReports();
  },

  deleteReport: async (reportId: string) => {
    return await reportRepo.deleteReport(reportId);
  },
};
