import bcrypt from "bcrypt";
import { ILogin } from "../../interfaces/models/ILogin";
import { ILoginService } from "../../interfaces/services/ILoginService";
import Login from "../models/Login";

class LoginService implements ILoginService {
  async store(data: Pick<ILogin, "email" | "password">): Promise<ILogin> {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    const login = await Login.create({ ...data, password: hashedPassword });

    login.password = undefined;

    return login;
  }

  async getAll(): Promise<ILogin[]> {
    const logins = await Login.findAll({});

    return logins;
  }

  findByPk(id: number): Promise<ILogin> {
    return Login.findByPk(id);
  }

  findByEmail(email: string): Promise<ILogin> {
    return Login.findOne({ where: { email } });
  }

  async update(id: number, data: ILogin): Promise<ILogin> {
    await Login.update(data, { where: { id } });

    const updatedLogin = await Login.findByPk(id);

    return updatedLogin;
  }

  async destroy(id: number): Promise<void> {
    await Login.destroy({ where: { id } });
  }
}

export default LoginService;
