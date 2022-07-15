import bcrypt from "bcrypt";

import { INovo } from "../../interfaces/models/INovo";

import { INovoService } from "src/interfaces/services/INovoService";
import Novo from "../models/Novo";

class NovoService implements INovoService {
  async store(
    data: Pick<INovo, "name" | "email" | "password">
  ): Promise<INovo> {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    const novo = await Novo.create({ ...data, password: hashedPassword });

    novo.password = undefined;

    return novo;
  }

  async getAll(): Promise<INovo[]> {
    const novo = await Novo.findAll();
    return novo;
  }

  findByPk(id: number): Promise<INovo> {
    return Novo.findByPk(id);
  }

  findByEmail(email: string): Promise<INovo> {
    return Novo.findOne({ where: { email } });
  }

  async update(id: number, data: INovo): Promise<INovo> {
    await Novo.update(data, { where: { id } });

    const updatedNovo = await Novo.findByPk(id);

    return updatedNovo;
  }

  async destroy(id: number): Promise<void> {
    await Novo.destroy({ where: { id } });
  }
}

export default NovoService;
