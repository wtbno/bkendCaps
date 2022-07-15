/* eslint-disable no-unused-vars */

import { INovo } from "../models/INovo";

// Funções para fazer comunicação com o BD

// Pick => Pega as informações obrigatórias para salvar
// Omit => Pega tudo, menos o que eu passar pra ele

export interface INovoService {
  findByEmail(email: INovo["email"]): Promise<INovo>;
  findByPk(id: INovo["id"]): Promise<INovo>;
  getAll(): Promise<INovo[]>;
  update(id: number, data: INovo): Promise<INovo>;
  destroy(id: number): Promise<void>;
  store(data: Pick<INovo, "name" | "email" | "password">): Promise<INovo>;
}
