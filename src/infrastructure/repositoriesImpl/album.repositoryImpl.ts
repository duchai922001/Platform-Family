import { AlbumRepository } from "../../domain/repositories/album.repository";
import { AlbumDTO } from "../../presentations/dtos/album/album.dto";
import { IAlbum } from "../../types/album/album.interface";
import { Album } from "../model/album.model";

export class AlbumRepositoryImpl implements AlbumRepository {
  async createAlbum(album: AlbumDTO): Promise<IAlbum> {
    return await Album.create(album);
  }
  async getAlbumByFamily(familyId: string): Promise<IAlbum[]> {
    return await Album.find({ familyId }).exec();
  }
}
