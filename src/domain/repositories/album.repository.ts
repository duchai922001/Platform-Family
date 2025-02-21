import { AlbumDTO } from "../../presentations/dtos/album/album.dto";
import { IAlbum } from "../../types/album/album.interface";

export interface AlbumRepository {
  createAlbum(album: AlbumDTO): Promise<IAlbum>;
  getAlbumByFamily(familyId: string): Promise<IAlbum[]>;
}
