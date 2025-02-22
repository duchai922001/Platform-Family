import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../../config/cloundinary";
import { Request, Response } from "express";
import { BadRequestException } from "../../domain/exceptions/bad-request.exception";
import { ICustomParamsUpdate } from "../../types/upload/upload.interface";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "WEBBLUETOOTH" as string,
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }] as any,
  } as ICustomParamsUpdate,
});

export const upload = multer({ storage: storage });

export const uploadImageSingle = async (req: Request, res: Response) => {
  if (!req.file) {
    throw new BadRequestException("No file provided");
  }
  const fileUrl = req.file.path;
  res.send({ url: fileUrl });
};

export const uploadMultipleImages = async (req: Request, res: Response) => {
  if (!Array.isArray(req.files)) {
    throw new BadRequestException("Files not provided or incorrect format");
  }
  const fileLinks = req.files.map((file: any) => file.path);
  res.send({ urls: fileLinks });
};
