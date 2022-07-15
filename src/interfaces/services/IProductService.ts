/* eslint-disable no-unused-vars */

import { IProduct } from "../models/IProduct";

// Funções para fazer comunicação com o BD

// Pick => Pega as informações obrigatórias para salvar
// Omit => Pega tudo, menos o que eu passar pra ele

export interface IProductService {
  findByCode(productCode: IProduct["productCode"]): Promise<IProduct>;
  findByPk(id: IProduct["id"]): Promise<IProduct>;
  getAll(): Promise<IProduct[]>;
  update(id: number, data: IProduct): Promise<IProduct>;
  destroy(id: number): Promise<void>;
  store(
    data: Pick<
      IProduct,
      "productCode" | "buyPrice" | "productDesc" | "salePrice" | "unitMeas"
    >
  ): Promise<IProduct>;
}
