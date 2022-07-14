import { Request, Response } from "express";
import NewUserService from "../database/services/User.service";
import generateToken from "../helpers/generateToken";

class NewUserController {
  private newUserService: NewUserService;

  constructor() {
    this.newUserService = new NewUserService();
  }

  async findAll(req: Request, res:Response) {
    return res.send();
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const emailExists = await this.newUserService.findByEmail(data.email);

      if (emailExists)
        return res.status(403).json({ message: "E-mail já cadastrado!" });

      const newUser = await this.newUserService.store(data);

      return res
        .status(201)
        .json({ newUser, token: generateToken({ id: newUser.id }) });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const newUsers = await this.newUserService.getAll();

      if (newUsers.length > 0) return res.status(200).json(newUsers);
      return res.status(204).json();
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const newUser = await this.newUserService.findByPk(+id);

      if (newUser === null) return res.status(204).json();
      return res.status(200).json(newUser);
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;

      const newUser = await this.newUserService.findByPk(+id);

      if (newUser === null) return res.status(204).json();
      await this.newUserService.update(+id, data);

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

      const newUser = await this.newUserService.findByPk(+id);

      if (newUser === null) return res.status(204).json();

      await this.newUserService.destroy(+id);

      return res.status(200).json({ message: "Usuário removido com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }
}

export default new NewUserController();
