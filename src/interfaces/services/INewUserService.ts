/* eslint-disable no-unused-vars */

import { INewUser } from "../models/INewUser";

// Funções para fazer comunicação com o BD

// Pick => Pega as informações obrigatórias para salvar
// Omit => Pega tudo, menos o que eu passar pra ele

export interface INewUserService {
  findByEmail(email: INewUser["email"]): Promise<INewUser>;
  findByPk(id: INewUser["id"]): Promise<INewUser>;
  getAll(): Promise<INewUser[]>;
  update(id: number, data: INewUser): Promise<INewUser>;
  destroy(id: number): Promise<void>;
  store(data: Pick<INewUser, "name" | "email" | "password">): Promise<INewUser>;
}
