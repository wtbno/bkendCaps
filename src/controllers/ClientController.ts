import { Request, Response } from "express";

import ClientService from "src/database/services/Client.service";
import generateToken from "../helpers/generateToken";

class ClientController {
  private clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const cnpjExists = await this.clientService.findByCnpj(data.Cnpj);

      if (cnpjExists)
        return res.status(403).json({ message: "CNPJ já cadastrado!" });

      const client = await this.clientService.store(data);

      return res
        .status(201)
        .json({ client, token: generateToken({ id: client.id }) });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const clients = await this.clientService.getAll();

      if (clients.length > 0) return res.status(200).json(clients);
      return res.status(204).json();
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const client = await this.clientService.findByPk(+id);

      if (client === null) return res.status(204).json();
      return res.status(200).json(client);
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;

      const client = await this.clientService.findByPk(+id);

      if (client === null) return res.status(204).json();
      await this.clientService.update(+id, data);

      return res
        .status(200)
        .json({ message: "Cliente atualizado com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const client = await this.clientService.findByPk(+id);

      if (client === null) return res.status(204).json();

      await this.clientService.destroy(+id);

      return res.status(200).json({ message: "Cliente removido com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }
}

export default new ClientController();
