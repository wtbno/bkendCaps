import express, { Request, Response } from "express";
import ProductController from "../../controllers/ProductController";
import Authorization from "../../middlewares/Authorization";

const routes = express.Router();

routes.post(
  "/product",

  (req: Request, res: Response) => ProductController.store(req, res)
);
routes.get(
  "/products",

  (req: Request, res: Response) => ProductController.index(req, res)
);
routes.get(
  "/product/:id",

  (req: Request, res: Response) => ProductController.findOne(req, res)
);
routes.put(
  "/product/:id",

  (req: Request, res: Response) => ProductController.update(req, res)
);
routes.delete(
  "/product/:id",

  (req: Request, res: Response) => ProductController.destroy(req, res)
);

export default routes;
