import { UserRepositoryImpl } from "../infrastructure/repositoriesImpl/user.repository-implement";
import { UpdateInfoUserDto } from "../presentations/dtos/user/update-info-user.dto";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const UserRepo = new UserRepositoryImpl();

export const UserService = {
  updateInfoUser: async (userId: string, data: any) => {
    const dataUpdateDTO = await createAndValidateDto(UpdateInfoUserDto, data);
    return await UserRepo.updateUser(userId, dataUpdateDTO);
  },
};
