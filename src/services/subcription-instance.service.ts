import { SubscriptionInstance } from "../infrastructure/model/subscription-instance.model";
import { FamilyRepositoryImpl } from "../infrastructure/repositoriesImpl/family.repository-implement";
import { SubscriptionInstanceRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-instance.repository-implement";
import { SubscriptionPackageRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-package.repository-implement";

const packageRepo = new SubscriptionPackageRepositoryImpl();
const instanceRepo = new SubscriptionInstanceRepositoryImpl();
const familyRepo = new FamilyRepositoryImpl();
export const SubcriptionInstanceService = {
  registerServicePackage: async (data: any) => {
    return await instanceRepo.createServicePackage(data);
  },
  getFamilySubscriptions: async () => {
    const subscriptions = await SubscriptionInstance.aggregate([
      {
        $sort: { createdAt: -1 }, // Sắp xếp theo thời gian đăng ký mới nhất
      },
      {
        $group: {
          _id: "$familyId", // Nhóm theo familyId
          subscription: { $first: "$$ROOT" }, // Lấy đăng ký mới nhất của mỗi gia đình
        },
      },
      {
        $lookup: {
          from: "subscriptionpackages", // Ghép nối với bảng SubscriptionPackage
          localField: "subscription.packageId",
          foreignField: "_id",
          as: "packageInfo",
        },
      },
      {
        $unwind: "$packageInfo", // Chuyển mảng packageInfo thành object
      },
      {
        $lookup: {
          from: "families", // Ghép nối với bảng Family
          localField: "_id",
          foreignField: "_id",
          as: "familyInfo",
        },
      },
      {
        $unwind: "$familyInfo", // Chuyển mảng familyInfo thành object
      },
      {
        $project: {
          _id: 0,
          familyId: "$_id",
          familyName: "$familyInfo.name", // Lấy tên gia đình
          packageId: "$subscription.packageId",
          packageName: "$packageInfo.name",
          packageType: "$packageInfo.type",
          price: "$packageInfo.price",
          maxMembers: "$packageInfo.maxMembers",
          createdAt: "$subscription.createdAt",
        },
      },
    ]);
    return subscriptions;
  },
};
