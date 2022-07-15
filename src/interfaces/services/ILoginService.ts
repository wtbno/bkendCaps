/* eslint-disable no-unused-vars */
import { ILogin } from "../models/ILogin";

// Funções para fazer comunicação com o BD

// Pick => Pega as informações obrigatórias para salvar
// Omit => Pega tudo, menos o que eu passar pra ele

export interface ILoginService {
  findByEmail(email: ILogin["email"]): Promise<ILogin>;
  findByPk(id: ILogin["id"]): Promise<ILogin>;
  getAll(): Promise<ILogin[]>;
  update(id: number, data: ILogin): Promise<ILogin>;
  destroy(id: number): Promise<void>;
  store(
    data: Pick<ILogin, "email" |"password">
  ): Promise<ILogin>;
}
