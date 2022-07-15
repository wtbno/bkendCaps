import { Request, Response } from "express";
import NovoService from "../database/services/Novo.service";
import generateToken from "../helpers/generateToken";

class NovoController {
  private novoService: NovoService;

  constructor() {
    this.novoService = new NovoService();
  }

  async findAll(req: Request, res: Response) {
    return res.send();
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const emailExists = await this.novoService.findByEmail(data.email);

      if (emailExists)
        return res.status(403).json({ message: "E-mail já cadastrado!" });

      const novo = await this.novoService.store(data);

      return res
        .status(201)
        .json({ novo, token: generateToken({ id: novo.id }) });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const novos = await this.novoService.getAll();

      if (novos.length > 0) return res.status(200).json(novos);
      return res.status(204).json();
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const novo = await this.novoService.findByPk(+id);

      if (novo === null) return res.status(204).json();
      return res.status(200).json(novo);
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;

      const novo = await this.novoService.findByPk(+id);

      if (novo === null) return res.status(204).json();
      await this.novoService.update(+id, data);

      return res
        .status(200)
        .json({ message: "Usuário atualizado com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const novo = await this.novoService.findByPk(+id);

      if (novo === null) return res.status(204).json();

      await this.novoService.destroy(+id);

      return res.status(200).json({ message: "Usuário removido com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }
}

export default new NovoController();
