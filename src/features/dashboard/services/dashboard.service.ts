import { DashboardData } from "../types/dashboard.types";

export const getDashboardData = async (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        revenue: 12000,
        users: 320,
        conversions: 12.5,
      });
    }, 1000);
  });
};