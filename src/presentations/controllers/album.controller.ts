import { Request, Response } from "express";
import { AlbumService } from "../../services/album.service";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { successResponse } from "../../utils/response-success";

export const AlbumController = {
  createAlbum: async (req: Request, res: Response) => {
    const user = res.locals.user;
    const payload = {
      ...req.body,
      createdBy: user.userId,
    };
    const newAlbum = await AlbumService.createAlbum(payload);
    return res
      .status(HttpStatus.CREATED)
      .json(
        successResponse(HttpStatus.CREATED, "Created Album Success", newAlbum)
      );
  },

  getAlbumFamily: async (req: Request, res: Response) => {
    const { familyId } = req.params;
    const albums = await AlbumService.getAlbumByFamily(familyId);
    return res.json(
      successResponse(HttpStatus.OK, "Get Album Success", albums)
    );
  },
};
