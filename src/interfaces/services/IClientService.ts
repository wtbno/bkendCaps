/* eslint-disable no-unused-vars */
import { IClient } from "../models/IClient";

// Funções para fazer comunicação com o BD

// Pick => Pega as informações obrigatórias para salvar
// Omit => Pega tudo, menos o que eu passar pra ele

export interface IClientService {
  findByCnpj(cnpj: IClient["cnpj"]): Promise<IClient>;
  findByPk(id: IClient["id"]): Promise<IClient>;
  getAll(): Promise<IClient[]>;
  update(id: number, data: IClient): Promise<IClient>;
  destroy(id: number): Promise<void>;
  store(
    data: Pick<IClient,"corpname" | "cnpj" | "adress">
  ): Promise<IClient>;
}
