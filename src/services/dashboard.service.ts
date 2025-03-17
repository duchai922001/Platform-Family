import { BadRequestException } from "../domain/exceptions/bad-request.exception";
import { Post } from "../infrastructure/model/post.model";
import { SubscriptionInstance } from "../infrastructure/model/subscription-instance.model";
import { User } from "../infrastructure/model/user.model";

export const DashboardService = {
  getDashboards: async (startDate: string, endDate: string) => {
    if (!startDate || !endDate) {
      throw new BadRequestException("startDate and endDate is required");
    }

    const from = new Date(startDate);
    const to = new Date(endDate);
    to.setHours(23, 59, 59, 999);

    const newRegistrationsCount = await User.countDocuments({
      createdAt: { $gte: from, $lte: to },
    });

    const revenue = await SubscriptionInstance.aggregate([
      {
        $match: {
          startDate: { $gte: from, $lte: to },
        },
      },
      {
        $lookup: {
          from: "subscriptionpackages", // Tên collection trong MongoDB (chú ý lowercase + thêm 's' nếu cần)
          localField: "packageId",
          foreignField: "_id",
          as: "package",
        },
      },
      { $unwind: "$package" }, // Bóc tách mảng kết quả lookup
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$package.price" }, // Tính tổng giá của các gói
        },
      },
    ]);

    const totalPost = await Post.countDocuments({
      createdAt: { $gte: from, $lte: to },
    });

    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const totalNewPost = await Post.countDocuments({
      createdAt: { $gte: last24Hours, $lte: now }, // Lọc bài đăng trong 24h gần nhất
    });

    return {
      totalPost,
      totalNewPost,
      revenue,
      newRegistrationsCount,
    };
  },
};
