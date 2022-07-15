import { Request, Response } from "express";
import LoginService from "../database/services/Login.service";
import generateToken from "../helpers/generateToken";

class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  async findAll(req: Request, res: Response) {
    return res.send();
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const emailExists = await this.loginService.findByEmail(data.email);

      if (emailExists)
        return res.status(403).json({ message: "E-mail já cadastrado!" });

      const login = await this.loginService.store(data);

      return res
        .status(201)
        .json({ login, token: generateToken({ id: login.id }) });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const logins = await this.loginService.getAll();

      if (logins.length > 0) return res.status(200).json(logins);
      return res.status(204).json();
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const login = await this.loginService.findByPk(+id);

      if (login === null) return res.status(204).json();
      return res.status(200).json(login);
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;

      const login = await this.loginService.findByPk(+id);

      if (login === null) return res.status(204).json();
      await this.loginService.update(+id, data);

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

      const login = await this.loginService.findByPk(+id);

      if (login === null) return res.status(204).json();

      await this.loginService.destroy(+id);

      return res.status(200).json({ message: "Usuário removido com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }
}

export default new LoginController();
