import bcrypt from "bcrypt";
import { INewUser } from "../../interfaces/models/INewUser";
import { INewUserService } from "../../interfaces/services/INewUserService";
import NewUser from "../models/NewUser";

class NewUserService implements INewUserService {
  async store(
    data: Pick<INewUser, "name" | "email" | "password">
  ): Promise<INewUser> {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    const newUser = await NewUser.create({ ...data, password: hashedPassword });

    newUser.password = undefined;

    return newUser;
  }

  async getAll(): Promise<INewUser[]> {
    const newUser = await NewUser.findAll();
    return newUser;
  }

  findByPk(id: number): Promise<INewUser> {
    return NewUser.findByPk(id);
  }

  findByEmail(email: string): Promise<INewUser> {
    return NewUser.findOne({ where: { email } });
  }

  async update(id: number, data: INewUser): Promise<INewUser> {
    await NewUser.update(data, { where: { id } });

    const updatedNewUser = await NewUser.findByPk(id);

    return updatedNewUser;
  }

  async destroy(id: number): Promise<void> {
    await NewUser.destroy({ where: { id } });
  }
}

export default NewUserService;
