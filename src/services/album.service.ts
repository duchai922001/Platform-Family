import { AlbumRepositoryImpl } from "../infrastructure/repositoriesImpl/album.repositoryImpl";

const AlbumRepo = new AlbumRepositoryImpl();
export const AlbumService = {
  createAlbum: async (album: any) => {
    return await AlbumRepo.createAlbum(album);
  },

  getAlbumByFamily: async (familyId: string) => {
    return await AlbumRepo.getAlbumByFamily(familyId);
  },
};
