import { Request, Response } from "express";
import { Location } from "../../infrastructure/model/location.model";
import { Server } from "socket.io";

export const LocationController = {
  updateLocation: async (req: Request, res: Response, io: Server) => {
    const { userId, latitude, longitude } = req.body;

    if (!userId || !latitude || !longitude) {
      return res.status(400).json({ message: "Thiếu dữ liệu vị trí" });
    }
    const location = await Location.findOneAndUpdate(
      { userId },
      { latitude, longitude, timestamp: new Date() },
      { upsert: true, new: true }
    );
    io.emit("locationUpdate", location);
    res.status(200).json({ message: "Cập nhật vị trí thành công", location });
  },
};
