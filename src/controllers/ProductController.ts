import { Request, Response } from "express";
import ProductService from "../database/services/Product.service";
import generateToken from "../helpers/generateToken";

class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

 
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const productCodeExists = await this.productService.findByCode(
        data.productCode
      );

      if (productCodeExists)
        return res.status(403).json({ message: "Produto já cadastrado!" });

      const product = await this.productService.store(data);

      return res
        .status(201)
        .json({ product, token: generateToken({ id: product.id }) });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.productService.getAll();

      if (products.length > 0) return res.status(200).json(products);
      return res.status(204).json();
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const product = await this.productService.findByPk(+id);

      if (product === null) return res.status(204).json();
      return res.status(200).json(product);
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;

      const product = await this.productService.findByPk(+id);

      if (product === null) return res.status(204).json();
      await this.productService.update(+id, data);

      return res
        .status(200)
        .json({ message: "Produto atualizado com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const product = await this.productService.findByPk(+id);

      if (product === null) return res.status(204).json();

      await this.productService.destroy(+id);

      return res.status(200).json({ message: "Produto removido com sucesso!" });
    } catch (e) {
      console.log(e);

      return res.status(500).json({ message: "Erro interno no servidor!" });
    }
  }
}


export default new ProductController();