import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { AlbumDTO } from "../dtos/album/album.dto";
import { AlbumController } from "../controllers/album.controller";
import { verifyToken } from "../../middlewares/verify.middlewares";
const albumRoutes = Router();

albumRoutes.post(
  "/create",
  verifyToken,
  transformAndValidate(AlbumDTO),
  catchAsync(AlbumController.createAlbum)
);

albumRoutes.get("/:familyId", catchAsync(AlbumController.getAlbumFamily));
export default albumRoutes;
