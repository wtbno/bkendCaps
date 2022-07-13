import bcrypt from "bcrypt";
import { IClient } from "src/interfaces/models/IClient";

import { IClientService } from "src/interfaces/services/IClientService";
import Client from "../models/Client";

class ClientService implements IClientService {
  async store(
    data: Pick<IClient, "corpname" | "cnpj" | "adress">
  ): Promise<IClient> {
    const client = await Client.create({ ...data });
    return client;
  }

  async getAll(): Promise<IClient[]> {
    const clients = await Client.findAll();

    return clients;
  }

  findByPk(id: number): Promise<IClient> {
    return Client.findByPk(id);
  }

  findByCnpj(cnpj: string): Promise<IClient> {
    return Client.findOne({ where: { cnpj } });
  }

  async update(id: number, data: IClient): Promise<IClient> {
    await Client.update(data, { where: { id } });

    const updatedClient = await Client.findByPk(id);

    return updatedClient;
  }

  async destroy(id: number): Promise<void> {
    await Client.destroy({ where: { id } });
  }
}

export default ClientService;
